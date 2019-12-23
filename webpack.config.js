module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: './',
		publicPath: '/dist/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					// 'eslint-loader'
				],
			},
			{
				test: /\.(scss|sass)/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
