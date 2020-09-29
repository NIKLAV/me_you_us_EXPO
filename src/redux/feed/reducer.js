import * as types from "../types";

const initialState = {
  loading: false,
  loadingNewfeed: false,
  data: [],
  lastPage: 1,
};

const feedReducer = (state = initialState, { type, payload }) => {
 
  switch (type) {
    case types.START_FETCH_MY_FEED:
      return { ...state, loading: true };
    case types.START_CREATE_NEW_FEED:
      return { ...state, loadingNewfeed: true };
    case types.START_DELETE_MY_FEED:
      return { ...state };
    case types.SUCCESS_FETCH_MY_FEED:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...payload.data],
        lastPage: payload.meta.last_page,
      };
    case types.SUCCESS_CREATE_NEW_FEED:
      return {
        ...state,
        loadingNewfeed: false,
        data: [payload.data, ...state.data],
      };
    case types.SUCCESS_DELETE_MY_FEED:
      return { ...state, data: state.data.filter((el) => el.id != payload) };
    case types.FAIL_FETCH_MY_FEED:
      return initialState;
    case types.CHANGE_COMMENT_COUNT_AFTER_SEND_COMMENT:
      return {
        ...state,
        data: state.data.map((el) => {
          if (el.id === payload) {
            if (el.comments_count) {
              el.comments_count = el.comments_count + 1;
            } else el.comments_count = 1
            return el;
          }
          return el;
        }),
      };
    default:
      return state;
  }
};

export default feedReducer;
