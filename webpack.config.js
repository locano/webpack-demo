// tomamos el directorio actual (root path) de nuestro proyecto
const path = require("path");

// Archivo de configuracion de webpack
module.exports = {
  mode: "development", // development  (nomin), prod(min)
  devtool:"none", //nos permite ver de mejor manera el codigo en nuestro output
  entry: "./src/index.js", // ubicacion de nuestro codigo fuente (donde inicia todo)
  output: {
    filename: "main.js", // nombre del archivo que deseamos generar para nuestro bundle
    path: path.resolve(__dirname, "dist"), //almacenamos nuestro output en un nuevo directorio dentro de nuestro root path
  },
  //plugin
};
