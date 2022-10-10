// 参考 https://github.com/tientran0019/boilerplate-nextjs-antd-less
const path = require('path');
const webpack = require('webpack');
const withAntdLess = require('next-plugin-antd-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');

const antdVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, 'styles/variables.less'), 'utf8'));

module.exports = withAntdLess({
	modifyVars: {
		'hack': 'true;@import "~antd/lib/style/themes/compact.less";',
		...antdVariables,
	},
	lessVarsFilePath: './src/styles/variables.less',
	lessVarsFilePathAppendToEndOfContent: true,
	// optional https://github.com/webpack-contrib/css-loader#object
	cssLoaderOptions: {
		modules: {
			localIdentName: process.env.NODE_ENV !== 'production' ? '[folder]__[local]__[hash:4]' : '[hash:8]',
		},
	},

	nextjs: {
		localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
	},

	webpack(config) {
		return config;
	},
});