// const hamMenu = document.querySelector(".hamburger-menu");

// const dropDownMenu = document.querySelector(".mobile-dropdown-menu");

// hamMenu.addEventListener("click", () => {
//   hamMenu.classList.toggle("active");
//   dropDownMenu.classList.toggle("active");
// });

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
  } else {
    menuIcon.src = hamIcon;
  }
});

const toggleDarkMode = document.querySelector(".illumination");
const toggleDarkMode2 = document.querySelector(".illumination2");
const light = document.querySelector(".illumination img");
const moonIcon = 'public/img/moon2-icon.svg';
const sunIcon = 'public/img/sun-icon.svg';
const  simpleNav= document.querySelector (".simple-nav");
const  bannerText= document.querySelector (".nav-banner a");
const  searchBar= document.querySelector (".searchbar2");
const  linksA= document.querySelector (".dropdown-menu a");
const  linksAv= document.querySelector (".dropdown-menu a:visited");
const  linksAh= document.querySelector (".dropdown-menu a:hover");
const  navButtons= document.querySelector (".nav-buttons");
const  navButtonsV= document.querySelector (".nav-buttons a:visited");
const  navButtonsH= document.querySelector (".nav-buttons a:hover");
const  background= document.querySelector (".pokedex");






  
  

// toggleDarkMode.addEventListener('click', () => {
//   simpleNav.classList.toggle('dark-mode');
//   bannerText.classList.toggle('dark-mode');
//   if (simpleNav.classList.contains('dark-mode')) {
//     light.src = sunIcon;
//   } else {
//     light.src = moonIcon;
//   }
//   hamMenu.classList.toggle('dark-mode');
//   dropDownMenu.classList.toggle('dark-mode');
//   searchBar.classList.toggle('dark-mode');
//   linksA.classList.toggle('dark-mode');
//   linksAv.classList.toggle('dark-mode');
//   linksAh.classList.toggle('dark-mode');
//   navButtons.classList.toggle('dark-mode');
//   navButtonsV.classList.toggle('dark-mode');
//   navButtonsH.classList.toggle('dark-mode');
//   pokedex.classList.toggle('dark-mode');
// });


toggleDarkMode.addEventListener('click', () => {
  const elementsToToggle = [
    simpleNav,
    bannerText,
    hamMenu,
    dropDownMenu,
    searchBar,
    linksA,
    linksAv,
    linksAh,
    navButtons,
    navButtonsV,
    navButtonsH,
    background
  ];

  elementsToToggle.forEach(element => element.classList.toggle('dark-mode'));

  light.src = simpleNav.classList.contains('dark-mode') ? sunIcon : moonIcon;
});

// toggleDarkMode2.addEventListener('click', () => {
//   simpleNav.classList.toggle('dark-mode');
//   bannerText.classList.toggle('dark-mode');
//   if (simpleNav.classList.contains('dark-mode')) {
//     light.src = sunIcon;
//   } else {
//     light.src = moonIcon;
//   }
//   hamMenu.classList.toggle('dark-mode');
//   dropDownMenu.classList.toggle('dark-mode');
//   searchBar.classList.toggle('dark-mode');
//   linksA.classList.toggle('dark-mode');
//   linksAv.classList.toggle('dark-mode');
//   linksAh.classList.toggle('dark-mode');
//   navButtons.classList.toggle('dark-mode');
//   navButtonsV.classList.toggle('dark-mode');
//   navButtonsH.classList.toggle('dark-mode');
//   pokedex.classList.toggle('dark-mode');
// });
