import React from "react";
import Card from "./Card";

export default function Cards({ cities, handleDelete }) {
  return (
    <div className="cards_container">
      {cities.length ? (
        cities.map((city) => {
          return (
            <Card
              key={city.name}
              max={city.main.temp_max}
              min={city.main.temp_min}
              temp={city.main.temp}
              humidity={city.main.humidity}
              wind={city.wind.speed}
              weather={city.weather[0].main}
              name={city.name}
              id={city.id}
              img={city.weather[0].icon}
              cities={cities}
              handleDelete={handleDelete}
            />
          );
        })
      ) : (
        <p className="empty">Enter the name of a city...</p>
      )}
      <div class="shape-blob"></div>
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
    </div>
  );
}
