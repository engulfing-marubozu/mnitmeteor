import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
let middleware = [];
if (process.env.REACT_APP_NODE_ENV === "development") {
  console.log("fdksf");
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}
const storewithMiddleWare = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default storewithMiddleWare;
