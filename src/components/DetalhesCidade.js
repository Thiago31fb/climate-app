import React, { useEffect } from "react";
import "./DetalhesCidade.css";

const DetalhesCidade = ({ cidade }) => {
  const apiUnsplash = "https://source.unsplash.com/1600x900/?";
  const imageUrl = `${apiUnsplash}${cidade.name}`;

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      document.body.style.backgroundImage = `url("${imageUrl}")`;
    };
  }, [imageUrl]);

  return (
    <div id="weather-data">
      <h2>
        <i className="fa-solid fa-location-dot"></i>{" "}
        <span id="city">{cidade.name}</span>
        <img
          id="country"
          alt="Flag"
          src={`https://flagsapi.com/${cidade.sys.country}/shiny/64.png`}
        ></img>
      </h2>
      <p id="temperature">
        <span>{parseInt(cidade.main.temp)}</span>&deg;C
      </p>
      <div id="description-container">
        <p id="description">{cidade.weather[0].description}</p>
        <img
          id="weather-icon"
          src={`http://openweathermap.org/img/wn/${cidade.weather[0].icon}.png`}
          alt="Condições atuais"
        />
      </div>
      <div id="details-container">
        <p id="umidity">
          <i className="fa-solid fa-droplet"></i>
          <span>{cidade.main.humidity}%</span>
        </p>
        <p id="wind">
          <i className="fa-solid fa-wind"></i>
          <span>{cidade.wind.speed}km/h</span>
        </p>
      </div>
    </div>
  );
};

export default DetalhesCidade;
