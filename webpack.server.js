const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');
const config = {
  mode: 'development',
  // inform webpack that we are building a bundle for nodeJS, rather than for the browser
  target: 'node',
  // tell webpack the root file of our server application
  entry: './src/index.js',
  // Tell the webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()], //no module imported inside of node module
};
module.exports = merge(baseConfig, config);
