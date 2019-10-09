import React from "react";
import "./SearchBar.scss";
import { connect } from "react-redux";
import { GET_SEARCH_TERM, FETCH_RECIPES } from "../Redux/Actions";
import keyPass from "./config";

const SearchBar = props => {
  console.log("props", props);
  return (
    <div className="SearchBar">
      <input
        type="text"
        onChange={event => props.getSearchTerm(event.target.value)}
      />
      <button onClick={() => props.searchButtonHandler(props.searchTerm)}>
        Search
      </button>
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
      fetch(`https://www.food2fork.com/api/search?key=${keyPass}&q=${term}`)
        .then(response => response.json())
        .then(data => dispatch({ type: FETCH_RECIPES, payload: data.recipes }))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
