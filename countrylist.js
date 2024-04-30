function getCountryNames() {
  return [
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    // ... more countries
  ];
}

const countries = getCountryNames();

const selectElement = document.getElementById('country');

function displayCountries() {
const countries = getCountryNames();
countries.forEach(country => {
  const op = document.createElement('option');
  op.value = country.code;
  op.textContent = country.name;
  selectElement.appendChild(op);
});
}

selectElement.addEventListener("click", displayCountries;