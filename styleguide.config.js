const path = require('path');
module.exports = {
    components: 'components/**/*.js',
    styleguideComponents: {
      Wrapper: path.join(__dirname, 'styleguide/Wrapper')
    },
    theme: {
      color: {
        link: 'firebrick',
        linkHover: 'salmon'
      },
      fontFamily: {
        base: '"Comic Sans MS", "Comic Sans", cursive'
      }
    },
    styles: {
      Logo: {
        // the LogoRenderer component
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
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
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
      }
    }
  }