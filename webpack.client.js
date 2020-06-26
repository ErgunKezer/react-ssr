const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const config = {
  target: 'web',
  // tell webpack the root file of our server application
  entry: './src/client/client.js',
  // Tell the webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['ignore-loader'],
      },
    ],
  },
};

module.exports = merge(baseConfig, config);
