import * as types from "../types";

const initialState = {
  loadingCommentsInFeed: false,
  loadingSendComment: false,
  loadingAnswers: false,
  loadingSendAnswer: false,
  comments: [],
  answers: [],
  postId: null,
  currentCommentId: null,
  isAnswer: false,
  lastPageOfAnswers: 1,
  totalAnswers: 0,
};

const feedCommentReducer = (state = initialState, { type, payload }) => {
  console.log("payload", payload);
  switch (type) {
    case types.START_GETTING_COMMENTS_IN_FEED:
      return { ...state, loadingCommentsInFeed: true };
    case types.START_SEND_COMMENT_IN_FEED:
      return { ...state, loadingSendComment: true };
    case types.START_GET_ANSWERS_IN_COMMENT:
      return { ...state, loadingAnswers: true };
    case types.START_SEND_ANSWER_IN_COMMENT:
      return { ...state, loadingSendAnswer: true };
    case types.SUCCESS_GETTING_COMMENTS_IN_FEED:
      return { ...state, comments: payload.data, loadingCommentsInFeed: false }; //добавить ещ' страницы
    case types.SUCCESS_SEND_COMMENT_IN_FEED:
      return {
        ...state,
        comments: [...state.comments, payload.data],
        loadingSendComment: false,
      };
    case types.SUCCESS_GET_ANSWERS_IN_COMMENT:
      return {
        ...state,
        loadingAnswers: false,
        /* answers: [...state.answers, ...payload.data], */
        lastPageOfAnswers: payload.meta.last_page,
        totalAnswers: payload.meta.total,
      };
    case types.SUCCESS_SEND_ANSWER_IN_COMMENT:
      return {
        ...state,
       /*  answers: [...state.answers, payload.data], */
        loadingSendAnswer: false,
        isAnswer: false,
        comments: state.comments.map((el) => {
          if (el.id === payload.id) {
            el.answers = el.answers + 1;
            return el;
          }
          return el;
        }),
      };
    case types.FAIL_GETTING_COMMENTS_IN_FEED:
      return { ...state, loadingCommentsInFeed: false };
    case types.FAIL_SEND_MESSAGE:
      return { ...state, loadingSendComment: false };
    case types.ADD_DATA_IN_COMMENT_SCREEN:
      return { ...state, postId: payload };
    case types.CHECK_ID_AND_IS_ANSWER:
      return { ...state, currentCommentId: payload.commentId, isAnswer: true };
    default:
      return state;
  }
};

export default feedCommentReducer;
