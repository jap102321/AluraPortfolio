const hamburguer = document.querySelector("[data-hamburguer-nav]");
const navList = document.querySelector("[data-nav-list]");

hamburguer.addEventListener("click", () => {
  navList.classList.toggle("dropdown");
});
