/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./InfoWeather5Days.css";

const InfoWeather5Days = ({ forecast5Days }) => {
  let dailyForecast = {};

  for (let forecasts of forecast5Days.list) {
    const date = new Date(forecasts.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecasts;
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

  function converteDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });

    return newDate;
  }

  return (
    <div className="content-5days">
      <div className="forescast-5days">
        <h3>Previsão Próximo 5 dias</h3>
        <div className="forecast-list">
          {nextFiveDays.map((forecast) => (
            <div className="forecast-item" key={forecast.dt}>
              <p>{converteDate(forecast)}</p>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              />
              <p>{forecast.weather[0].description}</p>
              <p>
                {Math.round(forecast.main.temp_min)}ºC min /{" "}
                {Math.round(forecast.main.temp_max)}ºC máx
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoWeather5Days;
