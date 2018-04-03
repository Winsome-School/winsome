module.exports = {
  entry: ['./src/js/index.jsx', './src/css/styles.scss'],
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js',
    publicPath: '/js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
<<<<<<< HEAD
              plugins: ['transform-object-rest-spread']
=======
              plugins: ["transform-object-rest-spread",]
>>>>>>> 0e2bb0bf8a7c4da622c6eee85d4f822541b0cb07
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
<<<<<<< HEAD
              plugins: ['transform-object-rest-spread']
=======
              plugins: ["transform-object-rest-spread",]
>>>>>>> 0e2bb0bf8a7c4da622c6eee85d4f822541b0cb07
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
