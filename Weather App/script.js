const API_key = "e4d9d35192987da5c39cf74bed3e12c7";

async function getLonLat() {
  try {
    const city_name = document.getElementById("#city");

    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=1&appid=${API_key}`;

    const response = await fetch(URL);
    const data = await response.json();

    const lat = data[0].lat;
    const lon = data[0].lon;

    if (!lat || !lon) {
      alert("Enter valid city name", city);
      document.getElementById("city").value = "";
      return;
    }else{
        await getWeather(city_name,lon, lat);
    }
  } catch (error) {
    console.log(error);
    return {};
  }
}

async function getWeather(lon, lat) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

    const response = await fetch(URL);
    const data = await response.json();

    document.getElementById("cityname").innerText = city_name;
    document.getElementById("main").innerText = data[0].main;
    document.getElementById("icon").innerText = data[0].icon;

}