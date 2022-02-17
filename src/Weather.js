import React, { useState } from "react";
import "./App.css";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "ee5487a7be65de8d31de587d4d02ac57";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="me-2 searchBar"
        type="text"
        placeholder="Enter a city"
        id="search-input"
        autoFocus="on"
        onChange={handleCityChange}
      />
      <input type="submit" value="Search" className="searchButton" />
    </form>
  );
  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <h1>Weather App</h1>
        {form}
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Weather App</h1>
        {form}
        <section className="main">
          <h1>Hi👋👋</h1>
        </section>
      </div>
    );
  }
}
