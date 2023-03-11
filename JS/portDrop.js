const dropdownInfo = document.querySelectorAll("[data-main]");

dropdownInfo.forEach((el) => {
  const select = el.querySelector("[data-moreInfo]");
  const menu = el.querySelector("[data-projectPort]");
  const unselect = el.querySelector("[data-lessInfo]");
  select.addEventListener("click", () => {
    menu.classList.toggle("dropped");
    menu.classList.toggle("undrop");
    select.classList.toggle("hide");
    unselect.classList.toggle("hide");
    if (
      select.classList.contains("hide") &&
      unselect.classList.contains("hide")
    ) {
      select.classList.remove("hide");
    }
    unselect.addEventListener("click", () => {
      menu.classList.remove("dropped");
      menu.classList.toggle("undrop");
      select.classList.toggle("hide");
      unselect.classList.toggle("hide");
    });
  });
});
