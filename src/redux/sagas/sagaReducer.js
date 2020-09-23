import { SET_SOCKET_TOKEN, SOCKET_CONNECTED } from '../types';

const initialState = {
  socketConnected: false,
  socketToken: '',
}
const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_CONNECTED:
      return {
        ...state,
        socketConnected: true,
      }

    default:
      return state;
  }
}

export default socketReducer;
