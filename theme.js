
/* =========================
   THEME STATE
========================= */

const THEME_KEY = "theme";


/* =========================
   IMAGE HANDLING
========================= */

/**
 * Switch theme-dependent images.
 */
function updateImages(isDark) {
  document.querySelectorAll(".theme-img").forEach((img) => {
    const light = img.dataset.light;
    const dark = img.dataset.dark;

    if (!light || !dark) return;

    img.src = isDark ? dark : light;
  });
}


/* =========================
   HIGHLIGHT.JS THEME
========================= */

/**
 * Switch Highlight.js theme stylesheets.
 */
function updateHighlightTheme(isDark) {
  const light = document.getElementById("hljs-light");
  const dark = document.getElementById("hljs-dark");

  if (!light || !dark) return;

  light.disabled = isDark;
  dark.disabled = !isDark;
}


/* =========================
   APPLY THEME
========================= */

/**
 * Applies theme globally:
 * - body class
 * - images
 * - highlight.js theme
 * - UI label
 */
function applyTheme(mode) {
  const isDark = mode === "dark";

  document.body.classList.toggle("dark", isDark);

  localStorage.setItem(THEME_KEY, mode);

  updateImages(isDark);
  updateHighlightTheme(isDark);

  updateThemeLabel(mode);
}


/* =========================
   UI LABEL UPDATE
========================= */

/**
 * Updates dropdown button text.
 */
function updateThemeLabel(mode) {
  const btn = document.getElementById("themeButton");

  if (!btn) return;

  btn.textContent = mode === "dark" ? "Dark" : "Light";
}


/* =========================
   DROPDOWN INITIALIZATION
========================= */

function initThemeDropdown() {
  const dropdown = document.getElementById("themeDropdown");
  const button = document.getElementById("themeButton");
  const menu = document.getElementById("themeMenu");

  if (!dropdown || !button || !menu) return;

  // Toggle menu visibility
  button.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("open");
  });

  // Theme selection
  menu.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
      dropdown.classList.remove("open");
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
}


/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
  initThemeDropdown();

  const saved = localStorage.getItem(THEME_KEY);

  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
    return;
  }

  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  applyTheme(prefersDark ? "dark" : "light");
});