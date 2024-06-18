const hamMenu = document.querySelector(".ham-menu");
const dropDownMenu = document.querySelector(".dropdown-menu");
const menuIcon = document.querySelector(".ham-menu img");
const hamIcon = "public/img/menu-icon.svg";
const xIcon = "public/img/x+ -icon.svg";

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  dropDownMenu.classList.toggle("active");
  if (dropDownMenu.classList.contains("active")) {
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
const moonIcon = "public/img/moon2-icon.svg";
const sunIcon = "public/img/sun-icon.svg";
const simpleNav = document.querySelector(".simple-nav");
const bannerText = document.querySelector(".nav-banner a");
const searchBar = document.querySelector(".search input");
const linksA = document.querySelectorAll(".big-screen-container li a");
const linksAh = document.querySelectorAll(".dropdown-menu li");
const pokedex = document.querySelector(".pokedex");
const backgroundColor = document.querySelector(".main");
const cardName = document.querySelector(".name");
const type = document.querySelector(".type");
const tier = document.querySelectorAll(".tier");
const notch = document.querySelector(".notch");
const abilityHeader = document.querySelector(".ability-header");
const skillName = document.querySelectorAll(".skillname-1");
const skillNameB = document.querySelectorAll(".skillname-2");
const skillDescA = document.querySelectorAll(".skilldesc1");
const skillDescB = document.querySelectorAll(".skilldesc2");
const statsSection = document.querySelector(".stats-section");
const statsNumbers = document.querySelectorAll(".weakness-num");
const statsFooter = document.querySelector(".stats-footer");
// const stylus1 = document.querySelector(".stylus");
// const stylus2 = document.querySelector(".stylus2");
// const stylus2B = document.querySelector(".stylus2::before");
// const stylus2A = document.querySelector(".stylus2::after");



const mapDarkMode = ( Array ) => {
  Array.map(element => {
    element.classList.toggle("dark-mode");
  })
}

toggleDarkMode.addEventListener("click", () => {
  const linksArray = Array.from(linksA);
  const hoverArray = Array.from(linksAh);
  const tierArray = Array.from(tier);
  const skillNameArray1 = Array.from(skillName);
  const skillNameArray2 = Array.from(skillNameB);
  const skillDescArray1 = Array.from(skillDescA);
  const skillDescArray2 = Array.from(skillDescB);
  const statsNumbersArray = Array.from(statsNumbers);

  const elementsToToggle = [
    simpleNav,
    bannerText,
    hamMenu,
    dropDownMenu,
    searchBar,
    pokedex,
    backgroundColor,
    cardName,
    type,
    notch,
    abilityHeader,
    statsSection,
    statsFooter,
    // stylus1,
    // stylus2,
    // stylus2B,
    // stylus2A
  ];
 
  elementsToToggle.forEach(element => element.classList.toggle("dark-mode"));

  mapDarkMode(linksArray);
  mapDarkMode(hoverArray);
  mapDarkMode(tierArray);
  mapDarkMode(skillNameArray1);
  mapDarkMode(skillNameArray2);
  mapDarkMode(skillDescArray1);
  mapDarkMode(skillDescArray2);
  mapDarkMode(statsNumbersArray);

  light.src = simpleNav.classList.contains("dark-mode") ? moonIcon : sunIcon;
});

console.log(toggleDarkMode);
