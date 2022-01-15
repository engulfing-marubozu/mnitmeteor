import { combineReducers } from 'redux';
import {loginlogoutReducer} from './UserReducer';
import { ModelPopUpReducer } from './UserReducer';

const rootReducer = combineReducers({
   loginlogoutReducer,
   ModelPopUpReducer,  
});

export default rootReducer;