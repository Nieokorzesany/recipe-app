import React from "react";
import "./SearchBar.scss";
import { connect } from "react-redux";
import { getSearchTerm, searchButtonHandler } from "../Redux/actions";
import FavoriteList from "./FavoriteList";

const SearchBar = ({
  searchTerm,
  getSearchTerm,
  searchButtonHandler,
  favListShow,
  favoriteIDs
}) => {
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

      <div className="fav-list" onClick={() => favListShow()}>
        <span className="likes-count">{favoriteIDs.length}</span>
      </div>
      <FavoriteList />
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  favoriteIDs: state.favoriteIDs
});

const mapDispatchToProps = dispatch => {
  return {
    getSearchTerm: term => dispatch(getSearchTerm(term)),
    searchButtonHandler: term => searchButtonHandler(term, dispatch),
    favListShow: () => dispatch({ type: "TOGGLE_FAV_LIST_DROPDOWN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
