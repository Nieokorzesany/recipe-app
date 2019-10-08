import React from "react";
import "./RecipeDetails.scss";

const RecipeDetails = props => {
  console.log(props);
  return (
    <div className="recipe-details">
      <p>{props.name}</p>
    </div>
  );
};

export default RecipeDetails;
