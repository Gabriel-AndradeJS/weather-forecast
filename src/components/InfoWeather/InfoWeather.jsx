/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./InfoWeather.css";

const InfoWeather = ({ forecastNow }) => {

  return (
    <div className="content">
      <div className="forecastNow-info">
        <h2 className="city">{forecastNow.name}</h2>
        <div className="weather-info">
          <img
            src={`http://openweathermap.org/img/wn/${forecastNow.weather[0].icon}.png`}
          />
          <p>{Math.round(forecastNow.main.temp)} ºC</p>
        </div>
        <p className="description">{forecastNow.weather[0].description}</p>
        <div className="other-info">
          <p>Sensação térmica: {Math.round(forecastNow.main.feels_like)} ºC</p>
          <p>Umidade: {Math.round(forecastNow.main.humidity)} ºC</p>
          <p>Pressão: {Math.round(forecastNow.main.pressure)} ºC</p>
        </div>
      </div>
    </div>
  );
};

export default InfoWeather;
