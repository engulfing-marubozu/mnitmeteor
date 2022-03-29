
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducer';
import thunk from "redux-thunk";

import { composeWithDevTools } from 'redux-devtools-extension';
const storewithMiddleWare=createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,thunk)));

export default storewithMiddleWare;
