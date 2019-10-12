import React from "react";
import "./FavoriteList.scss";
import { connect } from "react-redux";

function FavoriteList({
  favoriteList,
  delFavorite,
  favListShow,
  favListDropdown
}) {
  return (
    <div
      className={`fav-list-dropdown ${favListShow ? "" : "fav-list-hidden"}`}
    >
      <p className="close-fav-list" onClick={() => favListDropdown()}>
        close
      </p>
      <h3>Favorite Recipes</h3>
      <div className="fav-list-items">
        {favoriteList.map(el => {
          return (
            <div key={el.id} className="fav-list-item">
              <div
                className="fav-list-image"
                style={{ backgroundImage: `url(${el.image})` }}
              ></div>
              <p className="fav-list-item-title">{el.title}</p>
              {el.title !== undefined ? (
                <p
                  className="delete-fav-item"
                  onClick={() => delFavorite(el.id)}
                >
                  X
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  favoriteList: state.favoriteList,
  favListShow: state.favListShow
});
const mapDispatchToProps = dispatch => {
  return {
    delFavorite: id => dispatch({ type: "DELETE_FAVORITE", payload: id }),
    favListDropdown: () => dispatch({ type: "TOGGLE_FAV_LIST_DROPDOWN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteList);
