const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
    ]
  },
  watchOptions: {
    ignored: /node_modules/
  }
}
