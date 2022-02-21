import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{day()}</h5>
        <p className="card-text-icon">
          <WeatherIcon code={props.data.weather[0].icon} size={60} />
        </p>
        <p className="card-text-">
          <span className="maxTemp">{maxTemp()} </span>
          <span className="minTemp">{minTemp()}</span>
        </p>
      </div>
    </div>
  );
}
