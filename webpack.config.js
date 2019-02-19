// entry -> output

const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // babel-loader
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/, //check for files that end in js
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
