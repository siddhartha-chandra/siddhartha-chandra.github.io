(function () {
  'use strict';

  const portrait = document.querySelector('.portrait-node');
  if (!portrait || !('IntersectionObserver' in window)) return;
  const image = portrait.querySelector('img');
  const canvas = portrait.querySelector('canvas');
  const context = canvas.getContext('2d');
  const replay = portrait.querySelector('.portrait-replay');
  if (!context) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const size = canvas.width;
  const dots = [];
  let frame = null;
  let start = null;
  let visible = false;
  let replayRequested = false;
  let played = reducedMotion.matches;
  let initialized = false;

  const clamp = value => Math.max(0, Math.min(1, value));

  function finish() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    portrait.classList.remove('is-revealing');
    portrait.style.removeProperty('--portrait-reveal');
    portrait.style.removeProperty('--portrait-lines');
    canvas.hidden = true;
  }

  function draw(progress) {
    const dark = document.documentElement.classList.contains('dark');
    context.clearRect(0, 0, size, size);
    context.fillStyle = dark ? '#bfdb9b' : '#335c45';
    dots.forEach(function (dot, index) {
      const local = clamp(progress * 2 - (index % 13) * .018);
      const settle = 1 - Math.pow(1 - local, 3);
      const tone = dark ? dot.tone : 1 - dot.tone;
      const radius = .25 + tone * 5.5;
      const x = dot.fromX + (dot.x - dot.fromX) * settle;
      const y = dot.fromY + (dot.y - dot.fromY) * settle;
      context.beginPath();
      context.arc(x, y, 1.8 + (radius - 1.8) * settle, 0, Math.PI * 2);
      context.fill();
    });
    portrait.style.setProperty('--portrait-reveal', clamp((progress - .72) / .28));
    portrait.style.setProperty('--portrait-lines', clamp(progress * 1.7));
  }

  function animate(timestamp) {
    if (start === null) start = timestamp;
    const progress = clamp((timestamp - start) / 2800);
    draw(progress);
    if (progress < 1) frame = requestAnimationFrame(animate);
    else finish();
  }

  function play() {
    if (reducedMotion.matches || !visible || document.hidden) return;
    finish();
    replayRequested = false;
    played = true;
    start = null;
    draw(0);
    canvas.hidden = false;
    portrait.classList.add('is-revealing');
    frame = requestAnimationFrame(animate);
  }

  function initialize() {
    if (initialized || !image.naturalWidth) return;
    initialized = true;
    // Sample the actual photograph, not a generic silhouette or synthetic face.
    let pixels;
    try {
      context.drawImage(image, 0, 0, size, size);
      pixels = context.getImageData(0, 0, size, size).data;
    } catch (error) {
      return; // Keep the real photograph when canvas access is unavailable.
    }
    const columns = 53;
    for (let row = 0; row < columns; row++) {
      for (let column = 0; column < columns; column++) {
        const x = Math.round((column + .5) * size / columns);
        const y = Math.round((row + .5) * size / columns);
        const offset = (y * size + x) * 4;
        const luminance = (pixels[offset] * .2126 + pixels[offset + 1] * .7152 + pixels[offset + 2] * .0722) / 255;
        // Expand the photograph's midtones so facial features survive at mobile size.
        const tone = clamp((luminance - .25) / .48);
        const index = dots.length;
        const angle = index * Math.PI * (3 - Math.sqrt(5));
        const radius = Math.sqrt((index + .5) / (columns * columns)) * size * .55;
        dots.push({ x, y, tone, fromX: size / 2 + Math.cos(angle) * radius, fromY: size / 2 + Math.sin(angle) * radius * .8 });
      }
    }
    replay.hidden = reducedMotion.matches;
    replay.addEventListener('click', function () {
      if (reducedMotion.matches || document.hidden) return;
      replayRequested = true;
      image.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      if (visible) play();
    });
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .3;
      if (!visible) finish();
      else if (replayRequested || !played) play();
    }, { threshold: .3 }).observe(image);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        replayRequested = false;
        finish();
      } else if (visible && !played) play();
    });
    reducedMotion.addEventListener('change', function () {
      replay.hidden = reducedMotion.matches;
      if (reducedMotion.matches) {
        replayRequested = false;
        played = true;
        finish();
      }
    });
  }

  if (image.complete) initialize();
  else image.addEventListener('load', initialize, { once: true });
}());
