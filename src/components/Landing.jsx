import React from "react";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing_container">
      <h1>Welcome to the Weather App</h1>
      <NavLink to="/home">
        <button>Visit now</button>
      </NavLink>
    </div>
  );
}
