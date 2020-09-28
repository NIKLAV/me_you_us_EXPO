import * as types from "../types";

const initialState = {
  loadingCommentsInFeed: false,
  loadingSendComment: false,
  loadingAnswers: true,
  comments: [],
  answers: [],
  postId: null,
};

const feedCommentReducer = (state = initialState, { type, payload }) => {
  console.log("all comments", state.comments);
  switch (type) {
    case types.START_GETTING_COMMENTS_IN_FEED:
      return { ...state, loadingCommentsInFeed: true };
    case types.START_SEND_COMMENT_IN_FEED:
      return { ...state, loadingSendComment: true };
    case types.START_GET_ANSWERS_IN_COMMENT:
      return {...state, loadingAnswers: true}
    case types.SUCCESS_GETTING_COMMENTS_IN_FEED:
      return { ...state, comments: payload.data, loadingCommentsInFeed: false }; //добавить ещ' страницы
    case types.SUCCESS_SEND_COMMENT_IN_FEED:
      return {
        ...state,
        comments: [...state.comments, payload],
        loadingSendComment: false,
      };
      case types.SUCCESS_GET_ANSWERS_IN_COMMENT:
        return {...state, loadingAnswers: false, answers: payload.data}
    case types.FAIL_GETTING_COMMENTS_IN_FEED:
      return { ...state, loadingCommentsInFeed: false };
    case types.FAIL_SEND_MESSAGE:
      return { ...state, loadingSendComment: false };
    case types.ADD_DATA_IN_COMMENT_SCREEN:
      return { ...state, postId: payload };
    default:
      return state;
  }
};

export default feedCommentReducer;
