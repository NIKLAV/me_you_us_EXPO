import * as types from "../types";
import * as API from "../../services/API";

export const getUserProfile = (id) => async (dispatch) => {
    dispatch({ type: types.START_GET_PROFILE_DATA });
    try {
      const { data, status } = await API.profile.getProfile(id);
      console.warn("data in getProfile", data); 
      if (status < 200 && status >= 300) throw new Error("Something went wrong");
      dispatch({ type: types.SUCCESS_GET_PROFILE_DATA, payload: data });
    } catch (error) {
      console.warn("error in getting comments", error);
      console.warn(error?.response?.data);
      let message = error?.response?.data;
      if (+error?.response?.status === 401) return;
      dispatch({ type: types.FAIL_GET_PROFILE_DATA });
    }
  };