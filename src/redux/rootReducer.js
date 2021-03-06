import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import accountReducer from "./account/reducer";
import feedReducer from "./feed/reducer";
import modalReducer from "./modal/reducer";
import chatReducer from "./chats/reducer";
import socketReducer from "./sagas/sagaReducer";
import feedCommentReducer from "./feedsComments/reducer";

let rootReducers = combineReducers({
  auth: authReducer,
  account: accountReducer,
  feed: feedReducer,
  modal: modalReducer,
  chats: chatReducer,
  socket: socketReducer,
  feedComments: feedCommentReducer,
});

export default rootReducers;
