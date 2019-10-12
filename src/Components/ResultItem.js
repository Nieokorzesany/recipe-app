import React from "react";
import "./ResultItem.scss";
import { connect } from "react-redux";
import { getID, getRecipeInfo, likeRecipe } from "../Redux/actions";

const ResultItem = ({
  id,
  image,
  title,
  publisher,
  getID,
  getRecipeInfo,
  likeRecipe,
  favoriteIDs
}) => {
  return (
    <div className="result-item" onClick={() => getID(id)}>
      <div
        className="recipe-image"
        style={{ backgroundImage: `url(${image})` }}
        onClick={() => getRecipeInfo(id)}
      ></div>
      <div className="recipe-info">
        <p className="recipe-title" onClick={() => getRecipeInfo(id)}>
          {title}
        </p>
        <div className="likes">
          <p className="recipe-publisher">{publisher}</p>

          <label
            className={`toggle-heart ${
              favoriteIDs.includes(id) ? "toggle-heart-liked" : null
            }`}
            onClick={() => likeRecipe(id, image, title)}
          >
            ❤
          </label>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ favoriteIDs: state.favoriteIDs });

const mapDispatchToProps = dispatch => {
  return {
    getID: id => dispatch(getID(id)),
    getRecipeInfo: id => getRecipeInfo(id, dispatch),
    likeRecipe: (id, image, title) => dispatch(likeRecipe(id, image, title))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultItem);
