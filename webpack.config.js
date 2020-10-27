const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	mode: 'development',
	optimization: {
	  minimizer: [new TerserJSPlugin({})],
	}
}