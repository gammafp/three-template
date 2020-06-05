const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const routeApp = './src'

module.exports = {
	mode: 'development',
	entry: './src/main.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	resolve: {
		extensions: ['.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: `${routeApp}/assets`,
					to: 'assets'
				},
				{
					from: './style',
					to: 'style'
				}
			]
		}
		),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/
			},
		]
	},
	watchOptions: {
		ignored: /node_modules/
	}
}
