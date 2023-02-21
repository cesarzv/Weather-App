import React from "react";
import SearchBar from "./SearchBar";

export const NavBar = ({ onSearch }) => {
  return (
    <div className="navbar_container">
      <SearchBar onSearch={onSearch} />
    </div>
  );
};
