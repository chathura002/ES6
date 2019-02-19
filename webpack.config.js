var webpack = require('webpack');
var path = require("path");

module.exports = {
	entry: ['babel-polyfill','./script.js'],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, "dist")
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				loader: 'babel-loader', 
				exclude: /node_modules/,
				query: {
					presets: ["env"]
				}
			},
			{
				test: /\.css$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"}
				]	
				
			},
		]
	}
}