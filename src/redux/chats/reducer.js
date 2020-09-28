import { acc } from "react-native-reanimated";
import * as types from "../types";

const initialState = {
  loadingAllChats: false,
  loadingDeleteChat: false,
  loadingGettingMessages: false,
  data: [],
  currentPartner: {},
  messages: [],
};

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_FETCH_MY_CHATS:
      return { ...state, loadingAllChats: true };
    case types.START_DELETE_CHAT:
      return { ...state, loadingDeleteChat: true };
    case types.START_GETTING_MESSAGES:
      return { ...state, loadingGettingMessages: true };
    case types.START_SEND_MESSAGE:
      return { ...state };
    case types.SUCCESS_SEND_MESSAGE:
      return { ...state };
    case types.SUCCESS_FETCH_MY_CHATS:
      return {
        ...state,
        data: [...state.data, ...payload],
        loadingAllChats: false,
      };
    case types.SUCCESS_DELETE_CHAT:
      return {
        ...state,
        data: state.data.filter((chat) => payload !== chat.id),
      };
    case types.SUCCESS_GETTING_MESSAGES:
      return {
        ...state,
        messages: payload.reverse(),
        loadingGettingMessages: false,
      };
    case types.SET_NEW_MESSAGE:
      return {
        ...state,
        messages: [payload, ...state.messages],
        data: state.data.reduce((array, current) => {
          if (current.id === state.currentPartner.thread_id) {
            current.last_massage = payload;
            array.unshift(current);
          } else array.push(current);
          return array;
        }, []) /* state.data.map((el) => {
          if (el.id === state.currentPartner.thread_id) {
            el.last_massage = payload;
            return el;
          }
          return el;
        }), */,
      };
    case types.FAIL_FETCH_MY_CHATS:
    case types.FAIL_DELETE_CHAT:
      return initialState;
    case types.ADD_DATA_IN_CHAT:
      return { ...state, currentPartner: payload };
    default:
      return state;
  }
};

export default chatReducer;
