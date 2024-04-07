const apiKey = "98fb0cf3f5a77e07b373da5d252e0e36";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather > :first-child");
const card = document.querySelector(".card");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

   //getting data from api and updating 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.className = "fas fa-cloud";
      card.style.backgroundImage =
        "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.className = "fas fa-sun";
      card.style.backgroundImage =
        "linear-gradient(to right, #fa709a 0%, #fee140 100%)";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.className = "fas fa-cloud-showers-heavy";
      card.style.backgroundImage =
        " linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.className = "fas fa-smog";
      card.style.backgroundImage =
        " linear-gradient(to top, #09203f 0%, #537895 100%)";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.className = "fas fa-cloud-rain";
      card.style.backgroundImage =
        "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

//adding fucntionalities to click and enter button
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent the default form submission behavior
        checkWeather(searchBox.value);
    }
});

checkWeather();
