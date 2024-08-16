import { handleCloseBtn } from "./src/js/closeBtn";
import { handleViewAll } from "./src/js/viewBtn";
import { slider } from "./src/js/slider.js";

document.addEventListener("DOMContentLoaded", () => {
  handleCloseBtn();
  handleViewAll();
  slider();
});
