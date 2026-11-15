(function () {
  "use strict";

  var STICKER_COLORS = {
    "0,1,0": [248, 246, 240],   // Up (+Y): White
    "0,-1,0": [234, 179, 8],    // Down (-Y): Yellow
    "0,0,1": [24, 140, 66],     // Front-Left (+Z): Green
    "0,0,-1": [34, 88, 212],    // Back-Right (-Z): Blue
    "1,0,0": [207, 36, 36],     // Front-Right (+X): Red
    "-1,0,0": [240, 116, 20]    // Back-Left (-X): Orange
  };

  var BODY_RGB = [34, 31, 28];

  var FACE_BASIS = [
    { n: [1, 0, 0], u: [0, 1, 0], v: [0, 0, 1] },
    { n: [-1, 0, 0], u: [0, 1, 0], v: [0, 0, -1] },
    { n: [0, 1, 0], u: [1, 0, 0], v: [0, 0, -1] },
    { n: [0, -1, 0], u: [1, 0, 0], v: [0, 0, 1] },
    { n: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0] },
    { n: [0, 0, -1], u: [-1, 0, 0], v: [0, 1, 0] }
  ];

  var SCRAMBLE_PRESETS = [
    // F, R', U -> centers strictly White (U), Green (F), Red (R)
    [
      { axis: 2, layer: 1, dir: -1 },
      { axis: 0, layer: 1, dir: 1 },
      { axis: 1, layer: 1, dir: -1 }
    ],
    // R, U', F'
    [
      { axis: 0, layer: 1, dir: -1 },
      { axis: 1, layer: 1, dir: 1 },
      { axis: 2, layer: 1, dir: 1 }
    ],
    // U, R, F'
    [
      { axis: 1, layer: 1, dir: -1 },
      { axis: 0, layer: 1, dir: -1 },
      { axis: 2, layer: 1, dir: 1 }
    ]
  ];

  var CAM_POS = [5.6, 4.5, 5.6];
  var LIGHT_DIR = normalize([0.28, 0.88, 0.38]);
  var CAM_W = normalize(CAM_POS);
  var CAM_U = normalize(cross([0, 1, 0], CAM_W));
  var CAM_V = cross(CAM_W, CAM_U);
  var FOCAL = 7.5;

  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  function sub(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  }

  function add(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  }

  function scale(a, s) {
    return [a[0] * s, a[1] * s, a[2] * s];
  }

  function cross(a, b) {
    return [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0]
    ];
  }

  function normalize(a) {
    var len = Math.sqrt(dot(a, a)) || 1;
    return [a[0] / len, a[1] / len, a[2] / len];
  }

  function rotVec(v, axis, angle) {
    var x = v[0], y = v[1], z = v[2];
    var c = Math.cos(angle), s = Math.sin(angle);
    if (axis === 0) return [x, y * c - z * s, y * s + z * c];
    if (axis === 1) return [x * c + z * s, y, -x * s + z * c];
    return [x * c - y * s, x * s + y * c, z];
  }

  function snapVec(v) {
    return [Math.round(v[0]), Math.round(v[1]), Math.round(v[2])];
  }

  function shadeColor(rgb, factor) {
    var r = Math.max(0, Math.min(255, Math.round(rgb[0] * factor)));
    var g = Math.max(0, Math.min(255, Math.round(rgb[1] * factor)));
    var b = Math.max(0, Math.min(255, Math.round(rgb[2] * factor)));
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function easeSlice(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function createSolvedCubies() {
    var cubies = [];
    for (var x = -1; x <= 1; x++) {
      for (var y = -1; y <= 1; y++) {
        for (var z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) continue;
          var stickers = [];
          for (var i = 0; i < FACE_BASIS.length; i++) {
            var n = FACE_BASIS[i].n;
            if (x * n[0] + y * n[1] + z * n[2] === 1) {
              var key = n[0] + "," + n[1] + "," + n[2];
              stickers.push({ n: [n[0], n[1], n[2]], rgb: STICKER_COLORS[key] });
            }
          }
          cubies.push({ pos: [x, y, z], stickers: stickers });
        }
      }
    }
    return cubies;
  }

  function commitMoveToCubies(cubies, move) {
    var angle = move.dir * (Math.PI / 2);
    for (var i = 0; i < cubies.length; i++) {
      var c = cubies[i];
      if (c.pos[move.axis] === move.layer) {
        c.pos = snapVec(rotVec(c.pos, move.axis, angle));
        for (var j = 0; j < c.stickers.length; j++) {
          c.stickers[j].n = snapVec(rotVec(c.stickers[j].n, move.axis, angle));
        }
      }
    }
  }

  function pushHistory(history, move) {
    var last = history[history.length - 1];
    if (last && last.axis === move.axis && last.layer === move.layer && last.dir === -move.dir) {
      history.pop();
    } else {
      history.push({ axis: move.axis, layer: move.layer, dir: move.dir });
    }
  }

  function initStage(stage) {
    var card = stage.closest(".project-card") || stage;
    var fallbackSvg = stage.querySelector("svg");

    var size = 72;
    var canvas = document.createElement("canvas");
    canvas.className = "rubik-cube-canvas";
    canvas.width = size;
    canvas.height = size;
    canvas.setAttribute("aria-hidden", "true");

    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var dpr = Math.min(window.devicePixelRatio || 1, 3);
    canvas.width = Math.round(size * dpr);
    canvas.height = Math.round(size * dpr);
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";

    var reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    var cubies = createSolvedCubies();
    var history = [];
    var presetIndex = 0;
    var targetScramble = SCRAMBLE_PRESETS[0];
    var desiredMode = "scrambled";
    var currentAnim = null;
    var rafId = 0;

    function project(p) {
      var rel = sub(p, CAM_POS);
      var z = -dot(rel, CAM_W);
      var x = dot(rel, CAM_U);
      var y = dot(rel, CAM_V);
      var persp = FOCAL / z;
      var scalePx = size * 0.212;
      return [
        size * 0.5 + x * persp * scalePx,
        size * 0.5 - y * persp * scalePx - 3.4
      ];
    }

    function findStickerRgb(cubie, worldNormal) {
      for (var i = 0; i < cubie.stickers.length; i++) {
        var sn = cubie.stickers[i].n;
        if (dot(sn, worldNormal) > 0.98) {
          return cubie.stickers[i].rgb;
        }
      }
      return null;
    }

    function drawQuad(pts, fillStyle, strokeStyle, lineWidth) {
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      ctx.lineTo(pts[1][0], pts[1][1]);
      ctx.lineTo(pts[2][0], pts[2][1]);
      ctx.lineTo(pts[3][0], pts[3][1]);
      ctx.closePath();
      ctx.fillStyle = fillStyle;
      ctx.fill();
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth;
        ctx.lineJoin = "round";
        ctx.stroke();
      }
    }

    function drawCubieGroup(items) {
      items.sort(function (a, b) {
        var da = sub(a.worldPos, CAM_POS);
        var db = sub(b.worldPos, CAM_POS);
        return dot(db, db) - dot(da, da);
      });

      var corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var wp = item.worldPos;

        for (var f = 0; f < FACE_BASIS.length; f++) {
          var basis = FACE_BASIS[f];
          var fn = item.rotAngle ? rotVec(basis.n, item.rotAxis, item.rotAngle) : basis.n;
          var fu = item.rotAngle ? rotVec(basis.u, item.rotAxis, item.rotAngle) : basis.u;
          var fv = item.rotAngle ? rotVec(basis.v, item.rotAxis, item.rotAngle) : basis.v;

          var fc = add(wp, scale(fn, 0.49));
          if (dot(fn, sub(CAM_POS, fc)) <= 0) continue;

          var lf = Math.max(0, dot(fn, LIGHT_DIR));
          var bodyColor = shadeColor(BODY_RGB, 0.74 + 0.36 * lf);
          var bodyPts = [];
          for (var k = 0; k < 4; k++) {
            var pt = add(fc, add(scale(fu, corners[k][0] * 0.49), scale(fv, corners[k][1] * 0.49)));
            bodyPts.push(project(pt));
          }
          drawQuad(bodyPts, bodyColor, "#141210", 0.45);

          var stickerRgb = findStickerRgb(item.cubie, basis.n);
          if (stickerRgb) {
            var stickerColor = shadeColor(stickerRgb, 0.82 + 0.20 * lf);
            var sfc = add(wp, scale(fn, 0.493));
            var stickerPts = [];
            for (var m = 0; m < 4; m++) {
              var spt = add(sfc, add(scale(fu, corners[m][0] * 0.405), scale(fv, corners[m][1] * 0.405)));
              stickerPts.push(project(spt));
            }
            drawQuad(stickerPts, stickerColor, null, 0);
          }
        }
      }
    }

    function render() {
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, size, size);

      if (!currentAnim) {
        var allItems = [];
        for (var i = 0; i < cubies.length; i++) {
          allItems.push({ cubie: cubies[i], worldPos: cubies[i].pos, rotAngle: 0, rotAxis: 0 });
        }
        drawCubieGroup(allItems);
      } else {
        var ax = currentAnim.move.axis;
        var lay = currentAnim.move.layer;
        var angle = currentAnim.angle;
        var stationary = [];
        var rotating = [];

        for (var j = 0; j < cubies.length; j++) {
          var c = cubies[j];
          if (c.pos[ax] === lay) {
            rotating.push({
              cubie: c,
              worldPos: rotVec(c.pos, ax, angle),
              rotAngle: angle,
              rotAxis: ax
            });
          } else {
            stationary.push({
              cubie: c,
              worldPos: c.pos,
              rotAngle: 0,
              rotAxis: 0
            });
          }
        }

        // Exact separating-plane order between rotating slab and stationary block
        var sepCoord = lay * 0.5;
        var sliceInFront = lay > 0 ? CAM_POS[ax] > sepCoord : CAM_POS[ax] < sepCoord;
        if (sliceInFront) {
          drawCubieGroup(stationary);
          drawCubieGroup(rotating);
        } else {
          drawCubieGroup(rotating);
          drawCubieGroup(stationary);
        }
      }

      ctx.restore();
    }

    function updateStatusLabel() {
      var isSolved = history.length === 0 && !currentAnim;
      stage.classList.toggle("is-solved", isSolved);
      stage.classList.toggle("is-unsolved", !isSolved);
      stage.setAttribute(
        "aria-label",
        isSolved
          ? "Rubik's cube solved. Activate to scramble slices."
          : "Rubik's cube scrambled. Activate or hover to solve slices."
      );
    }

    function nextStepMove() {
      if (desiredMode === "solved") {
        if (history.length === 0) return null;
        var top = history[history.length - 1];
        return { axis: top.axis, layer: top.layer, dir: -top.dir };
      }

      // Converge from current history to targetScramble:
      // Find longest matching prefix between history and targetScramble
      var matchLen = 0;
      while (
        matchLen < history.length &&
        matchLen < targetScramble.length &&
        history[matchLen].axis === targetScramble[matchLen].axis &&
        history[matchLen].layer === targetScramble[matchLen].layer &&
        history[matchLen].dir === targetScramble[matchLen].dir
      ) {
        matchLen++;
      }

      if (history.length > matchLen) {
        var extra = history[history.length - 1];
        return { axis: extra.axis, layer: extra.layer, dir: -extra.dir };
      }

      if (matchLen < targetScramble.length) {
        return targetScramble[matchLen];
      }

      return null;
    }

    function applyInstantConvergence() {
      currentAnim = null;
      var guard = 0;
      var step = nextStepMove();
      while (step && guard < 16) {
        commitMoveToCubies(cubies, step);
        pushHistory(history, step);
        step = nextStepMove();
        guard++;
      }
      render();
      updateStatusLabel();
    }

    function tick(now) {
      if (!currentAnim) {
        rafId = 0;
        return;
      }

      var elapsed = now - currentAnim.startTime;
      var t = Math.min(1, Math.max(0, elapsed / currentAnim.duration));
      var eased = easeSlice(t);
      currentAnim.angle = eased * currentAnim.move.dir * (Math.PI / 2);
      render();

      if (t >= 1) {
        var finished = currentAnim.move;
        currentAnim = null;
        commitMoveToCubies(cubies, finished);
        pushHistory(history, finished);
        render();

        var next = nextStepMove();
        if (next) {
          currentAnim = {
            move: next,
            startTime: now + 28,
            duration: 245,
            angle: 0
          };
          rafId = requestAnimationFrame(tick);
        } else {
          rafId = 0;
          updateStatusLabel();
        }
        return;
      }

      rafId = requestAnimationFrame(tick);
    }

    function scheduleConvergence(initialDelay, stepDuration) {
      if (reducedMotionQuery.matches) {
        applyInstantConvergence();
        return;
      }

      if (currentAnim) return;
      var next = nextStepMove();
      if (!next) {
        updateStatusLabel();
        return;
      }

      currentAnim = {
        move: next,
        startTime: performance.now() + (initialDelay || 0),
        duration: stepDuration || 255,
        angle: 0
      };
      updateStatusLabel();
      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
    }

    // Initialize state:
    // If motion is allowed, start 1 move into preset 0 (F applied) and physically rotate R' then U on viewport entry.
    // If reduced motion is preferred, start directly in full 3-move F R' U state.
    if (reducedMotionQuery.matches) {
      for (var s = 0; s < targetScramble.length; s++) {
        commitMoveToCubies(cubies, targetScramble[s]);
        pushHistory(history, targetScramble[s]);
      }
    } else {
      commitMoveToCubies(cubies, targetScramble[0]);
      pushHistory(history, targetScramble[0]);
    }

    if (fallbackSvg) {
      fallbackSvg.style.display = "none";
    }
    stage.appendChild(canvas);
    render();
    updateStatusLabel();

    if (!reducedMotionQuery.matches && "IntersectionObserver" in window) {
      var entered = false;
      var observer = new IntersectionObserver(
        function (entries) {
          for (var e = 0; e < entries.length; e++) {
            if (entries[e].isIntersecting && !entered) {
              entered = true;
              observer.disconnect();
              scheduleConvergence(260, 290);
            }
          }
        },
        { threshold: 0.35 }
      );
      observer.observe(stage);
    } else if (!reducedMotionQuery.matches) {
      scheduleConvergence(260, 290);
    }

    var pointerLockedByClick = false;

    card.addEventListener("mouseenter", function () {
      if (pointerLockedByClick) return;
      desiredMode = "solved";
      scheduleConvergence(0, 240);
    });

    card.addEventListener("mouseleave", function () {
      pointerLockedByClick = false;
      desiredMode = "scrambled";
      scheduleConvergence(0, 240);
    });

    stage.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      pointerLockedByClick = true;
      if (desiredMode === "solved" && history.length === 0) {
        presetIndex = (presetIndex + 1) % SCRAMBLE_PRESETS.length;
        targetScramble = SCRAMBLE_PRESETS[presetIndex];
        desiredMode = "scrambled";
      } else if (desiredMode === "scrambled") {
        desiredMode = "solved";
      } else {
        desiredMode = "scrambled";
      }
      scheduleConvergence(0, 235);
    });
  }

  function boot() {
    var stages = document.querySelectorAll(".js-rubik-stage");
    for (var i = 0; i < stages.length; i++) {
      initStage(stages[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
