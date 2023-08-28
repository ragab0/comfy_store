const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Components = require("./src/components/index");


module.exports = {
  // 01 Mode option;
  // 02 Entry;
  // 03 Output;
  // 04 Configuring module and our rules;
  // 05 Setup our plugins;

  mode: "development",
  entry: resolve(__dirname, "src/index.js"),
  output: {
    path: resolve(__dirname, "docs"),
    filename: "assets/js/[name].[contenthash].js",
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // 2. Inject our CSS into the DOM;
          MiniCssExtractPlugin.loader, // 2. Extract CSS into css files Instead of combining with the dom;
          'css-loader', // 1. Take our css and trun it 
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/imgs/[name].[hashcontent].[ext]",
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Comphy Store - Welcome!',
    //   filename: 'index.html',
    //   template: './src/index.html',
    //   templateParameters: {
    //     files: {...Components},
    //   },

    // }),
    // new HtmlWebpackPlugin({
    //   title: 'About Page',
    //   filename: 'about/index.html',
    //   template: './src/pages/about/index.html',
    //   templateParameters: {
    //     files: {...Components},
    //   },
    // }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash].css"
    })
  ]
}