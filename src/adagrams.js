import { _ } from "core-js";

const LETTER_POOL = {
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
  Z: 1
};

const POINTS = {
  1:['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2:['D','G'],
  3:['B', 'C', 'M', 'P'],
  4:['F', 'H', 'V', 'W', 'Y' ],
  5:['K'],
  8:['J','X'],
  10:['Q','Z'],
}

const ADD_EIGHT_IF_LENGTH = [7, 8, 9, 10]

const buildPileOfLetters = (dictionary) => {
  let pile = [];
  if (Object.keys(dictionary)===0) {
    return null;
  }
  for (let [x, y] of Object.entries(dictionary)) {
    for (let i = 0; i < y; i++) {
      pile.push(x);
    }
  }
  return pile;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  let hand = []
  let pile = buildPileOfLetters(LETTER_POOL);
  const random = Math.floor(Math.random() * pile.length);
  for (let i = 0; i < 10; i++) {
    hand.push(pile[random]);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {

  const hash = {};

  for (let letter of lettersInHand) {
    if (hash[letter]) {
      hash[letter] += 1;
    } else {
      hash[letter] = 1;
    }
  }

  const word = Array.from(input.toUpperCase());

  for (const letter of word) {
    if (hash[letter]) {
      hash[letter] -= 1;
    } else {
      return false;
    }
  }

  return true;

};

export const scoreWord = (word) => {
  
  if (word.length === 0){
    return 0
  }
  let points = 0;
  const upperCaseWord = word.toUpperCase();

  for (const letter of upperCaseWord) {
    for (const [x, y] of Object.entries(POINTS)) {
      if (y.includes(letter)) {
        points += parseInt(x);
      }
    }
  }

  if (ADD_EIGHT_IF_LENGTH.includes(word.length)) {
    points += 8;
  }

  return points;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  
};
