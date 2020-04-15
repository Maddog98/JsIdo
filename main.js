const api = {
  key: "a0fa377f6275791c424358916f1fd569",
  base: "https://api.openweathermap.org/data/2.5/",
};
var city = document.querySelector(".city");
var temp = document.querySelector(".temp");
var hi_low = document.querySelector(".hi_low");
var weather = document.querySelector(".weather");
/*var image = document.querySelector('.image'); */

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    console.log(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then((data) => {
      var cityV = data["name"];
      city.innerHTML = cityV;
      var tempV = data["main"]["temp"];
      temp.innerHTML = tempV + "&deg;C";
      var tempMinV = data["main"]["temp_min"];
      var tempMaxV = data["main"]["temp_max"];
      hi_low.innerHTML = tempMaxV + "&deg;C" + " / " + tempMinV + "&deg;C";
      var weather0MainV = data["weather"]["0"]["main"];
      var weather0DescriptionV = data["weather"]["0"]["description"];
      var weather0IconV = data["weather"]["0"]["icon"];
      /* weather.innerHTML= weather0MainV + ',' + weather0DescriptionV ;
        image.innerHTML= weather0IconV + ".png";*/
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
}
