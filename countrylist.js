function getCountryNames() {
  return [
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    // ... more countries
  ];
}

export const countries = getCountryNames();

const selectElement = document.getElementById('country');

countries.forEach(country => {
  const option = document.createElement('option');
  option.value = country.code;
  option.textContent = country.name;
  selectElement.appendChild(option);
});
