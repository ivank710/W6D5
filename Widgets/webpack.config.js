const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "./bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/, //a regular expression that tests what kind of files to run through this loader.
        exclude: /(node_modules)/, //ignore these files
        use: {
          loader: 'babel-loader', //the name of the loader we are going to use (babel-loader).
          query: {
            // options for the loader
            presets: ['@babel/env', '@babel/react'] //transpile back to es 5 and convert jsx code
          }
        },
      }
    ]
  },

  resolve: {
    extensions: [".js", '.jsx', '*']
  },

  devtool: 'source-map'
}