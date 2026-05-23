/* =========================
   MATHJAX CONFIGURATION
========================= */

/**
 * Global configuration for MathJax v3.
 * Must be defined BEFORE loading the MathJax script.
 */
window.MathJax = {
  tex: {
    // Inline math delimiters
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],

    // Display math delimiters
    displayMath: [
      ["$$", "$$"]
    ]
  },

  svg: {
    // Improves performance by caching rendered fonts
    fontCache: "global"
  },

  options: {
    // Speeds up initial rendering slightly
    skipHtmlTags: [
      "script",
      "noscript",
      "style",
      "textarea",
      "pre",
      "code"
    ]
  }
};