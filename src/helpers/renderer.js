import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';
import Routes from '../client/Routes';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <Routes></Routes>
      </StaticRouter>
    </Provider>
  );
  return `<html> 
            <head></head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="bundle.js"></script>
        </html>`;
};
