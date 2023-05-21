const container_menu = document.querySelector(".container-menu");
const hamburger = document.querySelector(".container-hamburger");

hamburger.addEventListener("click", () => {
  container_menu.classList.toggle("collapse");
});
