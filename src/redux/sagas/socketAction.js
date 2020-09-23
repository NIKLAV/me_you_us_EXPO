import { take, fork, call, put, race } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
// eslint-disable-next-line import/no-cycle
import { store } from '../store';
import * as types from '../types';


function* Subscribe(socket) {
  while (true) {
    const { payload } = yield take('SUBSCRIBE');
    console.log('subscribe payload', payload);
    socket.send(JSON.stringify(payload));
  }
}

function* unSubscribe(socket) {
  while (true) {
    const { payload } = yield take('UNSUBSCRIBE');
    socket.send(JSON.stringify(payload));
  }
}

function createWebSocketConnection() {
    
  return new Promise((resolve, reject) => {

    const socket = new WebSocket(`ws://77.120.241.80:8870`, [
      'wamp',
    ]);

    socket.onopen = function () {
        console.warn('open socket')
      store.dispatch({ type: types.SOCKET_CONNECTED, payload: true});
      resolve(socket);
    };

    socket.onerror = function (event) {
      reject(event);
      console.warn('socket onerror', event);
    };
  });
}

function createSocketChannel(socket) {
  return eventChannel(emit => {
    socket.onmessage = event => {
      emit(JSON.parse(event.data));
    };

    return () => {
      socket.close();
    };
  });
}

export function* sagaOnReceivedMessage(channel) {
    while (true) {
      const data = yield take(channel);
      console.log('data in sagaReceive', data[1].split(".")[0]);
  
      if (+data[0] === 8) {
        switch (data[1].split(".")[0]) {
          /* case 'test':
            yield put({type: "TEST", payload: data[2]})
            break; */
  
          case 'message':
            if(data[2].action === 'new') {
              console.log('popali v sagy message');
              yield put({type: types.CREATE_NEW_THREAD, payload: data[2].data.data})
              yield put({type: types.SET_INDICATE_MESSAGES, payload: data[2].data.data})
            }
            break;
          case 'threads':
            if(data[2].action === 'new') {
              console.log('popali v sagy threads', data[2].data.data);
              yield put({ type: types.SET_NEW_MESSAGE, payload: data[2].data.data });
            }
            if(data[2].action === 'destroy') {
              yield put({type: types.DELETE_MESSAGE, payload: data[2].data.data });
            }
            if(data[2].action === 'update') {
              /* console.log('threads update', data[2].data.data); */
              yield put({type: types.UPDATE_MESSAGE, payload: data[2].data.data});
            }
            break;
          case 'chat':
            if (data[2].action === 'update') {
             /*  console.log('chat update', data[2].data.data); */
              yield put({type: types.UPDATE_CHAT, payload: data[2].data.data});
            }
  
            if (data[2].action === 'destroy') {
              /* console.log('chat destroy', data[2].data.data); */
              yield put({type: types.DELETE_CHAT, payload: data[2].data.data});
            }
            break;
          default:
            break;
        }
      }
    }
  }

function* watchOnSocket() {
    
    const { payload } = yield take(types.SOCKET_OPEN);
    
    const socket = yield call(createWebSocketConnection, payload);
    const socketChannel = yield call(createSocketChannel, socket);
    yield fork(Subscribe, socket);
    yield fork(unSubscribe, socket);
  
    const { cancel } = yield race({
      task: call(sagaOnReceivedMessage, socketChannel),
      cancel: take(types.SOCKET_CLOSE),
    });
    if (cancel) {
      socketChannel.close();
    }
  }
  
  export default watchOnSocket;