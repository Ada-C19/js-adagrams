const letterPool = {
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

const scoreChart = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
  }


export const drawLetters = () => {
  let fullLetterBankList = [];
  let myLetterBankList = [];

  for (const [letter, frequency] of Object.entries(letterPool)) {
    for (let i = 0; i < frequency; i++) {
      fullLetterBankList.push(letter);
    }
  }

  while (myLetterBankList.length < 10) {
    let randomLetter = fullLetterBankList[Math.floor(Math.random() * fullLetterBankList.length)];
    myLetterBankList.push(randomLetter);
    fullLetterBankList = fullLetterBankList.filter(letter => letter !== randomLetter);
  }
  return myLetterBankList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let inputMap = {}
  let lettersInHandMap = {}

  for (let letter of input) {
    if (inputMap[letter] === undefined) {
      inputMap[letter] = 1;
    } else {
      inputMap[letter] ++;
    }
  }

  for (let letter of lettersInHand) {
    if (lettersInHandMap[letter] === undefined) {
      lettersInHandMap[letter] = 1;
    } else {
      lettersInHandMap[letter] ++;
    }
  }

  input = input.toUpperCase();
  for (let letter of input) {
    if (!lettersInHand.includes(letter)) {
      return false;
    }
    if (inputMap[letter] > lettersInHandMap[letter]){
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  word = word.toUpperCase();
  let score = 0;

  if (word.length >= 7) {
    score += 8;
  }

  for (let letter of word) {
    if (!Object.prototype.hasOwnProperty.call(scoreChart, letter)) {
      score += 0
    } else {
      score += scoreChart[letter];
    }
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
