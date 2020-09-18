import * as types from "../types";
import * as API from "../../services/API";

export const getMyChats = () => async (dispatch) => {
  dispatch({ type: types.START_FETCH_MY_CHATS });
  try {
    const { data, status } = await API.chats.getChats();
    console.warn("data in getmychats", data);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_FETCH_MY_CHATS, payload: data });
  } catch (error) {
    console.warn("error in getchats", error);
    console.warn(error?.response?.data);
    let message = error?.response?.data;
    if (+error?.response?.status === 401) return;
    dispatch({ type: types.FAIL_FETCH_MY_CHATS });
  }
};

export const deleteMyChat = (id) => async (dispatch) => {
  dispatch({ type: types.START_DELETE_CHAT });
  try {
    const { data, status } = await API.chats.deleteChat(id);
    /* console.warn("data in delete", data); */
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_DELETE_CHAT, payload: id });
  } catch (error) {
    console.warn("error in getchats", error);
    console.warn(error?.response?.data);
    let message = error?.response?.data;
    if (+error?.response?.status === 401) return;
    dispatch({ type: types.FAIL_DELETE_CHAT });
  }
};
