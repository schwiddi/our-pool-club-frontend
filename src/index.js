import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import * as actions from './store/actions/actions';

import Layout from './containers/Layout';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root'),
);

store.dispatch(actions.initiateApp());
store.dispatch(actions.initiateAppDone());
store.dispatch(actions.initiateUser());
store.dispatch(actions.initiateUserDone());

serviceWorker.unregister();
