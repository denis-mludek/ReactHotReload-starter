var webpack = require('webpack');
var conf = require('./conf')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:' + conf.webpackDevServer.port,
    'webpack/hot/only-dev-server',
    './app/index.jsx'
  ],

  output: {
    path: conf.paths.build,
    publicPath: '/assets/',
    filename: 'app.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.jsx$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192' },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devtool: 'inline-source-map'
};
