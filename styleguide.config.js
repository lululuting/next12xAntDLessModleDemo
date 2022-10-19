const path = require('path');
module.exports = {
  title: "文档名", // 文档名
  components: 'components/**/*.{js,jsx,ts,tsx}',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/Wrapper'),
    // StyleGuideRenderer: path.join( __dirname, 'styleguide/StyleGuideRenderer')
  },
  theme: {
    color: {
      link: 'firebrick',
      linkHover: 'salmon',
      // codeComment: '#6d6d6d',
      // codePunctuation: '#999',
      // codeProperty: '#905',
      // codeDeleted: '#905',
      // codeString: '#690',
      // codeInserted: '#690',
      // codeOperator: '#9a6e3a',
      // codeKeyword: '#1673b1',
      // codeFunction: '#DD4A68',
      // codeVariable: '#e90'
    },
    // fontFamily: {
    //   base: '"Comic Sans MS", "Comic Sans", cursive'
    // }
  },
  template: {
    favicon: 'https://assets-cdn.github.com/favicon.ico'
  },
 propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath);
    return ext === '.tsx' || ext === '.ts'
      ? require('react-docgen-typescript').parse(
          filePath,
          source,
          resolver,
          handlers
        )
      : require('react-docgen').parse(source, resolver, handlers);
  },
  verbose: true, // 打印详细信息
  updateDocs(docs, file) {
    if (docs.doclets.version) {
      const version = packageFile.version
      docs.doclets.version = version
      docs.tags.version[0].description = version
    }
    return docs
  }, // 在使用 @version 时 使用 package.json 的 version
  // version: packageFile.version, // 同上 使用 package.json 的 version
  usageMode: 'expand', // 自动打开文档的缩放
  pagePerSection: true, // 是否每页一个组件显示
  styles: {
    Logo: {
      logo: {
        animation: '$blink ease-in-out 1000ms infinite'
      },
      '@keyframes blink': {
        to: { opacity: 0 }
      }
    }
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        { 
          test: /\.(tsx|ts)?$/, 
          exclude: /node_modules'/, 
          use: ['babel-loader', 'ts-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        },
      ]
    },
    resolve: {
      // 配置解析模块路径别名: 优点简写路径 缺点路径没有提示
      alias: {
        '@': path.resolve(__dirname),
        'components': path.resolve(__dirname, 'components')
      },
    },
  }
}