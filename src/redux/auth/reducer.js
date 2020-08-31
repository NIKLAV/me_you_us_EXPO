import * as types from '../types';

const initialState = {
  errorLogin: {},
  errorSignUp: {},
};

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.AUTH_LOGIN_STARTED:
      return state;
    case types.AUTH_LOGIN_FAILURE:
      return {...state, errorLogin: payload};
    /* case types.SET_BEARER_TOKEN:
      return payload; */
    case types.AUTH_LOGIN_SUCCESS:
      return {...state, payload};
    case types.AUTH_SIGNUP_SUCCESS:
      return {...state, payload};
    case types.AUTH_SIGNUP_FAILURE:
      return {...state, errorSignUp: payload};
    default:
      return state;
  }
};

export default authReducer;
