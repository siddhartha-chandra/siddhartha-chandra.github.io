(function () {
  'use strict';
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  if (!button) return;

  function updateLabel() {
    button.setAttribute('aria-label', root.classList.contains('dark') ? 'Switch to light theme' : 'Switch to dark theme');
  }
  button.hidden = false;
  updateLabel();
  button.addEventListener('click', function () {
    const dark = root.classList.toggle('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (error) {}
    updateLabel();
    window.dispatchEvent(new Event('themechange'));
  });
}());
