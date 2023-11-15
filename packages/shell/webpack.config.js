const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!react-error-boundary)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".css", ".json", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index-template.html",
    }),
    new ModuleFederationPlugin({
      name: "shell",
      library: { type: "var", name: "shell" },
      filename: "remoteEntry.js",
      // remotes: {
      //   app1: "app1",
      // },
      shared: ["react", "react-dom"],
    }),
  ],
  devServer: {
    port: 3000,
  },
};
