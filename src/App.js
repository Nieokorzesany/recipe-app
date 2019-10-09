import React from "react";
import keyPass from "./Components/config";
import SearchBar from "./Components/SearchBar";
import ResultsList from "./Components/ResultList";
import data from "./Components/recipe.data";
import RecipeDetails from "./Components/RecipeDetails";
import ShoppingList from "./Components/ShoppingList";
import { connect } from "react-redux";
import { GET_SEARCH_TERM, GET_ID, GET_RECIPE_INFO } from "./Redux/Actions";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchResults: data,
      display: "",
      recipe: ""
    };
  }

  onSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  SearchButtonHandler = () => {
    const key = keyPass;
    let url = `https://www.food2fork.com/api/search?key=${key}&q=${this.state.searchTerm}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            searchResults: data.recipes
          },
          () => console.log(this.state)
        );
      })
      .catch(error => console.error(error));
  };

  getDisplayInfo = () => {
    let url = `https://www.food2fork.com/api/get?key=${keyPass}&rId=${this.state.display}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          recipe: data.recipe
        });
      })
      .catch(error => console.error(error));
  };

  displayRecipe = id => {
    this.props.getID(id);
    this.props.getRecipeInfo(id);
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          onChange={this.props.getSearchTerm}
          onSearchClick={this.SearchButtonHandler}
        />
        <div className="main-content">
          <ResultsList
            searchResults={this.state.searchResults}
            display={this.displayRecipe}
          />
          <RecipeDetails recipe={this.props.recipe} />
          <ShoppingList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => {
  return {
    getSearchTerm: term => dispatch({ type: GET_SEARCH_TERM, payload: term }),
    getID: id => dispatch({ type: GET_ID, payload: id }),
    getRecipeInfo: id =>
      fetch(`https://www.food2fork.com/api/get?key=${keyPass}&rId=${id}`)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_RECIPE_INFO, payload: data.recipe }))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
  // or you can use action creators directly instead of mapDispatchToProps
  // { action, otherAction }
)(App);
