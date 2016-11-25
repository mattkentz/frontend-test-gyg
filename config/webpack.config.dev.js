var webpack = require('webpack');
var baseConfig = require('./webpack.config.base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = Object.create(baseConfig);
config.devtool = 'eval-source-map';
config.loaders = [
];
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
  new ExtractTextPlugin('styles.css')
];

module.exports = config;
