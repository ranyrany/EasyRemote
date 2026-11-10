"use strict";

// Only changes the visible instructions. No personal data is collected or sent.
const platformButtons = document.querySelectorAll("[data-os]");
const platformGuides = {
  windows: document.getElementById("windows-guide"),
  mac: document.getElementById("mac-guide")
};

platformButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.os;
    platformButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    Object.entries(platformGuides).forEach(([os, panel]) => {
      panel.hidden = os !== selected;
    });
  });
});
