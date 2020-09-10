import * as types from "../types";

const initialState = {
  loading: false,
  data: {},
};

const feedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_FETCH_MY_FEED:
      return { ...state, loading: true };
    case types.SUCCESS_FETCH_MY_FEED:
      return { ...state, loading: false, data: payload };
    case types.FAIL_FETCH_MY_FEED:
      return initialState;
    default:
      return state;
  }
};

export default feedReducer;
