import * as types from "../types";
import * as API from "../../services/API";

export const getCommentsInFeed = (id) => async (dispatch) => {
  dispatch({ type: types.START_GETTING_COMMENTS_IN_FEED });
  try {
    const { data, status } = await API.feedsComments.getComments(id);
   /* console.warn("data in getmyfeed", data); */ 
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_GETTING_COMMENTS_IN_FEED, payload: data });
  } catch (error) {
    console.warn('error in getting comments', error)
    console.warn(error?.response?.data);
    let message = error?.response?.data;
    if (+error?.response?.status === 401) return
    dispatch({ type: types.FAIL_GETTING_COMMENTS_IN_FEED });
  }
};

export const sendCommentInFeed = (body) => async (dispatch) => {
  dispatch({ type: types.START_SEND_COMMENT_IN_FEED });
  try {
    const { data, status } = await API.feedsComments.sendComment(body);
   console.warn("data in sendComment", data);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_SEND_COMMENT_IN_FEED, payload: data });
  } catch (error) {
    console.warn('error in send comments', error)
    console.warn(error?.response?.data);
    let message = error?.response?.data;
    if (+error?.response?.status === 401) return
    dispatch({ type: types.FAIL_SEND_COMMENT_IN_FEED });
  }
};

export const getAnswersInComment = (id) => async (dispatch) => {
  dispatch({ type: types.START_GET_ANSWERS_IN_COMMENT });
  try {
    const { data, status } = await API.feedsComments.getAnswers(id);
   console.warn("data in getAnswers", data);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_GET_ANSWERS_IN_COMMENT, payload: data });
  } catch (error) {
    console.warn('error in getAnswers', error)
    console.warn(error?.response?.data);
    let message = error?.response?.data;
    if (+error?.response?.status === 401) return
    dispatch({ type: types.FAIL_GET_ANSWERS_IN_COMMENT });
  }
};

export const sendAnswersInComment = (id, body) => async (dispatch) => {
  console.warn('in action', id, body)
  dispatch({ type: types.START_SEND_ANSWER_IN_COMMENT });
  try {
    const { data, status } = await API.feedsComments.sendAnswer(id, body);
   console.warn("data in send answer", data);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.SUCCESS_SEND_ANSWER_IN_COMMENT, payload: data });
  } catch (error) {
    console.warn('error in sendAnswer', error)
    console.warn(error?.response?.data);
    let message = error?.response?.data;
    if (+error?.response?.status === 401) return
    dispatch({ type: types.FAIL_SEND_ANSWER_IN_COMMENT });
  }
};