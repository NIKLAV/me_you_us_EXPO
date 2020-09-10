import * as types from "../types";
import * as API from "../../services/API";

export const getMyFeeds = () => async (dispatch) => {
  dispatch({ type: types.START_FETCH_MY_FEED });
  try {
    const { data, status } = await API.feeds.getMyFeeds();
    console.warn("data in getmyfeed", data);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_FETCH_MY_FEED, payload: data });
  } catch (error) {
    console.warn(error.response.data);
    let message = error?.response?.data;
    if (error.response.status === '401')
    dispatch({ type: types.FAIL_FETCH_MY_FEED, payload: message });
  }
};
