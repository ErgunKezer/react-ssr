const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  // Tell webpack to run babel on every file it runs through
  plugins: [new MiniCssExtractPlugin()],

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
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};
