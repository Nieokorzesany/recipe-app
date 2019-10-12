import data from "../Components/recipe.data";

const initialState = {
  searchTerm: "",
  searchResults: [...data],
  display: "",
  recipe: [],
  shoppingList: [],
  favoriteIDs: [],
  favoriteList: [],
  favListShow: false
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
    case "ADD_TO_SHOPPING_LIST":
      return {
        ...state,
        shoppingList: [...state.shoppingList, ...action.payload]
      };
    case "LIKE_RECIPE":
      return state.favoriteIDs.includes(action.payload)
        ? {
            ...state,
            favoriteIDs: state.favoriteIDs.filter(id => id !== action.payload),
            favoriteList: [
              state.favoriteList.filter(el => el.id !== action.list.id)
            ]
          }
        : {
            ...state,
            favoriteIDs: [...state.favoriteIDs, action.payload],
            favoriteList: [...state.favoriteList, action.list]
          };
    case "DELETE_FAVORITE":
      return {
        ...state,
        favoriteIDs: state.favoriteIDs.filter(id => id !== action.payload),
        favoriteList: [
          ...state.favoriteList.filter(el => el.id !== action.payload)
        ]
      };
    case "TOGGLE_FAV_LIST_DROPDOWN":
      return {
        ...state,
        favListShow: !state.favListShow
      };

    default:
      return state;
  }
};

export default rootReducer;
