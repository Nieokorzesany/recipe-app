import React from "react";
import "./ResultList.scss";
import ResultItem from "./ResultItem";

const ResultsList = props => {
  const { searchResults } = props;
  return (
    <div className="recipe-list">
      {searchResults.length
        ? searchResults.map(recipe => (
            <ResultItem
              key={recipe.recipe_id}
              id={recipe.recipe_id}
              image={recipe.image_url}
              publisher={recipe.publisher}
              display={props.display}
              title={recipe.title}
            ></ResultItem>
          ))
        : null}
    </div>
  );
};

export default ResultsList;
