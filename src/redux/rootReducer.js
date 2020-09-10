import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import accountReducer from "./account/reducer";
import feedReducer from "./feed/reducer";

let rootReducers = combineReducers({
  auth: authReducer,
  account: accountReducer,
  feed: feedReducer,
});

export default rootReducers;
