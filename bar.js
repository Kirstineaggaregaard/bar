"use strict";

window.addEventListener("DOMContentLoaded", count);

// create array of 40 values
let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// const array = [];
// array.length = 40;

function count() {
  console.log("count");
  // get random numbers
  let random = Math.floor(Math.random() * 32);
  // add to the end of the array
  array.push(random);
  // remove first element in array
  array.shift();
  // set timer, to make movement and show bars
  setTimeout(setHeight, 1000);
}

function setHeight() {
  console.log("setHeight");
  // find the first bar
  for (let i = 0; i < array.length; i++) {
    let bar = document.querySelector(`#bars > div:nth-child(${i + 1})`);
    // set the height of that bar with css style
    bar.style.setProperty("--height", array[i]);
  }
  count();
}
