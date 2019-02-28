const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	cache: true,
	mode: 'production',
	output: {
		filename: 'index.js',
		path: path.resolve(`${__dirname}`),
	},
	entry: {
		'index': ['babel-polyfill', './src.js'],
	},
	plugins: [
		new CleanWebpackPlugin('index.js'),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
	],
	optimization: {
		concatenateModules: true,
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
