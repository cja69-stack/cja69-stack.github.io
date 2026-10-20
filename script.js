(() => {
  const storageKey = "charlie-theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let preference = null;

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") preference = saved;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  function applyTheme() {
    const dark = preference ? preference === "dark" : systemTheme.matches;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) toggle.setAttribute("aria-pressed", String(dark));
  }

  // Apply the preference before the page body is painted.
  applyTheme();
  if (typeof systemTheme.addEventListener === "function") {
    systemTheme.addEventListener("change", applyTheme);
  } else if (typeof systemTheme.addListener === "function") {
    systemTheme.addListener(applyTheme);
  }

  function initializeControls() {
    document.querySelectorAll("[data-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;
    toggle.hidden = false;
    applyTheme();
    toggle.addEventListener("click", () => {
      preference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the selected theme for this page even without storage access.
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeControls);
  } else {
    initializeControls();
  }
})();
