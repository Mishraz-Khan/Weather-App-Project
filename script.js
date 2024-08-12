const apiKey = "3e8a5bac7c484da935cffd82c77cc4fb";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.getElementById("search-bar");
const searchBox = document.getElementById("input-field");

const tempCity = document.getElementById("heading_section");
const humidity_text = document.getElementById("footer-text1");
const wind_text = document.getElementById("footer-text2");

const weatherLogo = document.getElementById("weather-logo");
const humidity_logo = document.getElementById("humidity-logo");
const wind_logo = document.getElementById("wind-logo");

const err_msg = document.getElementById("err-msg");

const main = document.getElementById("main");
const foot = document.getElementById("footer");

const weather = async (city) => {
  try {
    let response = await fetch(apiURL + city + `&appid=${apiKey}`);

    let data = await response.json();
    console.log(data);

    switch (data.weather[0].main) {
      case "Clouds":
        weatherLogo.src = "weather-app-img/images/clouds.png";
        break;
      case "Smoke":
        weatherLogo.src = "weather-app-img/images/mist.png";
        break;
      case "Clear":
        weatherLogo.src = "weather-app-img/images/clear.png";
        break;
      case "Drizzle":
        weatherLogo.src = "weather-app-img/images/drizzle.png";
        break;
      case "Snow":
        weatherLogo.src = "weather-app-img/images/snow.png";
        break;
      case "Mist":
        weatherLogo.src = "weather-app-img/images/mist.png";
        break;
      case "Rain":
        weatherLogo.src = "weather-app-img/images/rain.png";
        break;
      default:
        weatherLogo.src = "";
        break;
    }

    tempCity.innerHTML = `<h1>${Math.round(data.main.temp)}<sup>o</sup>c</h1>
        <h2>${data.name}</h2>`;

    wind_text.innerHTML = `<span class="text1">${data.wind.speed} km/h</span>
            <span class="text2">Wind Speed</span>`;

    humidity_text.innerHTML = `<span class="text1">${data.main.humidity}%</span>
            <span class="text2">Humidity</span>`;

    err_msg.style.display = "none";
    humidity_logo.style.display = "block";
    wind_logo.style.display = "block";
    tempCity.style.display = "flex";
    main.style.display = "flex";
    foot.style.display = "flex";
  } catch (error) {
    err_msg.style.display = "block";
    humidity_logo.style.display = "none";
    wind_logo.style.display = "none";
    tempCity.style.display = "none";
    main.style.display = "none";
    foot.style.display = "none";
  }
};

searchBtn.addEventListener("click", () => {
  weather(searchBox.value.trim())
});
