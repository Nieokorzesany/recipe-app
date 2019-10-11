import React from "react";
import "./RecipeDetails.scss";
import { connect } from "react-redux";
import { ADD_TO_SHOPPING_LIST } from "../Redux/Actions";

const RecipeDetails = ({ addToShoppingList, ingredients, title, image }) => {
  return (
    <div className="recipe-details">
      {ingredients === undefined ? null : (
        <div className="recipe-container">
          <p>{title}</p>
          <img src={image} alt="food" className="recipe-image" />
          <button onClick={() => addToShoppingList(ingredients)}>
            Add to Shopping List
          </button>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.recipe.ingredients,
    image: state.recipe.image_url,
    title: state.recipe.title
  };
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
