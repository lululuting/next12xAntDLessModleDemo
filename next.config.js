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
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    // 能够在页面上经过 process.env.key 获取 value。跟webpack.DefinePlugin实现的一致
    env: {
      version: '4.1'
    },
    // 下面两个要经过 'next/config' 来读取
    // 只有在服务端渲染时才会获取的配置
    serverRuntimeConfig: {
      mySecret: 'secret',
      secondSecret: process.env.SECOND_SECRET
    },
    // 在服务端渲染和客户端渲染均可获取的配置
    publicRuntimeConfig: {
      publicFolder: '/public'
    },
	webpack(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname),
			'components': path.resolve(__dirname, 'components')
		};
		return config;
	},
});