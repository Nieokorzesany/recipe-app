import React from "react";
import "./ResultList.scss";
import ResultItem from "./ResultItem";
import { connect } from "react-redux";

const ResultsList = props => {
  console.log("list", props);
  const { searchResults } = props;
  return (
    <div className="recipe-list">
      {props.searchResults.length
        ? searchResults.map(recipe => (
            <ResultItem
              key={recipe.recipe_id}
              id={recipe.recipe_id}
              image={recipe.image_url}
              publisher={recipe.publisher}
              title={recipe.title}
            ></ResultItem>
          ))
        : null}
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(ResultsList);
