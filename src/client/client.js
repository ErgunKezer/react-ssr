// startup point for the client side app
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
// console.log('Hi there');
