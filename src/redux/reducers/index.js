import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import searchReducer from "./SearchReducer";
import savedReducer from "./SavedReducer";
import gifReducer from "./GifReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  saved: savedReducer,
  gif: gifReducer,
});

export default rootReducer;
