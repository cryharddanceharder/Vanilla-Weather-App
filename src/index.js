function showCity(event) {
  event.preventDefault();
  let apiKey = "25181b26ceb1bd83a6773b0a70ee242f";
  let search = document.querySelector("#type-location");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemp);
}

function currentTemp(response) {
  console.log(response.data);
  let showCurrentTemp = document.querySelector(".current-temperature");
  showCurrentTemp.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  let location = document.querySelector(".location");
  location.innerHTML = `${response.data.name}`;
  let currentTempMin = document.querySelector(".current-min");
  currentTempMin.innerHTML = `${Math.round(response.data.main.temp_min)}°C`;
  let currentTempMax = document.querySelector(".current-max");
  currentTempMax.innerHTML = `${Math.round(response.data.main.temp_max)}°C`;
  let currentIcon = document.querySelector("#current-icon");
  currentIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let weatherDescription = document.querySelector(".weather-description");
  weatherDescription.innerHTML = `${response.data.weather[0].description}`;
  let windSpeed = document.querySelector(".wind-speed");
  windSpeed.innerHTML = `wind: ${Math.round(response.data.wind.speed)}m/s`;
}

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "25181b26ceb1bd83a6773b0a70ee242f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemp);
}

function buttonClick(button) {
  navigator.geolocation.getCurrentPosition(getPosition);
}

let buttonPress = document.querySelector("button");
buttonPress.addEventListener("click", buttonClick);

let form = document.querySelector("form");
form.addEventListener("submit", showCity);

let now = new Date();

let months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

let date = now.getDate();
let month = months[now.getMonth()];
let year = now.getFullYear();

let hours = now.getHours();
let minutes = now.getMinutes();

let timeAndDate = document.querySelector(".date-time");
timeAndDate.innerHTML = `${date}.${month}.${year} | ${hours}:${minutes}`;
