import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export const NavBar = ({ onSearch }) => {
  return (
    <div className="navbar_container">
      <NavLink to="/">
        <div className="backHome">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
      </NavLink>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};
