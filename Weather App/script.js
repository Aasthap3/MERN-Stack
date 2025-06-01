const API_key = "e4d9d35192987da5c39cf74bed3e12c7";

async function getWeather() {
  const city_name = document.getElementById("city").value.trim();
  try {
    const { lat, lon } = await getLonLat(city_name);
    if (!lat || !lon) {
      alert("Enter valid city name", city);
      document.getElementById("city").value = "";
      return;
    }
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

    const response = await fetch(URL);
    const data = await response.json();

    document.getElementById("weather-container").style.display = "block";
    document.getElementById("cityName").innerText = city_name[0].toUpperCase() + city_name.slice(1);
    document.getElementById("main").innerText = data.weather[0].main;
    document.getElementById(
      "icon"
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("temp").innerText =
      (data.main.temp - 273.15).toFixed(1) + "°C";
    document.getElementById("tempFeelsLike").innerText =
      (data.main.temp - 273.15).toFixed(1) + "°C";
    document.getElementById("description").innerText =
      data.weather[0].description;
    document.getElementById("windSpeed").innerText = data.wind.speed + "m/s";
    document.getElementById("humidity").innerText = data.main.humidity + "%";
  } catch (error) {
    console.log("an error occured",error);
  }
}

async function getLonLat(city_name) {
  try {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=1&appid=${API_key}`;

    const response = await fetch(URL);
    const data = await response.json();

    const lat = data[0].lat;
    const lon = data[0].lon;
    return {lat,lon};
  } catch (error) {
    console.log(error);
    return {};
  }
}
