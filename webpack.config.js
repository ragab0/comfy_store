const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // 2. Inject our CSS into the DOM;
          MiniCssExtractPlugin.loader, // 2. Extract CSS into css files Instead of combining with the dom;
          'css-loader', // 1. Take our css and trun it 
        ],
      },
      {
        test: /\.jsx$/,
        use: 'html-loader'
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
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'Comphy Store - Welcome!',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'About Page',
      filename: 'about/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'Products Page',
      filename: 'products/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css"
    })
  ]
}