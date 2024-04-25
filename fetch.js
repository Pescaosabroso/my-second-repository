const changer = document.getElementById("apiButton");
const img = document.getElementById("card")
const pokeName = document.getElementById("namex");
const pokemonType = document.getElementById("tier");
const pokemonType2 = document.getElementById("subtier");
const hitPointsTitle = document.getElementById("ps");
const hitPoints = document.getElementById("ps_num");
const pokemonEnergy = document.getElementById("info");

const abilityEnergy = document.getElementById("ability-energy");
const abilityType = document.getElementById("ability");
const skillName1 = document.getElementById("skillname-1");
const damage1 = document.getElementById("damage1");
const skill1 = document.getElementById("skilldesc1");

const attack = document.getElementById("attack");

const attackIcon1 = document.getElementById("at-img1");
const attackIcon2 = document.getElementById("at-img2");

const skillName2 = document.getElementById("skillname-2");
const damage2 = document.getElementById("damage2");


const skillsIcon1 = document.getElementById("skills");


const stats = document.getElementById("stats");

const weaknessEnergy = document.getElementById("weakness");


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
      abilityType.textContent = data.data.abilities[0].type;
      // damage1.textContent = data.data.attacks[0].damage;


      
      if (data.addImage) {
            const imageURL = data.imageURL; // Get image URL from API data
            const imageElement = document.createElement('img');
            imageElement.src = imageURL;
            imageContainer.appendChild(imageElement); // Add image to container
          } else if (data.removeImage) {
            const imageID = data.imageID; // Get image ID from API data
            const imageElement = document.getElementById(imageID);
            imageElement.parentNode.removeChild(imageElement); // Remove image from DOM
          }

      

      skillName1.textContent = data.data.abilities[0].name;
      skill1.textContent = data.data.abilities[0].text;





      attack.textContent = data.data.attacks[0].type;

      attackIcon1.src = "https://th.bing.com/th/id/OIP.QygT1tC9ps5pLZvmLBmwswAAAA?rs=1&pid=ImgDetMain";
      attackIcon2.src = "https://th.bing.com/th/id/OIP.QygT1tC9ps5pLZvmLBmwswAAAA?rs=1&pid=ImgDetMain";
      skillName2.textContent = data.data.attacks[0].name;
      damage2.textContent = data.data.attacks[0].damage;

      

      console.log();

      weaknessEnergy.src = "https://th.bing.com/th/id/OIP.JESymcB5PFP0YVhdXrtdDQHaG4?rs=1&pid=ImgDetMain";

      footNoteTitle.textContent = data.data.set.name;
      footNoteTitle.href = "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/?swsh2=";
      footNote.textContent = data.data.rarity;
      footLogo.src = data.data.set.images.symbol;
      })};

changer.addEventListener("click", replaceData);
// changer.addEventListener("click", fetchImages);

