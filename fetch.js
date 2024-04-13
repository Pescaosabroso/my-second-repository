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

const skill1 = document.getElementById("skilldesc1");
const skillName1 = document.getElementById("skillname-1");
const skillsIcon1 = document.getElementById("skills");
  function changeSkill1() {
    fetch('https://api.pokemontcg.io/v2/cards/swsh2-192')
      .then (response => response.json())
      .then (data => {
      skillsIcon1.style.display = "none";
      skillName1.style.display = "none";
      skill1.textContent = data.data.rules;
      })};

const skill2 = document.getElementById("ability2");
  function changeSkill2() {
    fetch('https://api.pokemontcg.io/v2/cards/swsh2-192')
      .then (response => response.json())
      .then (data => {
      skill2.style.display = "none";
      })};

const stats = document.getElementById("stats");
  function changeStats() {
    fetch('https://api.pokemontcg.io/v2/cards/swsh2-192')
      .then (response => response.json())
      .then (data => {
      stats.style.display = "none";
      })};

const footNoteTitle = document.getElementById("stats-link");
const footNote = document.getElementById("fn-text");
const footLogo = document.getElementById("promo");
  function changeFootNote() {
    fetch('https://api.pokemontcg.io/v2/cards/swsh2-192')
      .then (response => response.json())
      .then (data => {
      footNoteTitle.textContent = data.data.set.name;
      footNoteTitle.href = "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/?swsh2=";
      footNote.textContent = data.data.rarity;
      footLogo.src = data.data.set.images.symbol;
      })};

changer.addEventListener("click", replaceImage);
changer.addEventListener("click", changeName);
changer.addEventListener("click", changeTier);
changer.addEventListener("click", changeSubTier);
changer.addEventListener("click", changeHp);
changer.addEventListener("click", changeSkill1);
changer.addEventListener("click", changeSkill2);
changer.addEventListener("click", changeStats);
changer.addEventListener("click", changeFootNote);

   
changer2.addEventListener("click", replaceImage);
changer2.addEventListener("click", changeName);
changer2.addEventListener("click", changeTier);
changer2.addEventListener("click", changeSubTier);
changer2.addEventListener("click", changeHp);
changer2.addEventListener("click", changeSkill1);
changer2.addEventListener("click", changeSkill2);
changer2.addEventListener("click", changeStats);
changer2.addEventListener("click", changeFootNote);


