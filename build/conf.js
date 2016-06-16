var path = require('path');

var pathBuild = path.resolve(__dirname, '..', 'dist', 'assets');

module.exports = {
  'webpackDevServer' : {
    'port': process.env.PORT || 3000
  },
  'paths': {
    'build': pathBuild
  }
}
