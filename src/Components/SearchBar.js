import React from "react";
import "./SearchBar.scss";
import { connect } from "react-redux";
import { GET_SEARCH_TERM, FETCH_RECIPES } from "../Redux/Actions";
import { keyPass1 } from "./config";

const SearchBar = props => {
  console.log("props", props);
  return (
    <div className="SearchBar">
      <img
        src="https://miro.medium.com/max/918/1*MeKTEhJAC7Yz10qMCQhPOQ.png"
        alt="logo"
      />
      <div className="search-controls">
        <input
          className="search-input"
          type="text"
          onChange={event => props.getSearchTerm(event.target.value)}
          placeholder="Search for something tasty"
          onKeyPress={event => {
            if (event.key === "Enter") {
              props.searchButtonHandler(props.searchTerm);
            }
          }}
        />
        <button
          onClick={() => props.searchButtonHandler(props.searchTerm)}
          className="search-button"
        >
          Search
        </button>
      </div>

      <div className="fav-list">fav-list</div>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => {
  return {
    getSearchTerm: term => dispatch({ type: GET_SEARCH_TERM, payload: term }),
    searchButtonHandler: term =>
      fetch(`https://www.food2fork.com/api/search?key=${keyPass1}&q=${term}`)
        .then(response => response.json())
        .then(data => dispatch({ type: FETCH_RECIPES, payload: data.recipes }))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
