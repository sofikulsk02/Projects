const city = document.getElementById("search input value");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apikey = "";
async function checkWeather(city) {
  const response = await fetch(apiUrl + `&appid=${apikey}`);
  var data = await response.json();
}

checkWeather();
