import { combineReducers } from 'redux';
import {loginlogoutReducer} from './UserReducer';

const rootReducer = combineReducers({
   loginlogoutReducer,
});

export default rootReducer;