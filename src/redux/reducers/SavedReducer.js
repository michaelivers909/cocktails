import { ADD_SAVED, DELETE_SAVED, CLEAR_SAVED, GET_SAVED } from "../actions";

function savedReducer(state = [], action) {
  switch (action.type) {
    case ADD_SAVED:
      return [...state, {...action.saved, gif: action.gif}];
    case DELETE_SAVED:
      let newState = [...state];
      let idx = newState.findIndex((cocktail) => cocktail.id === action.id);
      newState.splice(idx, 1);
      return newState;
    case CLEAR_SAVED:
      let clearState = [];
      return clearState;
    default:
      return state;
    case GET_SAVED:
      return [{...action.saved, cocktail: action.id}];
  }
}

export default savedReducer;
