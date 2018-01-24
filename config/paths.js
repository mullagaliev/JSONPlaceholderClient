const path = require('path');
const dirname = path.join(__dirname, '..');

module.exports = {
  srcPath: path.join(dirname, 'src'),
  publicPath: path.join(dirname, 'public'),
  bundlePath: path.join(dirname, 'dist'),
  appHtml: path.join(dirname, 'public/index.html')
};
