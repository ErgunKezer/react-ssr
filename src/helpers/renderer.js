import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';
import Routes from '../client/Routes';
import { StaticRouter } from 'react-router-dom';

export default (props) => {
  const content = renderToString(
    <StaticRouter context={{}} location={props.path}>
      <Routes></Routes>
    </StaticRouter>
  );
  return `<html> 
            <head></head>
            <body>
                <div id="root"> 
                    ${content}
                </div>
            </body>
            <script src="bundle.js"}></script>
        </html>`;
};
