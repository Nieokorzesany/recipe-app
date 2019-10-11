import React from "react";
import SearchBar from "./Components/SearchBar";
import ResultsList from "./Components/ResultList";
import RecipeDetails from "./Components/RecipeDetails";
import ShoppingList from "./Components/ShoppingList";
import { connect } from "react-redux";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <div className="main-content">
        <ResultsList />
        <RecipeDetails />
        <ShoppingList />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
