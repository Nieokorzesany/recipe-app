import React from "react";
import "./ShoppingList.scss";
import { connect } from "react-redux";

const ShoppingList = props => {
  console.log("shoplist", props.shoppingList);
  return (
    <div className="shopping-list">
      {props.shoppingList.map((el, index) => {
        return <p key={index}>{el}</p>;
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(ShoppingList);
