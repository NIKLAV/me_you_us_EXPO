import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import accountReducer from "./account/reducer";
import feedReducer from "./feed/reducer";
import modalReducer from "./modal/reducer";

let rootReducers = combineReducers({
  auth: authReducer,
  account: accountReducer,
  feed: feedReducer,
  modal: modalReducer,
});

export default rootReducers;
