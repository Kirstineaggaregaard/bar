"use strict";

const myArray = [];

function getRandom() {
  return Math.floor(Math.random() * 32);
}

function setHeight() {
  const random = getRandom();
  // find the first bar

  for (let i = 0; i < myArray.length; i++) {
    let bar;
    const bar = document.querySelector(`#bars > div:nth-child(${i + 1})`);
    // set the height of that bar with css style
    bar.style.setProperty("--height", myArray[i]);
  }
}

setHeight();
