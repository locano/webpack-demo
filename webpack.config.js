// tomamos el directorio actual (root path) de nuestro proyecto
const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// Archivo de configuracion de webpack
module.exports = {
  mode: "development", // development  (nomin), prod(min)
  devtool: false, //nos permite ver de mejor manera el codigo en nuestro output
  entry: {
    template:"./src/index.js",
    home:"./src/home.js",
    test:"./src/test.js"
  }, // ubicacion de nuestro codigo fuente (donde inicia todo)
  output: {
    filename: "[name].bundle.js", // nombre del archivo que deseamos generar para nuestro bundle
    path: path.resolve(__dirname, "dist"), //almacenamos nuestro output en un nuevo directorio dentro de nuestro root path
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({ filename: "main.bundle.css" }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "template.html",
      chunks:["template"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/test.html",
      filename: "test.html",
      chunks:["test"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/home.html",
      filename: "home.html",
      chunks:["home"]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader, //3. Inject styles into a new file
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
};
