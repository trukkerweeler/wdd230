// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const myForecast = document.querySelector('.forecast');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.01&lon=-111.69&cnt=24&appid=90e936e4f1aa8eb0f43fba3229bb46ea&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  const displayResults = (data) => {
    let eights = [0,8,16];
    let forecastul = document.createElement('ul');
    // currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    const forecasts = data.list;
    let iteration = 0
    forecasts.forEach(forecast => {
      if (eights.includes(iteration)) {        
      let forecastDescription = document.createElement('li');
      
      let desc = forecast.weather[0].description;
      forecastDescription.textContent = desc;
      
      let weatherIcon = document.createElement('img');
      const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      weatherIcon.setAttribute('src', iconsrc);
      weatherIcon.setAttribute('alt', desc);
      console.log(desc);
      forecastul.appendChild(forecastDescription)
      }
      iteration++;
    });
    myForecast.appendChild(forecastul);
    };

    // captionDesc.textContent = `${desc}`;