import { initializeTabs } from "./tabs";

document.addEventListener("DOMContentLoaded", () => {
  initializeTabs(
    ".reviews__tab-container",
    ".reviews__tab",
    ".reviews__content"
  );
});
