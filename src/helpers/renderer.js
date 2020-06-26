import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from '../client/Layouts/Layout';
export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <Layout></Layout>
      </StaticRouter>
    </Provider>
  );
  return `<html> 
            <head>
              <link rel="stylesheet" type="text/css" href="build/main.css">
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="public/bundle.js"></script>
        </html>`;
};
