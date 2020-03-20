const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/client/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(process.cwd(), 'src/client-dist')
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/client/index.html",
      filename: "index.html"
    })
  ]
};