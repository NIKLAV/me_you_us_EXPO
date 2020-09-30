import * as types from "../types";

const initialState = {
  loadingProfileData: false,
  data: [],
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_GET_PROFILE_DATA:
      return { ...state, loadingProfileData: true };
    case types.SUCCESS_GET_PROFILE_DATA:
      return { ...state, data: payload, loadingProfileData: false };
    case types.FAIL_GET_PROFILE_DATA:
      return { ...state, loadingProfileData: false };
    default:
      return state;
  }
};

export default profileReducer;
