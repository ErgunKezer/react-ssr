const path = require('path');
module.exports = {
  // inform webpack that we are building a bundle for nodeJS, rather than for the browser
  target: 'node',
  // tell webpack the root file of our server application
  entry: './src/index.js',
  // Tell the webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
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
            'react',
            'stage-0', //generate async  call
            [
              'env',
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
