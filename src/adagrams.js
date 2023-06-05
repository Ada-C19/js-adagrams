import { createLetterPool, SCORECHART } from '../src/constants.js';
import _, { max } from 'underscore';

  
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

export const highestScoreFrom = (words) => {
  const scoreLog = {};
  let winningWord, maxScore = 0

  for (const word of words) {
    const score = scoreWord(word);
    scoreLog[word] = score 
  }
  // console.log(scoreLog);
  // return scoreLog;

  for (const [key,value] of Object.entries(scoreLog)) {
    if (value > maxScore) {
      winningWord = key;
      maxScore = value;
    } else if (value == maxScore) {
        if (key.length == 10) {
          // console.log({word: winningWord, score: maxScore});
          return {word: winningWord, score: maxScore};
        } else if (key.length < winningWord.length) {
          winningWord = key;
          maxScore = value;
        }
    } 
  }
  // console.log({word: winningWord, score: maxScore});
  return {word: winningWord, score: maxScore};

};

// highestScoreFrom(['cat', 'family'])