import React from "react";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState([]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    onSearch(city);
  };

  return (
    <div className="search-box">
      <input
        onChange={handleChange}
        type="text"
        placeholder="
        Search city..."
      />
      <button className="search-btn" onClick={handleSubmit}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
