const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const plugins = [
	new UglifyJSPlugin(),
];

module.exports = {
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname),
	},
	entry: {
		'index': './src/index.js',
	},
	plugins,
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
