import * as types from "../types";

const initialState = {
  errorLogin: {},
  errorSignUp: [],
  token: null,
  isSuccess: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.AUTH_LOGIN_STARTED:
    case types.AUTH_LOGOUT_STARTED:
    case types.AUTH_SIGNUP_START:  
      return state;
    case types.AUTH_LOGIN_FAILURE:
      return { ...state, errorLogin: payload };
    case types.AUTH_LOGIN_SUCCESS:
      return { ...state, payload };
    case types.AUTH_SIGNUP_SUCCESS:
      return { ...state, isSuccess: true };
    case types.AUTH_SIGNUP_FAILURE:
      return { ...state, errorSignUp: payload };
    case types.AUTH_AUTHENTICATE:
      return { ...state, token: payload };
    case types.AUTH_LOGOUT_SUCCESS:
      return initialState;
      case types.AUTH_SIGNUP_CLOSE_MODAL:
        return {...state, isSuccess: false}
        case types.AUTH_SIGNUP_CLEAR_ERROR:
          return {...state, errorSignUp: []}
    default:
      return state;
  }
};

export default authReducer;
