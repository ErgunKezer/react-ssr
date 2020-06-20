// startup point for the client side app
import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
ReactDom.hydrate(
  <BrowserRouter>
    <Routes></Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);
// console.log('Hi there');
