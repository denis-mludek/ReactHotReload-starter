var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var conf = require('./conf')

new WebpackDevServer(
  webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      chunks: false,
      children: false
    }
  }
).listen( conf.webpackDevServer.port, 'localhost', function (err) {
  if (err) {
    console.warn("Oops, there is an error ! ", err);
  }
  console.log('Listening at localhost:', conf.webpackDevServer.port);
});
