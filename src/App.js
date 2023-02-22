import React from "react";
import "./App.scss";
import Cards from "./components/Cards.jsx";
import { NavBar } from "./components/NavBar";
import Landing from "./components/Landing";
import { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

function App() {
  const [cities, setCities] = useState([]);

  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  const onSearch = (ciudad) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setCities((oldCities) => [...oldCities, response.data]);
      });
  };

  // const handleDelete = (id) => {
  //   setCities(cities.filter((city) => city.id !== id));
  // };

  const handleDelete = (id) => {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  };

  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/home">
        <NavBar onSearch={onSearch} />
        <div className="citiesCont">
          <Cards cities={cities} handleDelete={handleDelete} />
        </div>
      </Route>
    </div>
  );
}

export default App;
