import React, { useState } from "react";
import "./App.css";
import InfoWeather from "./components/InfoWeather/InfoWeather";
import axios from "axios";
import InfoWeather5Days from "./components/InfoWeather5Days/InfoWeather5Days";

function App() {
  const [forecastNow, setForecastNow] = useState(null);
  const [forecast5Days, setForecast5Days] = useState(null);
  const city = React.useRef();
  const key = "2e67d73f82b6ee1166d64df4cd5eaa8a";

  async function serachForecast() {
    const resultNow = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.current.value}&appid=${key}&lang=pt_br&units=metric`
    );
    const result5Days = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city.current.value}&appid=${key}&lang=pt_br&units=metric`)
    setForecastNow(resultNow.data);
    setForecast5Days(result5Days.data);
  }

  return (
    <div>
      <div className="container">
        <h1>Previsão do tempo</h1>
        <input
          ref={city}
          type="text"
          placeholder="Digite o nome da cidade ou/país"
        />
        <button onClick={serachForecast}>Buscar</button>
      </div>

      <div>
        {forecastNow && <InfoWeather forecastNow={forecastNow} />}
        {forecast5Days && <InfoWeather5Days forecast5Days={forecast5Days} />}
        </div>
    </div>
  );
}

export default App;
