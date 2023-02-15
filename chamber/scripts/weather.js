// select HTML elements in the document
// const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weather = document.querySelector('#weather-inner');

// const url = 'https://api.openweathermap.org/data/2.5/weather?zip=84651&appid=90e936e4f1aa8eb0f43fba3229bb46ea&units=imperial';
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.01&lon=-111.69&cnt=24&appid=90e936e4f1aa8eb0f43fba3229bb46ea&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // testing only
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
    let forecastlist = document.createElement('ul');
    const forecasts = data.list;
    let iteration = 0;
    forecasts.forEach(forecast => {
      if (eights.includes(iteration)) {
        let description = document.createElement('li');
        let myDay = '';
        switch(iteration) {
          case 0:
            myDay = "Today";
            break;
            case 8:
            myDay = "Tomorrow";
            break;
            case 16:
            myDay = "Day 3";
            break;
        }
        
        let desc = `${myDay}: ${forecast.weather[0].description}`;
        description.textContent = desc;
        // console.log(desc);

        let wIcon = document.createElement('img');
        const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        wIcon.setAttribute('src',iconsrc);
        wIcon.setAttribute('alt', desc);
        description.textContent = desc;
        description.appendChild(wIcon);

        weather.appendChild(description);      


      }
      iteration++;
    });
    // let desc = data.weather[0].description;
    // weatherIcon.setAttribute('src', iconsrc);
    // weatherIcon.setAttribute('alt', desc);
    // let result = data.main.temp.toFixed(1);
    // currentTemp.innerHTML = `${result}&deg;F ${desc}`;
  }