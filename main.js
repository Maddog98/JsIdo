
const api={
  key: "a0fa377f6275791c424358916f1fd569",
<<<<<<< HEAD
  base:"https://api.openweathermap.org/data/2.5/"
=======
  base:"https://api.openweathermap.org/data/2.5"
>>>>>>> fc74cf6c7114a441a81b1809adb379ffbc40b1d8
}

const searchbox =document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
      console.log(searchbox.value);
    }
  }

  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }

  function displayResults(weather){
    console.log(weather);
  }

