const rootReducer = (state, action) => {
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
    default:
      return state;
  }
};

export default rootReducer;
