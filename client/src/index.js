import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import './index.css';
import clientsReducer from './redux/clients';
import authReducer from './redux/users';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

let reducer = combineReducers({ clientsReducer, authReducer });

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
