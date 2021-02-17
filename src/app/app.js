// src/js/script.js
/*!
 * script.js v0.0.1
 * 2021 Ludwing Ottoniel Cano Fuentes
 *
 */

import {noWebPackRow} from "./utils/no-webpack-row";
import {webPackRow} from "./utils/webpack-row";

export const start = () => {
  document.getElementById("structure").appendChild(noWebPackRow());
  document.getElementById("structure2").appendChild(webPackRow());
};

