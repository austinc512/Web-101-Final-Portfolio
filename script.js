// "use strict";

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

// navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
//   if (result.state === "granted" || result.state === "prompt") {
//     navigator.clipboard.readText().then((text) => {
//       document.querySelector(".clip").innerText += ` ${text}`;
//     });
//   }
// });

const readBtn = document.getElementById("readButton");

readBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(
  //   document.querySelector(".clip").innerText,
  //   typeof document.querySelector(".clip").innerText
  // );
  // // Code to run when the document comes into focus
  // console.log("Document has come into focus");
  // if (document.querySelector(".clip").innerText.length === 0) {
  //   navigator.clipboard
  //     .readText()
  //     .then(
  //       (clipText) =>
  //         (document.querySelector(".clip").innerText += ` ${clipText}`)
  //     );
  // }
  navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      navigator.clipboard.readText().then((text) => {
        document.querySelector(".clip").innerText = `Contents: ${text}`;
        console.log(`function block happening`);
      });
    }
  });
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

console.log(1234);

function consonantCount(str) {
  console.log(str.match(/[aeiou]/gi));
  console.log(str.match(/[aeiou]/gi).length);
}
consonantCount("abcAeEiIoOuU");
// count aeiou

const words = ["apple", "banana", "orange", "grape", "watermelon"];

const filteredWords = words.filter((word) => /a/.test(word));

console.log(filteredWords);

// /[a-z]/gi
// /[^aeiou]/gi

const asdf = "abcAeEiIoO1u;U";
console.log(
  asdf
    .split("")
    .filter((word) => /[a-z]/.test(word))
    .filter((word) => /[^aeiou]/.test(word))
);

/*

> We have only 2 sand timers: 4 minutes and 7 minutes but we need to measure 9 minutes. How do we do it?

no eye-balling/estimating what's left in either timer

start 7
start 4

4 ends (3 remaining on 7-timer)
restart 4 

7 ends (1 remains on 4-timer)

let 4-timer finish cycle
then run 4-timer twice.

Robin's notes:

We have only 2 sand timers: 4 minutes and 7 minutes but we need to measure 9 minutes. How do we do it?

Assumptions:

No estimating what's left in either timer.

When a hg empties, the time to flip or evaluate is not relevant.

Don't always need to use both hourglasses.

Don't always have to add the results of a flip to the target time.

******************

Need 3 vars for the hourglasses and target:

hg1 is 4 mins
hg2 is 7 mins
target time is 9 minutes


flip both at the same time and stop when hg1 is empty
thats means:
	hg1 is 0 and counted 4 minutes
	hg2 has lost 4 minutes of sand, so it has 7-4 = 3 mins left

	target time is 4

flip both again
	hg1 is 0 - hg2 is 3
	so when hg2 is 0 stop again and count
	hg2 is 0 - and we counted 3 mins
	hg1 is 1

	target is 4 + 3 = 7

flip hg1 to get a 1 min count, so target is 7 + 1 = 8

Now, hg1 is 0 and hg2 is 2

flip hg2 and stop when it's empty, but don't add it to target

So start by initializing counters for hr1 and hr2 at 0;

we're going to iterate over 


at the end, there will be a sum 9

there will be some overflow in each iteration.




*/

/*


```javascript
  const myArr = [ 1, 2, 3]

  sumOfPoweredByTwo(myArr) // --> 14
```

const array1 = [1, 4, 9, 16];

make each one a power of 2



sum that array






*/
