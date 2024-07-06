const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env, { mode }) => {
  console.log({ mode });

  return {
    output: {
      path: path.resolve(__dirname, "build"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
    devServer: {
      open: true,
      overlay: true,
      compress: true,
      port: 3000,
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};
