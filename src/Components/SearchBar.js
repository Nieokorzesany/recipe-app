import React from "react";
import "./SearchBar.scss";

const SearchBar = props => {
  return (
    <div className="SearchBar">
      <input
        type="text"
        onChange={event => props.onChange(event.target.value)}
      />
      <button onClick={() => props.onSearchClick()}>Search</button>
    </div>
  );
};

export default SearchBar;
