const config = require('./webpack.config.js');

config.mode = "development";

config.devServer = {
  historyApiFallback: true,
  port: 8080,
  liveReload: true
};

config.devtool = 'inline-source-map';

module.exports = config;