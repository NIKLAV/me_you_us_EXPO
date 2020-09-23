import { all, fork } from 'redux-saga/effects';
import socketWatcher from './socketWatcher';

export default function* rootSaga() {
  yield all([
    fork(socketWatcher),
  ]);
}
