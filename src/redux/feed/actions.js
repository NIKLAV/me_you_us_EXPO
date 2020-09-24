import * as types from "../types";
import * as API from "../../services/API";

export const getMyFeeds = (page) => async (dispatch) => {
  dispatch({ type: types.START_FETCH_MY_FEED });
  try {
    const { data, status } = await API.feeds.getMyFeeds(page);
   /* console.warn("data in getmyfeed", data); */ 
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_FETCH_MY_FEED, payload: data });
  } catch (error) {
    console.warn(error)
    console.warn(error?.response?.data);
    let message = error?.response?.data;
    if (+error?.response?.status === 401) return
    dispatch({ type: types.FAIL_FETCH_MY_FEED });
  }
};

export const createNewFeed = (text) => async (dispatch) => {
  dispatch({ type: types.START_CREATE_NEW_FEED });
  try {
    const { data, status } = await API.feeds.addNewFeed(text);
   console.warn("data in createnewfeed", data); 
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_CREATE_NEW_FEED, payload: data });
  } catch (error) {
    console.warn(error)
    console.warn(error?.response?.data);
    let message = error?.response?.data;
    if (+error?.response?.status === 401) return
    dispatch({ type: types.FAIL_CREATE_NEW_FEED });
  }
}; 


export const deleteMyFeed = (id) => async (dispatch) => {
  dispatch({ type: types.START_DELETE_MY_FEED });
  try {
    const { data, status } = await API.feeds.deleteFeed(id);
   /* console.warn("data in getmyfeed", data);  */ 
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_DELETE_MY_FEED, payload: id });
  } catch (error) {
    console.warn('error in delete', error)
   /*  console.warn('error in delete', error?.response?.data); */
    let message = error?.response?.data;
    if (+error?.response?.status === 401) return
    dispatch({ type: types.FAIL_DELETE_MY_FEED });
  }
};


