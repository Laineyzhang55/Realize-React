# 搭建React环境、webpack、babel
## 设置项目
指定目录下创建目录
```bash
makdir realize-react
cd realize-react
```
创建保存源代码的目录,创建入口文件
```bash
mkdir src
cd src
touch index.js
```
初始化项目
```bash
npm init
```
## 设置webpack
运行以下命令安装webpack和webpack-cli
```bash
npm i webpack webpack-cli --save-dev
```
现在在package.json里面添加webpack命令
```bash
"scripts": {
  "build": "webpack --mode production"
}
```
在项目文件夹下创建webpack.config.js的配置文件，内容如下：
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  
  plugins: [
    new HtmlWebpackPlugin()
  ],
  output: {
    filename: '[name].[hash:5].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
}
```
## 设置Babel解释jsx
React组件主要是用现代JavaScript语法编写的。但是旧版浏览器无法理解ECMAScript 2015，因此我们需要将新的语法转换成浏览器可以理解的旧的语法规范。`babel-loader`为我们提供了这个功能。

`babel-loader`是负责与Babel对话的 webpack loader。同时 Babel必须配置预设（preset，预先配置好的一组插件）：
- `@babel/preset-env` 用于将现代JavaScript编译为ES5
- `@babel/preset-react` 可将JSX和其他内容编译为JavaScript
安装依赖项
```
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```
以上工具的作用是：webpack项目里当 import 一个`.jsx`文件时，使用 `babel-loader` 来处理这个文件， `babel-loader` 使用 `@babel/core` 来执行转换， 在转换的过程中使用了babel的 `@babel/preset-env`插件用于把最新的ES转换为ES5，使用 `@babel/preset-react`把 JSX转换为正常的JavaScript。
在项目根目录创建 `.babelrc` 文件，该文件的作用是 告诉 babel-core 在执行转换的时候使用如下插件：
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
修改webpack.config.js配置文件
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  + module: {
  +   rules: [
  +     {
  +       test: /\.(js|jsx)$/,
  +       exclude: /node_modules/,
  +       use: {
  +         loader: 'babel-loader'
  +       }
  +     }
  +   ]
  + },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  ...
}
```
为了使环境能正常启动，需要安装 `html-webpack-plugin` 和 `wepack-dev-server`
```
npm i --save-dev html-webpack-plugin webpack-dev-server
```
修改 package.json
```
{
  ...
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack"
  },
  ...
}

## 测试jsx
设置`./src/index.js`文件内容
```
const React = {
  createElement(...args) {
    console.log(args)
  }
};

let div = <div>hello </div>;
console.log(div);
```
执行，启动测试
```
npm run start 
```
## 参考
[babel文档](https://babeljs.io/docs/en/babel-preset-react)