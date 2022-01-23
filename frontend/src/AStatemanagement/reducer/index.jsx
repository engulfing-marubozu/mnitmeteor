import { combineReducers } from "redux";
import {
  loginlogoutReducer,
  ModelPopUpReducer,
  FavouritesReducer,
  InterestedReducer
} from "./UserReducer";
import {} from "./UserReducer";

const rootReducer = combineReducers({
  loginlogoutReducer,
  ModelPopUpReducer,
  FavouritesReducer,
  InterestedReducer
});

export default rootReducer;
