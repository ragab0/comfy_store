const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {

  // 01 Specifying the Mode option;
  mode: "development",


  // 02 Entry to let him know from where to start
  entry: {
    bundler_1: join(__dirname, "src/index.js")
  },


  // 03 Output prop;
  output: {
    path: join(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true
  },


  // 04 Configuring module and our rules that we'll use;
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, {},
    ]
  },


  // 05 Setup the plugins that we'll use them;
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App (from plugin config)",
      filename: "template.html",
      template: "src/template.html"
    })
  ],

}