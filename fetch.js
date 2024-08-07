const changer = document.getElementById("apiButton");
const card = document.getElementById("card");
const pokeName = document.getElementById("namex");
const pokemonType = document.getElementById("tier");
const pokemonType2 = document.getElementById("subtier");
const hitPointsTitle = document.getElementById("ps");
const hitPoints = document.getElementById("ps_num");
const pokemonEnergy = document.getElementById("info");
const buttonA = document.getElementById("button-a");
const buttonC = document.getElementById("button-c");
const abilityHeader1 = document.getElementById("ability-a");
const skillName1 = document.getElementById("skillname-1");
const damage1 = document.getElementById("damage1");
const skill1 = document.getElementById("skilldesc1");
const abilityHeader2 = document.getElementById("ability-b");
const skillName2 = document.getElementById("skillname-2");
const damage2 = document.getElementById("damage2");
const skill2 = document.getElementById("skilldesc2");
const rules = document.getElementById("rules");
const rules2 = document.getElementById("rules2");
const atImg = document.getElementById("at-img");
const skillName3 = document.getElementById("skillname-3");
const damage3 = document.getElementById("damage3");
const skill3 = document.getElementById("skilldesc3");
const atImg2 = document.getElementById("at-img2");
const skillName4 = document.getElementById("skillname-4");
const damage4 = document.getElementById("damage4");
const skill4 = document.getElementById("skilldesc4");
const stats = document.getElementById("stats");
const weaknessEnergy = document.getElementById("weakness");
const weaknessNum = document.getElementById("weakness-num");
const resistanceEnergy = document.getElementById("resistance");
const resistanceNum = document.getElementById("resistance-num");
const retreatEnergy = document.getElementById("retreat");
const footNoteTitle = document.getElementById("stats-link");
const footNote = document.getElementById("fn-text");
const footLogo = document.getElementById("promo");

window.onload = async () => {
fetch('https://api.pokemontcg.io/v2/cards/sm3-71/')
  .then(response => response.json())
  .then(data => {
    try {
      if (!data || Object.keys(data).length === 0) {
        return defaultData; // Replace with your default data
      }  
      card.src = data.data.images.small;
      pokeName.textContent = data.data.name;
      pokemonType.textContent = data.data.supertype;
      pokemonType2.textContent = data.data.subtypes;
      hitPoints.textContent = data.data.hp;
      const showHp = hitPoints.textContent;
      if (showHp) {
        hitPointsTitle.style.display = 'block';
      } else {
        hitPointsTitle.style.display = 'none';
      }
      const energyType = data.data.types;
      energyType.forEach(item => {
        const pokeType = document.createElement('img')
        pokeType.src = `public/img/${item}.webp`
        pokeType.alt = "Pokemon-Type"
        pokeType.classList.add('energy-type')
        pokemonEnergy.appendChild(pokeType)
      });
      buttonA.textContent = `Find ${data.data.name} in The Apocrydex`;
      buttonA.href = data.data.cardmarket.url;
      buttonC.textContent = `Find ${data.data.name} in The Apocrydex`;
      buttonC.href = data.data.cardmarket.url;
      abilityHeader1.textContent = data.data.abilities[0].type;
      skillName1.textContent = data.data.abilities[0].name;
      damage1.textContent = data.data.abilities[0].damage;
      skill1.textContent = data.data.abilities[0].text;
      // abilityHeader2.textContent = data.data.abilities[1].type;
      // skillName2.textContent = data.data.abilities[1].name;
      // damage2.textContent = data.data.abilities[1].damage;
      // skill2.textContent = data.data.abilities[1].text;
      // rules.textContent = data.data.rules[0];
      // rules2.textContent = data.data.rules[1];
      const energyTypeAt1 = data.data.attacks[0].cost;
      energyTypeAt1.forEach(item => {
        const at1 = document.createElement('img')
        at1.src = `public/img/${item}.webp`
        at1.alt = "attack-energy"
        at1.classList.add('energy-type')
        atImg.appendChild(at1)
      });
      skillName3.textContent = data.data.attacks[0].name;
      damage3.textContent = data.data.attacks[0].damage;
      skill3.textContent = data.data.attacks[0].text;
      // const energyTypeAt2 = data.data.attacks[1].cost;
      // energyTypeAt2.forEach(item => {
      //   const at2 = document.createElement('img')
      //   at2.src = `public/img/${item}.webp`
      //   at2.alt = "attack-energy"
      //   at2.classList.add('energy-type')
      //   atImg2.appendChild(at2)
      // });
      // skillName4.textContent = data.data.attacks[1].name;
      // damage4.textContent = data.data.attacks[1].damage;
      // skill4.textContent = data.data.attacks[1].text;
      if (showHp) {
        stats.style.display = 'flex';
      } else {
        stats.style.display = 'none';
      }
      weaknessNum.textContent = data.data.weaknesses[0].value;
      const energyTypeW = data.data.weaknesses;
      energyTypeW.forEach(item => {
        const weaK = document.createElement('img')
        weaK.src = `public/img/${item.type}.webp`
        weaK.alt = "attack-energy"
        weaK.classList.add('energy-type')
        weaknessEnergy.appendChild(weaK)
      });
      // resistanceNum.textContent = data.data.resistances[0].value;
      // const energyTypeResistance = data.data.resistances;
      // energyTypeResistance.forEach(item => {
      //   const r = document.createElement('img')
      //   r.src = `public/img/${item.type}.webp`
      //   r.alt = "weakness-energy"
      //   r.classList.add('energy-type')
      //   resistanceEnergy.appendChild(r)
      // });
      const energyTypeRetreat = data.data.retreatCost;
      energyTypeRetreat.forEach(item => {
        const rT = document.createElement('img')
        rT.src = `public/img/${item}.webp`
        rT.alt = "retreat-cost"
        rT.classList.add('energy-type')
        retreatEnergy.appendChild(rT)
      });
      footNoteTitle.textContent = data.data.set.name;
      footNoteTitle.href = "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/?swsh2=";
      footNote.textContent = data.data.rarity;
      footLogo.src = data.data.set.images.symbol;
      }
    catch (error) {
      console.error('API Error:', error.message);
    return defaultData;
    }
    })};

// changer.addEventListener("click", replaceData);