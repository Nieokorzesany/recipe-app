import React from "react";
import SearchBar from "./Components/SearchBar";
import ResultsList from "./Components/ResultList";
import RecipeDetails from "./Components/RecipeDetails";
import ShoppingList from "./Components/ShoppingList";
import { connect } from "react-redux";
import { GET_RECIPE_INFO } from "./Redux/Actions";
import { keyPass1 } from "./Components/config";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getRecipeInfo("46895");
  }
  render() {
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
  }
}

const mapStateToProps = state => ({
  id: state.display
});

const mapDispatchToProps = dispatch => {
  const url = `https://www.food2fork.com/api/get?key=${keyPass1}&rId=`;
  return {
    getRecipeInfo: id =>
      fetch(`${url}${id}`)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_RECIPE_INFO, payload: data.recipe }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
