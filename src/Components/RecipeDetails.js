import React from "react";
import "./RecipeDetails.scss";
import { connect } from "react-redux";
import { ADD_TO_SHOPPING_LIST } from "../Redux/Actions";

const RecipeDetails = props => {
  console.log("props recDet", props.recipe.length);
  return (
    <div className="recipe-details">
      {props.recipe.length < 1 ? null : (
        <div className="recipe-container">
          <p>{props.recipe.title}</p>
          <img
            src={props.recipe.image_url}
            alt="food"
            className="recipe-image"
          />
          <button
            onClick={() => props.addToShoppingList(props.recipe.ingredients)}
          >
            Add to Shopping List
          </button>
          <ul className="ingredients-list">
            {props.recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    addToShoppingList: list =>
      dispatch({
        type: ADD_TO_SHOPPING_LIST,
        payload: list
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetails);
