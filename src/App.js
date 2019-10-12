import React from "react";
import SearchBar from "./Components/SearchBar";
import ResultsList from "./Components/ResultList";
import RecipeDetails from "./Components/RecipeDetails";
import ShoppingList from "./Components/ShoppingList";
import { connect } from "react-redux";
import { getRecipeInfo } from "./Redux/actions";
import { keyPass2 } from "./Components/config";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //this.props.getRecipeInfo("46895");
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
  return {
    getRecipeInfo: id => getRecipeInfo(id, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
