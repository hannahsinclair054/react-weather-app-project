import React from "react";
import "./weather.css";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <section className="main">
        <section className="cityTemp">
          <h1 className="Location mb-2 mt-0">{props.data.city}</h1>
          <WeatherIcon code={props.data.icon} />

          <p className="tempToday">
            <span className="todayTemp">
              {" "}
              <WeatherTemp cels={props.data.temp} />
            </span>
            <p className="tempUnitC">°C</p>
          </p>
        </section>

        <section className="info">
          <h3 className="date">
            <FormatDate date={props.data.date} />
          </h3>

          <p className="tempDescribe description text-capitalize ">
            {props.data.description}
          </p>
        </section>

        <section className="right">
          <p>
            <span className="wind">
              {" "}
              Wind: <span className="wind">{Math.round(props.data.wind)}</span>
              <span className="windUnits">Km/h</span>
            </span>
            <br />
            <span className="humid">
              Humidity: <span className="humid">{props.data.humidity}</span>%
            </span>
            <br />
          </p>
        </section>
      </section>
    </div>
  );
}
