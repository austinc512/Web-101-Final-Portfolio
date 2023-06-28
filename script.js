"use strict";

// navigator.clipboard
//   .readText()
//   .then(
//     (clipText) => (document.querySelector(".clip").innerText += ` ${clipText}`)
//   );

// const inFocus = document.getElementById("html");
// console.log(inFocus);
// // console.log(document.getElementsByTagName("html"));
// inFocus.addEventListener("focus", function () {
//   console.log(`document is in focus`);
// });

navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    navigator.clipboard.readText().then((text) => {
      document.querySelector(".clip").innerText += ` ${text}`;
    });
  }
});

// console.log(navigator.clipboard);

// window.addEventListener("focus", function (event) {
//   console.log(
//     document.querySelector(".clip").innerText,
//     typeof document.querySelector(".clip").innerText
//   );
//   // Code to run when the document comes into focus
//   console.log("Document has come into focus");
//   if (document.querySelector(".clip").innerText.length === 0) {
//     navigator.clipboard
//       .readText()
//       .then(
//         (clipText) =>
//           (document.querySelector(".clip").innerText += ` ${clipText}`)
//       );
//   }
// });

// Uncaught (in promise) DOMException: Document is not focused.
// how to make script run ONLY when document in focus?

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
