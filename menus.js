const hamMenu = document.querySelector(".hamburger-menu");

const dropDownMenu = document.querySelector(".drop-down-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  dropDownMenu.classList.toggle("active");
});