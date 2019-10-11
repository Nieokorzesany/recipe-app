import React from "react";
import "./ResultItem.scss";
import { connect } from "react-redux";
import { GET_ID, GET_RECIPE_INFO } from "../Redux/Actions";
import { keyPass2 } from "./config";

const ResultItem = ({ id, image, title, publisher, getID, getRecipeInfo }) => {
  return (
    <div
      className="result-item"
      onClick={() => {
        getID(id);
        getRecipeInfo(id);
      }}
    >
      <div
        className="recipe-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="recipe-info">
        <p className="recipe-title">{title}</p>
        <p className="recipe-publisher">{publisher}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  const url = `https://www.food2fork.com/api/get?key=${keyPass2}&rId=`;
  return {
    getID: id => dispatch({ type: GET_ID, payload: id }),
    getRecipeInfo: id =>
      fetch(`${url}${id}`)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_RECIPE_INFO, payload: data.recipe }))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultItem);
