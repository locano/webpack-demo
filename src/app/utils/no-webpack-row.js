import {addCard} from "./add-card";

export const noWebPackRow = () => {
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
    row.appendChild(col4);
  
    var col4 = document.createElement("div");
    col4.classList.add("col-4");
    row.appendChild(col4);
  
    return row;
  }