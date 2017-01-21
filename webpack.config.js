var path = require('path');
var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass!' + path.resolve('loaders/inject-global-scss')
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/i,
      loader: 'file-loader?name=/img/[name].[ext]'
    }, {
      test: /\.otf$/,
      loader: 'file-loader?name=/fonts/Brown/[name].[ext]'
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './shared')]
  },
  resolve: {
    alias: {
      $styles: path.resolve(__dirname, './common/sytles'),
      imgs: path.resolve(__dirname, './shared/images')
    }
  }
};

module.exports = config;
