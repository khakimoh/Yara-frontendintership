var Active = 0;

fetchCity = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97fcdfb0d5da440e4e206813fe96d907`
  )
    .then((response) => response.json())
    .then((data) => setCity(data));
};

changeCity = () => {
  if (Active == 0) {
    Active++;
    visibleItem();
  }
  let x = document.getElementById("cityList").value;
  if(x=="empty"){
    hiddenItem();
  }else{
    fetchCity(x);
  }
};

setCity = (data) => {
  setItem(data);
};

setItem = (data) => {
  document.getElementById("city").innerHTML = data.name;
  document.getElementById("status").innerHTML = data.weather[0].description;
  document.getElementById("temperature").innerHTML =
    kelvinToCelsius(data.main.temp) + " \u00B0 C";
  document.getElementById("img-status").src = iconStatus(data.weather[0].main);
};

iconStatus = (item) => {
  switch (item) {
    case "Clouds":
      return "./asset/images/clouds.png";
      break;
    case "Clear":
      return "./asset/images/sun.png";
      break;
    case "Rain":
      return "./asset/images/rain.svg";
      break;
    case "Snow":
      return "./asset/images/snow.svg";
      break;
    default:
      console.log("Alert! not found description weather");
      return "./asset/images/cloudy.svg";
  }
};

kelvinToCelsius = (temp) => {
  return parseInt(temp - 273.15);
};

hiddenItem = () => {
  document.getElementById("city").style.visibility = "hidden";
  document.getElementById("status").style.visibility = "hidden";
  document.getElementById("temperature").style.visibility = "hidden";
  document.getElementById("img-status").style.visibility = "hidden";
  document.getElementById("map-icon").style.visibility = "hidden";
  Active=0;
};
hiddenItem();

visibleItem = () => {
  document.getElementById("city").style.visibility = "visible";
  document.getElementById("status").style.visibility = "visible";
  document.getElementById("temperature").style.visibility = "visible";
  document.getElementById("img-status").style.visibility = "visible";
  document.getElementById("map-icon").style.visibility = "visible";
};
