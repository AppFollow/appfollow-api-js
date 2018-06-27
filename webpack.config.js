const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	output: {
		filename: 'api-sign.min.js',
		path: path.resolve(`${__dirname}/dist`),
	},
	entry: {
		'index': './src/api-sign.js',
	},
	plugins: [
		new CleanWebpackPlugin('dist'),
		new UglifyJSPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			}
		]
	},
};
