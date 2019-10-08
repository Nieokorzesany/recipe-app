import React from "react";
import "./ResultItem.scss";

const ResultItem = props => {
  return (
    <div className="result-item" onClick={() => props.display(props.id)}>
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

export default ResultItem;
