const hamMenu = document.querySelector(".ham-menu");
const dropDownMenu = document.querySelector(".dropdown-menu");
const menuIcon = document.querySelector(".ham-menu img")
const hamIcon = 'public/img/menu-icon.svg';
const xIcon = 'public/img/x+ -icon.svg';

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  dropDownMenu.classList.toggle("active");
  if (dropDownMenu.classList.contains('active')) {
    menuIcon.src = xIcon;
    menuIcon.style.transform = `rotate(45deg)`;
  } else {
    menuIcon.src = hamIcon;
    menuIcon.style.transform = `rotate(0deg)`;
  }
});

const toggleDarkMode = document.querySelector(".illumination");
// const toggleDarkMode2 = document.querySelector(".illumination2");
const light = document.querySelector(".illumination img");
const moonIcon = 'public/img/moon2-icon.svg';
const sunIcon = 'public/img/sun-icon.svg';
const  simpleNav= document.querySelector (".simple-nav");
const  bannerText= document.querySelector (".nav-banner a");
const  searchBar= document.querySelector (".search input");
const  linksA= document.querySelectorAll (".dropdown-menu a");
const  linksAv= document.querySelectorAll (".dropdown-menu a:visited");
const  linksAh= document.querySelectorAll (".dropdown-menu a:hover");
const  navButtons= document.querySelectorAll (".nav-buttons");
const  navButtonsV= document.querySelectorAll (".nav-buttons a:visited");
const  navButtonsH= document.querySelectorAll (".nav-buttons a:hover");
const  pokedex= document.querySelectorAll (".pokedex");
const  cardName= document.querySelectorAll (".name");

toggleDarkMode.addEventListener('click', () => {
  const elementsToToggle = [
    simpleNav,
    bannerText,
    hamMenu,
    dropDownMenu,
    searchBar,
    linksA,
  //   linksAv,
  //   linksAh,
  //   navButtons,
  //   navButtonsV,
  //   navButtonsH,
  //   pokedex,
  //   cardName
  ];

  elementsToToggle.forEach(element => element.classList.toggle('dark-mode'));

  light.src = simpleNav.classList.contains('dark-mode') ? moonIcon : sunIcon;
});


console.log(toggleDarkMode);

