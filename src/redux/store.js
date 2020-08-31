import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
/* import { composeWithDevTools } from 'redux-devtools-extension'; */
import rootReducer from './rootReducer';

/* const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

export const store = createStore(rootReducer, enhancer); */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)),
);
