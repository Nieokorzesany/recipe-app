const initialState = {
  searchTerm: "",
  searchResults: [],
  display: "",
  recipe: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload
      };
    case "GET_ID":
      return {
        ...state,
        display: action.payload
      };
    case "GET_RECIPE_INFO":
      return {
        ...state,
        recipe: action.payload
      };
    case "FETCH_RECIPES":
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
