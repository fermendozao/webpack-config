const webpack = require('webpack');
const path = require('path');

let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, //files ending with .js
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
        // sass-loader compiles SCSS
        // css-loader allows to require the css
        // style-loader injects it to the page
      }
    ]
  }
}

module.exports = config;