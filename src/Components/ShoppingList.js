import React from "react";
import "./ShoppingList.scss";
import { connect } from "react-redux";

const ShoppingList = ({ shoppingList }) => {
  return (
    <div className="shopping-list">
      {shoppingList !== undefined ? (
        <div className="note">
          <p>Shopping List</p>
          {shoppingList.map((el, index) => {
            return <p key={index}>- {el}</p>;
          })}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  shoppingList: state.shoppingList
});

export default connect(mapStateToProps)(ShoppingList);
