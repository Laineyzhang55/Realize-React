const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/index.js'
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude: /node_module/,
        use:{loader:'babel-loader'}
      }
    ]
  },
  plugin:[
    new HtmlWebpackPlugin()
  ],
  output:{
    filename:'[name].[hash:5].bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
}