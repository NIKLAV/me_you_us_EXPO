import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import accountReducer from "./account/reducer";

let rootReducers = combineReducers({
  auth: authReducer,
  account: accountReducer,
});

export default rootReducers;
