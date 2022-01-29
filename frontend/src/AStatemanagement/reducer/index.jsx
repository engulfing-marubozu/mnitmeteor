import { combineReducers } from "redux";
import {
  loginlogoutReducer,
  ModelPopUpReducer,
  FavouritesReducer,
  InterestedReducer,
  DeletePublishedAdsReducer,
  PhoneAuthReducer,
} from "./UserReducer";
import {} from "./UserReducer";

const rootReducer = combineReducers({
  loginlogoutReducer,
  ModelPopUpReducer,
  FavouritesReducer,
  InterestedReducer,
  DeletePublishedAdsReducer,
  PhoneAuthReducer,
});

export default rootReducer;
