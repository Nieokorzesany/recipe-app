import React from "react";
import "./RecipeDetails.scss";

const RecipeDetails = props => {
  console.log(props);
  return (
    <div className="recipe-details">
      {props.recipe === undefined ? null : (
        <div>
          <p>{props.recipe.title}</p>
          <img
            src={props.recipe.image_url}
            alt="food"
            className="recipe-image"
          />
          <ul>
            {props.recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
