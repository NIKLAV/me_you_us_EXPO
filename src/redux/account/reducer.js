import * as types from "../types";

const initialState = {
  loading: false,
  data: {},
};

const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_LOADING_ACCOUNT_DATA:
    case types.START_UPDATING_ACCOUNT_DATA:
      return { ...state, loading: true };
    case types.SUCCESS_LOADING_ACCOUNT_DATA:
    case types.SUCCESS_UPDATING_ACCOUNT_DATA:
      return { ...state, loading: false, data: payload };
    case types.AUTH_LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default accountReducer;
