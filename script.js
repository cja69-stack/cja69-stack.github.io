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
    if (toggle) toggle.textContent = dark ? "Light mode" : "Dark mode";
  }

  // Apply the preference before the page body is painted.
  applyTheme();
  if (typeof systemTheme.addEventListener === "function") {
    systemTheme.addEventListener("change", applyTheme);
  } else if (typeof systemTheme.addListener === "function") {
    systemTheme.addListener(applyTheme);
  }

  function initializeControls() {
    const contactButton = document.querySelector(".contact-bubble");
    const contactDialog = document.querySelector("#contact-dialog");
    const contactForm = document.querySelector("#contact-form");
    if (contactButton && contactDialog && contactForm) {
      contactButton.addEventListener("click", (event) => {
        event.preventDefault();
        contactDialog.showModal();
      });
      contactDialog.querySelector(".contact-close").addEventListener("click", () => contactDialog.close());
      contactDialog.addEventListener("close", () => contactButton.focus());
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!contactForm.reportValidity()) return;
        const subject = contactForm.elements.subject.value.trim();
        const message = contactForm.elements.message.value.trim();
        if (!subject || !message) {
          contactDialog.querySelector(".contact-status").textContent = "Please enter a subject and message.";
          return;
        }
        const draft = contactDialog.querySelector(".contact-draft");
        draft.href = "mailto:Cja69@njit.edu?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
        draft.hidden = false;
        contactDialog.querySelector(".contact-status").textContent = "Your draft is ready. Open your email app to review and send it.";
        draft.focus();
      });
      contactForm.addEventListener("input", () => {
        contactDialog.querySelector(".contact-draft").hidden = true;
        contactDialog.querySelector(".contact-status").textContent = "";
      });
    }
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
