const dev = process.env.NODE_ENV !== 'production'
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const npmPackage = require('./package.json')

module.exports = {
  mode: dev ? 'development' : 'production',
  context: __dirname,
  entry: './src/js/scripts.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'dist/scripts.js'
  },
  devtool: dev ? 'cheap-module-eval-source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: dev
          ? [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 1
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          : ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader'
                  // options: { minimize: true },
                },
                'postcss-loader'
              ]
            })
      }
    ]
  },
  plugins: dev
    ? [
        new webpack.DefinePlugin({
          npmVersion: JSON.stringify(npmPackage.version),
          webpackDate: JSON.stringify(new Date().toISOString().slice(0, 10)),
          npmName: JSON.stringify(npmPackage.name),
          npmAuthorUrl: JSON.stringify(npmPackage.author.url)
        }),
        new webpack.ExtendedAPIPlugin(),
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        })
      ]
    : [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
          npmVersion: JSON.stringify(npmPackage.version),
          webpackDate: JSON.stringify(new Date().toISOString().slice(0, 10)),
          npmName: JSON.stringify(npmPackage.name),
          npmAuthorUrl: JSON.stringify(npmPackage.author.url)
        }),
        new webpack.ExtendedAPIPlugin(),
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        }),
        new ExtractTextPlugin({
          filename: 'dist/styles.css',
          allChunks: true
        }),
        new UglifyWebpackPlugin()
      ]
}
