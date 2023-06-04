import { LETTER_POOL, LETTER_COST } from './letter-bank-cost';

export const drawLetters = () => {
  let letters = [];
  for (let [letter, count] of Object.entries(LETTER_POOL)) {
    letters.push(letter.repeat(count));
  }
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = word => {
  // Implement this method for wave 3
};

export const highestScoreFrom = words => {
  // Implement this method for wave 4
};
