import * as types from "../types";

const initialState = {
  profileData: {},
  isOpenInFriends: false,
  isOpenInProfile: false,
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.OPEN_MODAL_IN_FRIENDS:
      return { ...state, isOpenInFriends: true };
    case types.CLOSE_MODAL_IN_FRIENDS:
      return { ...state, isOpenInFriends: false };
    case types.OPEN_MODAL_IN_PROFILE:
      return { ...state, isOpenInProfile: true };
    case types.CLOSE_MODAL_IN_PROFILE:
      return { ...state, isOpenInProfile: false };
    case types.ADD_DATA_IN_PROFILE_MODAL:
      return { ...state, profileData: payload };
    default:
      return state;
  }
};

export default modalReducer;
