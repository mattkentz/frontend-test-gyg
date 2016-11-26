var webpack = require('webpack');
var baseConfig = require('./webpack.config.base.js');
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var ManifestPlugin = require('webpack-manifest-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = Object.create(baseConfig);
config.devtool = 'source-map';
config.entry = {
	main: path.join(__dirname, '/../src/index.js')
};
config.output = {
	path: path.join(__dirname, '/../dist'),
	filename: '[name].[chunkhash].js'
};
config.loaders = [];
config.plugins = [
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production'),
	}),
	new webpack.optimize.UglifyJsPlugin({
		compressor: {warnings: false},
	}),
	new ExtractTextPlugin('styles.[chunkhash].css'),
	new WebpackMd5Hash(),
	new ManifestPlugin({
		fileName: 'webpack-manifest.json',
		basePath: '../dist/'
	}),
	new HtmlWebpackPlugin({
		filename: '../index.html',
		template: 'src/index.template.ejs',
	})
];

module.exports = config;

