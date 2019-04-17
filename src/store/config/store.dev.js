/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const logMiddleware = createLogger();

let enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    logMiddleware,
  ),
);

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      logMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, enhancer);
}
