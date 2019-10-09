import React from "react";
import "./RecipeDetails.scss";
import { connect } from "react-redux";

const RecipeDetails = props => {
  console.log("props recDet", props);
  return (
    <div className="recipe-details">
      {props.recipe.length ? null : (
        <div>
          <p>{props.recipe.title}</p>
          <img
            src={props.recipe.image_url}
            alt="food"
            className="recipe-image"
          />
          <ul>
            {props.recipe.ingredients === undefined
              ? null
              : props.recipe.ingredients.map((ingredient, index) => (
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

export default connect(mapStateToProps)(RecipeDetails);
