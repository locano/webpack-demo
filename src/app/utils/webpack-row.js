import { addCard } from "./add-card";
export const webPackRow = () => {
  var row = document.createElement("div");
  row.classList.add("row");

  // Adding small cards
  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  addCard("Index.html", "Index page", col4);
  addCard("Style.css", "Style for index page", col4);
  addCard("Bootstrap.js", "Styling library", col4);
  addCard("Script.js", "Script element creator", col4);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  col4.style.margin = "auto";
  col4.style.textAlign = "center";
  var imgWebpack = document.createElement("img");
  imgWebpack.src =
    "https://thumbs.gfycat.com/HighlevelWindingGemsbok-size_restricted.gif";
  //   imgWebpack.width="250";
  col4.appendChild(imgWebpack);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  col4.style.margin = "auto";

  addCard(
    "app.bundle.js",
    "Webpack bundle with all our assets (style.css, script.js, bootstrap.css.min",
    col4
  );
  row.appendChild(col4);
  return row;
};
