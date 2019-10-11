import React from "react";
import "./SearchBar.scss";
import { connect } from "react-redux";
import { GET_SEARCH_TERM, FETCH_RECIPES } from "../Redux/Actions";
import { keyPass1 } from "./config";

const SearchBar = ({ searchTerm, getSearchTerm, searchButtonHandler }) => {
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
          onChange={event => getSearchTerm(event.target.value)}
          placeholder="Search for something tasty"
          onKeyPress={event => {
            if (event.key === "Enter") {
              searchButtonHandler(searchTerm);
            }
          }}
        />
        <button
          onClick={() => searchButtonHandler(searchTerm)}
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
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => {
  const url = `https://www.food2fork.com/api/search?key=${keyPass1}&q=`;
  return {
    getSearchTerm: term => dispatch({ type: GET_SEARCH_TERM, payload: term }),
    searchButtonHandler: term =>
      fetch(`${url}${term}`)
        .then(response => response.json())
        .then(data => dispatch({ type: FETCH_RECIPES, payload: data.recipes }))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
