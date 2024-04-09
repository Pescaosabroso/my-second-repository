const changer = document.getElementById("apiButton2");
const changer2 = document.getElementById("apiButton");

const img = document.getElementById("card")
    function replaceImage() {
    fetch('https://api.pokemontcg.io/v2/cards/swsh2-192')
      .then(response => response.json())
      .then(data => {
      img.src = data.data.images.small;
      })};

const pokeName = document.getElementById("namex");
  function changeName() {
    fetch('https://api.pokemontcg.io/v2/cards/swsh2-192')
      .then (response => response.json())
      .then (data => {
      pokeName.textContent = data.data.name;
      })};

const pokemonType = document.getElementById("tier");
  function changeTier() {
    fetch('https://api.pokemontcg.io/v2/cards/swsh2-192')
      .then (response => response.json())
      .then (data => {
      pokemonType.textContent = data.data.supertype;
      })};
    
const pokemonType2 = document.getElementById("subtier");
  function changeSubTier() {
    fetch('https://api.pokemontcg.io/v2/cards/swsh2-192')
      .then (response => response.json())
      .then (data => {
      pokemonType2.textContent = data.data.subtypes;
      })};

const hitPoints = document.getElementById("ps_num");
const pokemonEnergy = document.getElementById("info");
const hitPointsTitle = document.getElementById("ps");
  function changeHp() {
    hitPoints.style.display = "none";
    pokemonEnergy.style.display = "none";
    hitPointsTitle.style.display = "none";
    };

// const skillType1 = document.getElementById();
// const skill1 = document.getElementById();
// const skill2 = document.getElementById();
// const statsW = document.getElementById();
// const statsR = document.getElementById();
// const statsRc = document.getElementById();
// const footNote = document.getElementById();
// const footLogo = document.getElementById();


changer.addEventListener("click", replaceImage);
changer.addEventListener("click", changeName);
changer.addEventListener("click", changeTier);
changer.addEventListener("click", changeSubTier);
changer.addEventListener("click", changeHp);



   
changer2.addEventListener("click", replaceImage);
changer2.addEventListener("click", changeName);
changer2.addEventListener("click", changeTier);
changer2.addEventListener("click", changeSubTier);
changer2.addEventListener("click", changeHp);


