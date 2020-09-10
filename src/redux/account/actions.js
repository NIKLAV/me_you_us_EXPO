import * as types from "../types";
import * as API from "../../services/API";

export const getUserData = () => async (dispatch) => {
  dispatch({ type: types.START_LOADING_ACCOUNT_DATA });
  try {
    const { data, status } = await API.account.getAccount();
    console.warn("data in action", data);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_LOADING_ACCOUNT_DATA, payload: data[0] });
  } catch (error) {
    console.warn(error.response.data);
    let message = error?.response?.data;
    dispatch({ type: types.FAIL_LOADING_ACCOUNT_DATA, payload: message });
  }
};

export const updateUserData = (user) => async (dispatch) => {
  dispatch({ type: types.START_UPDATING_ACCOUNT_DATA });
  try {
    const { data, status } = await API.account.updateAccount(user);
    console.warn("data in update", data);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_UPDATING_ACCOUNT_DATA, payload: data });
  } catch (error) {
    console.warn(error.response.data);
    let message = error?.response?.data;
    dispatch({ type: types.FAIL_UPDATING_ACCOUNT_DATA, payload: message });
  }
};

export const uploadUserPhoto = (photo) => async (dispatch) => {
  console.warn(photo);
  dispatch({ type: types.START_UPDATING_ACCOUNT_DATA });
  try {
    const { data, status } = await API.account.uploadPhoto(photo);
    console.warn("data in upload", data);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_UPDATING_ACCOUNT_DATA, payload: data });
  } catch (error) {
    console.warn(error.response.data);
    let message = error?.response?.data;
    dispatch({ type: types.FAIL_UPDATING_ACCOUNT_DATA, payload: message });
  }
};
