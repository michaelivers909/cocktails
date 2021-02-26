import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import searchReducer from "./SearchReducer";
import savedReducer from "./SavedReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  saved: savedReducer,
});

export default rootReducer;
