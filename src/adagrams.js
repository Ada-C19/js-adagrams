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
  let fullHand = [];
  let myHand = [];
  for (let [key, value] of Object.entries(LETTER_POOL)){
    fullHand.push(...Array(value).fill(key));
  }
  while (myHand.length < 10){
    let randomChoice = Math.floor(Math.random() * fullHand.length);
    myHand.push(fullHand[randomChoice]);
    fullHand.splice(randomChoice, 1);
  }
  return myHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let testWord = [];
  let wordDict = {};
  input.toUpperCase();

  for (let letter of input){
    if (letter in wordDict){
      ++wordDict[letter];
    } else {
      wordDict[letter] === 1;
    }
  }

  for (let [key, value] of Object.entries(lettersInHand)){
    if (input.includes(value)){
      testWord.push(value);
    }
  }
  let finalWord = testWord.join('');
  if (finalWord === input){
    return true;
  } else {
    return false;
  }
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
