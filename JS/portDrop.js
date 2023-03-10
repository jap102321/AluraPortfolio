const dropdownInfo = document.querySelectorAll("[data-main]");

dropdownInfo.forEach((el) => {
  const select = el.querySelector("[data-moreInfo]");
  const menu = el.querySelector("[data-projectPort]");
  select.addEventListener("click", () => {
    menu.classList.toggle("dropped");
  });
});
