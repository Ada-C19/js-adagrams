// import { create } from "core-js/core/object";
// import createLetterPool from "./constants.js";
// const require = createLetterPool(import.meta.url);
const _ = require('underscore');
// import _ from "underscore";

const LETTERQUANTITY = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

// // -----------------------------------------
// //              HELPER FUNCTION
// // -----------------------------------------

const createLetterPool = () => {
const LETTERPOOL = [];

  for (letter in LETTERQUANTITY) {
    let frequency = LETTERQUANTITY[letter]

    while (0 < frequency) {
      LETTERPOOL.push(letter);
      frequency--;
    }
  }
  return LETTERPOOL;
};

// -----------------------------------------
//              MAIN FUNCTIONS
// -----------------------------------------

// export const drawLetters = () => {
//   // Implement this method for wave 1
// };

// export const usesAvailableLetters = (input, lettersInHand) => {
//   // Implement this method for wave 2
// };

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
//   A: 9,
//   B: 2,
//   C: 2,
//   D: 4,
//   E: 12,
//   F: 2,
//   G: 3,
//   H: 2,
//   I: 9,
//   J: 1,
//   K: 1,
//   L: 4,
//   M: 2,
//   N: 6,
//   O: 8,
//   P: 2,
//   Q: 1,
//   R: 6,
//   S: 4,
//   T: 6,
//   U: 4,
//   V: 2,
//   W: 2,
//   X: 1,
//   Y: 2,
//   Z: 1,
// };