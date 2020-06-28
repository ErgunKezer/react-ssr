// startup point for the client side app
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layouts/Layout';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
