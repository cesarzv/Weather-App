import React from "react";

export default function Card({
  max,
  min,
  name,
  img,
  cities,
  id,
  handleDelete,
  temp,
  humidity,
  wind,
  weather,
}) {
  console.log(cities);

  return (
    <div className="card_container">
      <div className="card_title">
        <i
          className="fa-solid fa-location-dot"
          style={{ fontSize: "25px" }}
        ></i>
        <span>{name}</span>
      </div>
      <div className="cardInfo">
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        <span>{temp} °C</span>
        <p>{weather}</p>
      </div>
      <div className="cardInfo2">
        <div className="humidity">
          <i className="fa-solid fa-water" style={{ fontSize: "20px" }}></i>
          <span>
            {humidity} % <br /> Humidity
          </span>
        </div>
        <div className="wind">
          <i className="fa-solid fa-wind" style={{ fontSize: "20px" }}></i>
          <span>
            {wind} Km/h <br /> Wind Speed
          </span>
        </div>
      </div>
      <button onClick={() => handleDelete(id)}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}
