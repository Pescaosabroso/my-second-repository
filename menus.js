const hamMenu = document.querySelector(".hamburger-menu");

const dropDownMenu = document.querySelector(".mobile-dropdown-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  dropDownMenu.classList.toggle("active");
});