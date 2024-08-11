export function handleCloseBtn() {
  document.querySelector(".close__btn").addEventListener("click", function () {
    document.querySelector(".sign-up").style.display = "none";
  });
}
