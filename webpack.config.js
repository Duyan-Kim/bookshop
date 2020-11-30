const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  devtool: 'eval-cheap-source-map',
  entry: {
    index: './src/index.js',
    search: './src/search.js',
    info: './src/info.js'
  },
  plugins: [
    new ESLintPlugin({ fix: true }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'info.html',
      template: 'public/info.html',
      chunks: ['info']
    })
  ],
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://book.interpark.com'
      }
    },
    hot: true
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
};
