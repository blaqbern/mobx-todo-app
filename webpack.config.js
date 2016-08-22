const path = require('path')
const webpack = require('webpack')

const SRC_PATH = path.join(__dirname, 'src')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(SRC_PATH, 'index.js'),
  ],
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loaders: ['eslint'],
      include: SRC_PATH,
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: SRC_PATH,
    }, {
      test: /\.scss$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIndentName=[name]__[local]__[hash:base64:5]',
        'sass',
      ],
      include: SRC_PATH,
    }],
  },
  eslint: {
    configFile: path.join(__dirname, './.eslintrc.yml'),
  },
  plugins: [
    new webpack.DefinePlugin({ __DEV__: process.env.NODE_ENV === 'development' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
