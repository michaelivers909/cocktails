import { ADD_SAVED, DELETE_SAVED } from "../actions";

function savedReducer(state = [], action) {
  switch (action.type) {
    case ADD_SAVED:
      return [...state, action.saved];
    case DELETE_SAVED:
      let newState = [...state];
      let idx = newState.findIndex((cocktail) => cocktail.id === action.id);
      newState.splice(idx, 1);
      return newState;
    default:
      return state;
  }
}

export default savedReducer;
