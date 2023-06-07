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
const LETTER_SCORE = {
    'A': 1, 
    'B': 3, 
    'C': 3, 
    'D': 2, 
    'E': 1, 
    'F': 4, 
    'G': 2, 
    'H': 4, 
    'I': 1, 
    'J': 8, 
    'K': 5, 
    'L': 1, 
    'M': 3, 
    'N': 1, 
    'O': 1, 
    'P': 3, 
    'Q': 10, 
    'R': 1, 
    'S': 1, 
    'T': 1, 
    'U': 1, 
    'V': 4, 
    'W': 4, 
    'X': 8, 
    'Y': 4, 
    'Z': 10
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
  let scoreBoard = 0;
  let bonus = 8;
  let myWord = word.toUpperCase();
  for (let letter of myWord){
    if (letter in LETTER_SCORE){
      scoreBoard += LETTER_SCORE[letter];
    }
  }
  if (myWord.length >= 7){
    scoreBoard += bonus;
  }
  return scoreBoard;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
