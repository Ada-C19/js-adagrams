import { LETTER_POOL, LETTER_POINTS } from './constants';

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
  input = input.toUpperCase();
  const handLettersFreq = {}
  for (let i = 0; i < lettersInHand.length; i++) {
    if (lettersInHand[i] in handLettersFreq) {
      handLettersFreq[lettersInHand[i]] += 1;
    } else {
      handLettersFreq[lettersInHand[i]] = 1;
    }
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] in handLettersFreq && handLettersFreq[input[i]] > 0) {
      handLettersFreq[input[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  word = word.toUpperCase();
  let score = 0;
  if (word.length >= 7 && word.length <= 10) {
    score = 8;
  } 

  for (let i = 0; i < word.length; i++) {
    score += LETTER_POINTS[word[i]];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
