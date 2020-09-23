import { all, fork } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import watchOnSocket from './socketAction';

function* SocketWatcher() {
  yield all([fork(watchOnSocket)]);
}

export default SocketWatcher;