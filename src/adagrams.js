import { LETTER_POOL } from './constants';

export const drawLetters = () => {
  // Implement this method for wave 1
  let lettersArr = [];
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    const newLetters = lettersArr.concat(Array(count).fill(letter));
    lettersArr = newLetters;
  }

  const hand = [];
  const usedIndices = [];
  for (let i = 0; i < 10; i++) {
    const randIndex = Math.floor(Math.random() * lettersArr.length);
    if (!usedIndices.includes(randIndex)) {
      hand.push(lettersArr[randIndex]);
      usedIndices.push(randIndex);
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
