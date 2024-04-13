const changer = document.getElementById("apiButton");
const img = document.getElementById("card")
const pokeName = document.getElementById("namex");
const pokemonType = document.getElementById("tier");
const pokemonType2 = document.getElementById("subtier");
const hitPointsTitle = document.getElementById("ps");
const hitPoints = document.getElementById("ps_num");
const pokemonEnergy = document.getElementById("info");


const skillName1 = document.getElementById("skillname-1");
const skill1 = document.getElementById("skilldesc1");

const skillsIcon1 = document.getElementById("skills");


const stats = document.getElementById("stats");


const footNoteTitle = document.getElementById("stats-link");
const footNote = document.getElementById("fn-text");
const footLogo = document.getElementById("promo");

const replaceData = () => {
fetch('https://api.pokemontcg.io/v2/cards/sm3-71')
      .then(response => response.json())
      .then(data => {
      img.src = data.data.images.small;
      pokeName.textContent = data.data.name;
      pokemonType.textContent = data.data.supertype;
      pokemonType2.textContent = data.data.subtypes;
      hitPoints.textContent = data.data.hp;
      pokemonEnergy.src = "https://th.bing.com/th/id/OIP.QygT1tC9ps5pLZvmLBmwswAAAA?rs=1&pid=ImgDetMain";
      // skillName1.textContent = data.data.abilities.name;
      // skill1.textContent = data.data.abilities.text;

      console.log();

      footNoteTitle.textContent = data.data.set.name;
      footNoteTitle.href = "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/?swsh2=";
      footNote.textContent = data.data.rarity;
      footLogo.src = data.data.set.images.symbol;
      })};

changer.addEventListener("click", replaceData);

