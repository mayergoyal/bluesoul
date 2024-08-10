import React from "react";
import { useState } from "react";
function Searchbar({ onSearch }) {
  const [searchTerm, setsearchTerm] = useState("");
  const handleInputChange = (event) => {
    setsearchTerm(event.target.value);
  };
  const handleformSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <div>
      <form onsubmit={handleformSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search...."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Searchbar;
