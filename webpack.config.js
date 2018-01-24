const path = require('path');
const autoprefixer = require('autoprefixer');

const paths = {
  srcPath: path.join(__dirname, 'src'),
  publicPath: path.join(__dirname, 'public'),
  bundlePath: path.join(__dirname, 'dist')
};

module.exports = {
  entry: path.join(paths.srcPath, 'index.js'),
  output: {
    path: paths.bundlePath,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      oneOf: [
        /* Static */
        {
          test: [/\*/],
          include: paths.publicPath,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '/[name].[ext]',
          },
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '/static/media/[name].[hash:8].[ext]',
          },
        },
        /* JSX and Bable ES6 */
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        /* SASS modules */
        {
          test: /\.sass$/,
          include: paths.srcPath,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]__[local]___[hash:base64:5]"
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9',
                    ],
                    flexbox: 'no-2009',
                  }),
                  'postcss-modules-values',
                ],
              },
            },
            {
              loader: 'sass-loader'
            }
          ],
        },
        /* CSS modules */
        {
          test: /\.css$/,
          include: [paths.srcPath, ' /node_modules/'],
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9',
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          ],
        },
        {
          exclude: [/\.js$/, /\.html$/, /\.json$/],
          loader: 'file-loader',
          options: {
            name: '/static/media/[name].[hash:8].[ext]',
          },
        }
      ]
    }]
  }
};
