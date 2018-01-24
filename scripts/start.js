'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
  createCompiler,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const config = require('../webpack.config');
const paths = require('../config/paths');


const DEFAULT_PORT = Number(process.env.PORT) || 8000;
const HOST = (process.env.HOST) || 'localhost';

function runDevServer(host, port) {
  if (port === null) {
    return;
  }
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const urls = prepareUrls(protocol, HOST, port);
  const compiler = createCompiler(webpack, config, 'test', urls);
  const serverConfig = {
    disableHostCheck: true,
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.publicPath,
    watchContentBase: true,
    hot: true,
    publicPath: config.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    https: protocol === 'https',
    host: host,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    public: urls.lanUrlForConfig
  };
  const devServer = new WebpackDevServer(compiler, serverConfig);
  devServer.listen(port, HOST, err => {
    if (err) {
      return console.log(err);
    }
    console.log('Starting the development server...\n');
    openBrowser(urls.localUrlForBrowser);
  });

  ['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
      devServer.close();
      process.exit();
    });
  });
}

runDevServer(HOST, DEFAULT_PORT);