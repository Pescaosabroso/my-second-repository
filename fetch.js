const changer = document.getElementById("apiButton2");
const img = document.getElementById("card")

    function replaceImage() {
    fetch('https://api.pokemontcg.io/v2/cards/swsh2-192')
      .then(response => response.json())
      .then(data => {
      img.src = data.data.images.small;
      })};
changer.addEventListener("click", replaceImage);

const changer2 = document.getElementById("apiButton");      
changer2.addEventListener("click", replaceImage);