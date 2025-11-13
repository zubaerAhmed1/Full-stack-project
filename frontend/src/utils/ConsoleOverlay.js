// src/utils/ConsoleOverlay.js

export function enableConsoleOverlay() {
  const overlay = document.createElement("div");
  overlay.id = "console-overlay";
  overlay.style.position = "fixed";
  overlay.style.bottom = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.maxHeight = "40vh";
  overlay.style.overflowY = "auto";
  overlay.style.background = "rgba(0, 0, 0, 0.85)";
  overlay.style.color = "lime";
  overlay.style.fontSize = "12px";
  overlay.style.fontFamily = "monospace";
  overlay.style.padding = "8px";
  overlay.style.zIndex = "9999";
  overlay.style.whiteSpace = "pre-wrap";
  overlay.innerText = "🧩 Console Overlay Active...\n\n";
  document.body.appendChild(overlay);

  const log = console.log;
  const error = console.error;
  const warn = console.warn;

  console.log = (...args) => {
    overlay.innerText += "✅ " + args.join(" ") + "\n";
    log(...args);
  };
  console.error = (...args) => {
    overlay.innerText += "❌ " + args.join(" ") + "\n";
    error(...args);
  };
  console.warn = (...args) => {
    overlay.innerText += "⚠️ " + args.join(" ") + "\n";
    warn(...args);
  };
}
