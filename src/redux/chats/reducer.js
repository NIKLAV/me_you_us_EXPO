import { ActionSheetIOS } from "react-native";
import * as types from "../types";

const initialState = {
  loadingAllChats: false,
  loadingDeleteChat: false,
  data: [],
};

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_FETCH_MY_CHATS:
      return { ...state, loadingAllChats: true };
    case types.START_DELETE_CHAT:
      return { ...state, loadingDeleteChat: true };
    case types.SUCCESS_FETCH_MY_CHATS:
      return {
        ...state,
        data: [...state.data, ...payload],
        loadingAllChats: false,
      };
    case types.SUCCESS_DELETE_CHAT:
      return { ...state, data: state.data.filter(( chat ) => console.warn('reducer', chat.id, payload) || payload !== chat.id)};
    case types.FAIL_FETCH_MY_CHATS:
    case types.FAIL_DELETE_CHAT:
      return initialState;
    default:
      return state;
  }
};

export default chatReducer;
