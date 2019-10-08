import React from "react";
import keyPass from "./Components/config";
import SearchBar from "./Components/SearchBar";
import ResultsList from "./Components/ResultList";
import data from "./Components/recipe.data";
import RecipeDetails from "./Components/RecipeDetails";
import ShoppingList from "./Components/ShoppingList";

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
    this.setState({ display: id }, () => this.getDisplayInfo());
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          onChange={this.onSearchTermChange}
          onSearchClick={this.SearchButtonHandler}
        />
        <div className="main-content">
          <ResultsList
            searchResults={this.state.searchResults}
            display={this.displayRecipe}
          />
          <RecipeDetails name={this.state.recipe.title} />
          <ShoppingList />
        </div>
      </div>
    );
  }
}

export default App;
