import { keyPass1, keyPass2 } from "../Components/config";

export const GET_SEARCH_TERM = "GET_SEARCH_TERM";
export const GET_ID = "GET_ID";
export const GET_RECIPE_INFO = "GET_RECIPE_INFO";
export const FETCH_RECIPES = "FETCH_RECIPES";
export const ADD_TO_SHOPPING_LIST = "ADD_TO_SHOPPING_LIST";

export const getSearchTerm = term => {
  return {
    type: GET_SEARCH_TERM,
    payload: term
  };
};

export const searchButtonHandler = (term, dispatch) => {
  const url = `https://www.food2fork.com/api/search?key=${keyPass2}&q=`;
  fetch(`${url}${term}`)
    .then(response => response.json())
    .then(data => dispatch({ type: FETCH_RECIPES, payload: data.recipes }));
};

export const addToShoppingList = list => {
  return {
    type: ADD_TO_SHOPPING_LIST,
    payload: list
  };
};

export const getID = id => {
  return { type: GET_ID, payload: id };
};

export const getRecipeInfo = (id, dispatch) => {
  const url = `https://www.food2fork.com/api/get?key=${keyPass2}&rId=`;
  fetch(`${url}${id}`)
    .then(response => response.json())
    .then(data => dispatch({ type: GET_RECIPE_INFO, payload: data.recipe }));
};

export const likeRecipe = (id, image, title) => {
  return {
    type: "LIKE_RECIPE",
    payload: id,
    list: { id: id, image: image, title: title }
  };
};
