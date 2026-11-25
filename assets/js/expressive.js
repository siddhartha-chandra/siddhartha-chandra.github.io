(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");

  function updateLabel() {
    toggle.setAttribute(
      "aria-label",
      root.classList.contains("dark")
        ? "Switch to light theme"
        : "Switch to dark theme",
    );
  }

  if (toggle) {
    updateLabel();
    toggle.addEventListener("click", function () {
      root.classList.toggle("dark");
      try {
        localStorage.setItem(
          "theme",
          root.classList.contains("dark") ? "dark" : "light",
        );
      } catch (e) {
        // The theme still works when browser storage is unavailable.
      }
      updateLabel();
    });
  }
})();
