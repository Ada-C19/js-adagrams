import createLetterPool, { SCORECHART } from '../src/constants.js';
import _ from 'underscore';

  
export const drawLetters = () => {
  const hand = createLetterPool();
  return _.sample(hand, 10);
};


export const usesAvailableLetters = (input, lettersInHand) => {
  const wordVerification = {};

  for (let letter of lettersInHand) {
    if (letter in wordVerification) {
      wordVerification[letter] += 1;
    } else {
      wordVerification[letter] = 1;
    }
  }

  for (let letter of input) {
    const capitalizedLetter = letter.toUpperCase();

    if (!(capitalizedLetter in wordVerification) || wordVerification[letter] == 0) {
      return false;
    } else {
      wordVerification[letter] -= 1;
    }
  }
  return true;
};


export const scoreWord = (word) => {
  let score = 0;

  for (let letter of word) {
    const capitalizedLetter = letter.toUpperCase();
    score += SCORECHART[capitalizedLetter];
  }

  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};

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