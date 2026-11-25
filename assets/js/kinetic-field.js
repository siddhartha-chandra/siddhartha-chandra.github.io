(function () {
  'use strict';

  const root = document.documentElement;
  const canvas = document.getElementById('connection-field');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;

  const sculpture = canvas.parentElement;
  const toolbar = document.querySelector('.field-toolbar');
  const motionButton = document.querySelector('.motion-toggle');
  const description = document.querySelector('.field-description');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const descriptions = {
    systems: 'Individual parts. Thoughtfully connected.',
    data: 'Finding the signal. Making it useful.',
    people: 'Different perspectives. Shared momentum.'
  };
  const points = [];
  const count = 1800;
  let mode = 'systems';
  let width = 0;
  let height = 0;
  let time = 0;
  let lastFrame = 0;
  let frame = null;
  let visible = true;
  let paused = reducedMotion.matches;
  let rotationX = -.27;
  let rotationY = .15;
  let pointerX = 0;
  let pointerY = 0;

  // Deterministic parametric forms: a connected knot, a signal wave, and a sphere.
  for (let i = 0; i < count; i++) {
    const u = (i % 150) / 150 * Math.PI * 2;
    const v = Math.floor(i / 150) / 12 * Math.PI * 2;
    const knotRadius = 1.32 + .43 * Math.cos(3 * u);
    const systems = [
      (knotRadius + .19 * Math.cos(v)) * Math.cos(2 * u),
      (knotRadius + .19 * Math.cos(v)) * Math.sin(2 * u),
      .64 * Math.sin(3 * u) + .19 * Math.sin(v)
    ];
    const angle = i * Math.PI * (3 - Math.sqrt(5));
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const people = [Math.cos(angle) * radius * 1.55, y * 1.55, Math.sin(angle) * radius * 1.55];
    const x = (i % 100) / 99 * 3.6 - 1.8;
    const row = Math.floor(i / 100) / 17 * 2 - 1;
    const data = [x, Math.sin(x * 2.2 + row * 1.8) * .6 + row * .5, Math.cos(x * 1.7 + row * 2) * .65];
    points.push({ systems, data, people, current: systems.slice(), highlight: i % 13 === 0 });
  }

  function resize() {
    width = sculpture.clientWidth;
    height = sculpture.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw();
  }

  function draw() {
    if (!width || !height) return;
    context.clearRect(0, 0, width, height);
    const dark = root.classList.contains('dark');
    const color = dark ? '197,223,168' : '51,92,69';
    const secondary = dark ? '238,239,229' : '32,38,33';
    const scale = Math.min(width, height) * .207;
    const cy = Math.cos(rotationY + time * .09);
    const sy = Math.sin(rotationY + time * .09);
    const cx = Math.cos(rotationX);
    const sx = Math.sin(rotationX);
    const projected = points.map(function (point) {
      const x = point.current[0];
      const y = point.current[1];
      const z = point.current[2];
      const rotatedX = x * cy - z * sy;
      const rotatedZ = x * sy + z * cy;
      const rotatedY = y * cx - rotatedZ * sx;
      const depth = y * sx + rotatedZ * cx;
      const perspective = 5.5 / (5.5 + depth);
      return { x: width / 2 + rotatedX * scale * perspective, y: height / 2 + rotatedY * scale * perspective, z: depth, highlight: point.highlight };
    });

    // Fine strands make the structure legible without turning it into a UI grid.
    if (mode !== 'people') {
      context.lineWidth = .55;
      const stride = mode === 'systems' ? 150 : 100;
      for (let row = 0; row < count / stride; row++) {
        context.beginPath();
        for (let col = 0; col < stride; col++) {
          const p = projected[row * stride + col];
          if (col === 0) context.moveTo(p.x, p.y);
          else context.lineTo(p.x, p.y);
        }
        if (mode === 'systems') context.closePath();
        context.strokeStyle = 'rgba(' + color + ',' + (dark ? .33 : .19) + ')';
        context.stroke();
      }
    }
    projected.sort(function (a, b) { return b.z - a.z; });
    for (const p of projected) {
      const depth = (2.2 - p.z) / 4.4;
      const opacity = (dark ? .3 : .16) + depth * .69;
      context.beginPath();
      context.arc(p.x, p.y, (p.highlight ? 1.9 : .85) * (.7 + depth * .65), 0, Math.PI * 2);
      context.fillStyle = 'rgba(' + (p.highlight ? secondary : color) + ',' + opacity + ')';
      context.fill();
    }
  }

  function animate(timestamp) {
    frame = null;
    if (paused || !visible || document.hidden) return;
    const delta = lastFrame ? Math.min(timestamp - lastFrame, 50) / 1000 : 0;
    lastFrame = timestamp;
    time += delta;
    rotationY += (pointerX * .55 + .15 - rotationY) * .035;
    rotationX += (pointerY * .3 - .27 - rotationX) * .035;
    for (const point of points) {
      for (let axis = 0; axis < 3; axis++) {
        point.current[axis] += (point[mode][axis] - point.current[axis]) * .055;
      }
    }
    draw();
    frame = requestAnimationFrame(animate);
  }

  function syncAnimation() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    lastFrame = 0;
    motionButton.setAttribute('aria-label', paused ? 'Play animation' : 'Pause animation');
    motionButton.firstElementChild.textContent = paused ? '▷' : 'Ⅱ';
    if (!paused && visible && !document.hidden) frame = requestAnimationFrame(animate);
    draw();
  }

  toolbar.hidden = false;
  toolbar.querySelectorAll('[data-mode]').forEach(function (button) {
    button.addEventListener('click', function () {
      mode = button.dataset.mode;
      toolbar.querySelectorAll('[data-mode]').forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
      description.textContent = descriptions[mode];
      if (paused) {
        points.forEach(function (point) { point.current = point[mode].slice(); });
        draw();
      }
    });
  });
  motionButton.addEventListener('click', function () { paused = !paused; syncAnimation(); });
  sculpture.addEventListener('pointermove', function (event) {
    const rect = sculpture.getBoundingClientRect();
    pointerX = (event.clientX - rect.left) / rect.width - .5;
    pointerY = (event.clientY - rect.top) / rect.height - .5;
  });
  sculpture.addEventListener('pointerleave', function () { pointerX = 0; pointerY = 0; });
  reducedMotion.addEventListener('change', function (event) { paused = event.matches; syncAnimation(); });
  document.addEventListener('visibilitychange', syncAnimation);
  window.addEventListener('themechange', draw);
  new ResizeObserver(resize).observe(sculpture);
  new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; syncAnimation(); }).observe(sculpture);
  resize();
  sculpture.classList.add('is-rendered');
  syncAnimation();
}());
