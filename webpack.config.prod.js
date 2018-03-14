var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob-all')
var PurifyCSSPlugin= require('purifycss-webpack'); 

module.exports = {
  entry: [
    './src/js/index.jsx',
    './src/css/styles.scss'
  ],
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js',
  },

  //watch: true,

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ["transform-object-rest-spread", ]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ["transform-object-rest-spread", ]
          }
        }
      },
      {
        test:/\.css$/,
        use: ExtractTextPlugin.extract({
          use: [ 
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            }
          ]
        })
      },
      {
        test:/\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [ 
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },

  resolve: {
    extensions:['.js', '.jsx']
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '../css/styles.css'
    }),
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, 'dist/index.html'),
        path.join(__dirname, 'src/js/*.js')
      ])
    })
  ]
};