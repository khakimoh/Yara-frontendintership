fetchCountry = (country) => {
  fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
    .then((response) => response.json())
    .then((data) => setCountry(data));
};

fetchCountry("iran");

setCountry = (data) => {
  setItem(data);
};

changeCountry = () => {
  let x = document.getElementById("search-box").value;
  fetchCountry(x);
};

setItem = (data) => {
  if (data.country) {
    document.getElementById("tittle").innerHTML = "Covi-19 cases in " + data.country;
    document.getElementById("flag").src = data.countryInfo.flag;
    document.getElementById("active").innerHTML = data.active;
    document.getElementById("critical").innerHTML = data.critical;
    document.getElementById("recovered").innerHTML = data.recovered;
    document.getElementById("cases").innerHTML = data.cases;
    document.getElementById("deaths").innerHTML = data.deaths;
  } else {
    document.getElementById("tittle").innerHTML = "Not Found";
  }
};
