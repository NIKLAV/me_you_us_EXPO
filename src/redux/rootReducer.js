import {combineReducers} from 'redux';
import authReducer from './auth/reducer';



let rootReducers = combineReducers({auth: authReducer});

export default rootReducers;
