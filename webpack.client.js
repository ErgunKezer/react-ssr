const path = require('path');
module.exports = {
  mode: 'development',
  // tell webpack the root file of our server application
  entry: './src/client/client.js',
  // Tell the webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/, // test if it is js
        loader: 'babel-loader', // if it is js then executes babel
        exclude: /node_modules/,
        options: {
          presets: [
            'react', // takes  jsx and turned into normal js functions
            'stage-0', //generate async  call
            [
              'env', //master webpack
              {
                targets: {
                  browsers: ['last 2 versions'],
                },
              },
            ],
          ],
        },
      },
    ],
  },
};
