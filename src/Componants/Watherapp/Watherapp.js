import React, { useState } from 'react';
import './Watherapp.css';
import search_icon from '../Assats/search.png';
import clear_icon from '../Assats/clear.png';
import cloud_icom from '../Assats/cloud.png';
import drizzle_icon from '../Assats/drizzle.png';
import humidity_icon from '../Assats/humidity.png';
import rain_icon from '../Assats/rain.png';
import snow_icon from '../Assats/snow.png';
import wind_icon from '../Assats/wind.png';

export default function Watherapp() {
  let api_key = '79c940d0ff8e4a294f8196bdeb7b9cf3';

  const [wicon, setWicon] = useState(cloud_icom);

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');

    if (element[0].value === '') {
      return 0;
    }
    let url =
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
      element[0].value +
      '&lon=10.98&units=Metric&appid=' +
      api_key;

    let response = await fetch(url);

    let data = await response.json();

    const humidity = document.getElementsByClassName('humidity-percent');
    const wind = document.getElementsByClassName('wind-rate');
    const temprature = document.getElementsByClassName('weather-temp');
    const location = document.getElementsByClassName('weather-location');

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = Math.floor(data.wind.speed);
    temprature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === '02d' ||
      data.weather[0].icon === '02n'
    ) {
      setWicon(cloud_icom);
    } else if (
      data.weather[0].icon === '03d' ||
      data.weather[0].icon === '03n'
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === '04d' ||
      data.weather[0].icon === '04n'
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === '09d' ||
      data.weather[0].icon === '09n'
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === '10d' ||
      data.weather[0].icon === '10n'
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === '13d' ||
      data.weather[0].icon === '13n'
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };

  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="search" />
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <img src={search_icon} />
          </div>
        </div>
        <div className="weather-image">
          <img src={cloud_icom} className="mainInage"></img>
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">Londan</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} className="icon"></img>
            <div className="data">
              <div className="humidity-percent">65%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} className="icon"></img>
            <div className="data">
              <div className="wind-rate">18 kh/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
