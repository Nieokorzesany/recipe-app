import React from "react";
import "./RecipeDetails.scss";
import { connect } from "react-redux";
import { addToShoppingList } from "../Redux/actions";

const RecipeDetails = ({ addToShoppingList, ingredients, title, image }) => {
  return (
    <div className="recipe-details">
      {ingredients === undefined ? null : (
        <div className="recipe-container">
          <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <div className="recipe-detail-title">
              <p>{title}</p>
            </div>
          </div>

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
    addToShoppingList: list => dispatch(addToShoppingList(list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetails);
