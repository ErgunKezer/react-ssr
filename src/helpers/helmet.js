import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetFunc = (params) => {
  return (
    <div>
      <Helmet>
        <title>{params.title}</title>
        <meta property='og:title' content={params.title}></meta>
      </Helmet>
    </div>
  );
};

export default HelmetFunc;
