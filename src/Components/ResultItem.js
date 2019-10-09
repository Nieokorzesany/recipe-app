import React from "react";
import "./ResultItem.scss";
import { connect } from "react-redux";
import { GET_ID, GET_RECIPE_INFO } from "../Redux/Actions";
import { keyPass2 } from "./config";

const ResultItem = props => {
  return (
    <div
      className="result-item"
      onClick={() => {
        props.getID(props.id);
        props.getRecipeInfo(props.id);
      }}
    >
      <div
        className="recipe-image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="recipe-info">
        <p className="recipe-title">{props.title}</p>
        <p className="recipe-publisher">{props.publisher}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => {
  return {
    getID: id => dispatch({ type: GET_ID, payload: id }),
    getRecipeInfo: id =>
      fetch(`https://www.food2fork.com/api/get?key=${keyPass2}&rId=${id}`)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_RECIPE_INFO, payload: data.recipe }))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultItem);
