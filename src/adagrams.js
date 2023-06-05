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
  // Implement this method for wave 1
  const drawnLetters = [];
  let count = 0;
  // weighted random implementation;
  let result = undefined;
  let total = 0;
  for (const i in LETTER_POOL){
    total += LETTER_POOL[i];
  }
  
  // loop
  // when count == 12, return drawnLetters
  
  while (count < 10){
    
      let index = Math.random() * total;
    
      for (const i in LETTER_POOL){
        const value = LETTER_POOL[i];
        if (index < value){
          result = i;
          break;
        }
        else {
          index -= value;
        }
      }
    if(!drawnLetters.includes(result)){
      drawnLetters.push(result);
      count++;
  }
  }
  return drawnLetters;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // if input[i] not in lettersInHand (for of loop)
  for (let letter of input){
    if (!lettersInHand.includes(letter)){
      return false;
    }
    else {
      lettersInHand.splice(letter, 1);
    }
  }
  return true;
  // else: pop off letters from lettersInHand
  // return true at the end!
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
