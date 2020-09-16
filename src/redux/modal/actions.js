import { store } from "../store";
import * as types from "../types";

export const openModalInFriends = () => {
  store.dispatch({ type: types.OPEN_MODAL_IN_FRIENDS });
};

export const closeModalInFriends = () => {
  store.dispatch({ type: types.CLOSE_MODAL_IN_FRIENDS });
};

export const openModalInProfile = () => {
  store.dispatch({ type: types.OPEN_MODAL_IN_PROFILE });
};

export const closeModalInProfile = () => {
  store.dispatch({ type: types.CLOSE_MODAL_IN_PROFILE });
};
