"use strict";

navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".clip").innerText += ` ${clipText}`)
  );

// document.getElementsByClassName("fullscreen").addEventListener("click", () => {
//   toggleFullScreen();
// });

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }

// conLog();

// function conLog() {
//   console.log(1234);
// }

// console.log(1234);
