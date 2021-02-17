// src/js/script.js
/*!
 * script.js v0.0.1
 * 2021 Ludwing Ottoniel Cano Fuentes
 *
 */

createNoWeb();
createWeb();

function createNoWeb() {
  var row = document.createElement("div");
  row.classList.add("row");

  // Adding small cards
  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  newCard("Index.html", "Index page", col4);
  newCard("Style.css", "Style for index page", col4);
  newCard("Bootstrap.js", "Styling library", col4);
  newCard("Script.js", "Script element creator", col4);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  row.appendChild(col4);

  document.getElementById("structure").appendChild(row);
}

function createWeb() {
  var row = document.createElement("div");
  row.classList.add("row");

  // Adding small cards
  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  newCard("Index.html", "Index page", col4);
  newCard("Style.css", "Style for index page", col4);
  newCard("Bootstrap.js", "Styling library", col4);
  newCard("Script.js", "Script element creator", col4);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  col4.style.margin="auto";
  col4.style.textAlign="center";
  var imgWebpack = document.createElement("img");
  imgWebpack.src = "https://thumbs.gfycat.com/HighlevelWindingGemsbok-size_restricted.gif";
//   imgWebpack.width="250";
  col4.appendChild(imgWebpack);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  col4.style.margin="auto";

  newCard("app.bundle.js", "Webpack bundle with all our assets (style.css, script.js, bootstrap.css.min", col4);
  row.appendChild(col4);

  document.getElementById("structure2").appendChild(row);
}



function newCard(title, description, container) {
  
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mb-3");
    card.style.width = "350px";
    card.style.margin = "auto";
  
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = title;
  
    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = description;
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
  
    container.appendChild(card);
  }