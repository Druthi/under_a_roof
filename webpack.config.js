const path = require('path');

module.exports = {
  entry: __dirname + '/src/index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {loader: 'babel-loader'}
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      }
    ]
  },
};