import { combineReducers } from "redux";
import {
  loginlogoutReducer,
  ModelPopUpReducer,
  FavouritesReducer,
} from "./UserReducer";
import {} from "./UserReducer";

const rootReducer = combineReducers({
  loginlogoutReducer,
  ModelPopUpReducer,
  FavouritesReducer,
});

export default rootReducer;
