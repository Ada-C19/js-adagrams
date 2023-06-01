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
  Z: 1,
};

export const drawLetters = () => {
  let fullLetterBankList = [];
  let myLetterBankList = [];

  for (const [letter, frequency] of Object.entries(LETTER_POOL)) {
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
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
