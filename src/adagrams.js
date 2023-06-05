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
  let total = 0;
  if (word.length > 6){
    total += 8;
  }
  const wordScores = {
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
    M : 3,
    P : 3,
    F: 4,
    H: 4,
    V: 4, 
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  };
  word = word.toUpperCase()
  for (let char of word){
    if (char in wordScores) {
        total += wordScores[char];

    }
  }
  return total;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  // for of loop
  let highestScore = 0;
  let highestWord = "";
  for (let word of words){
    let currentScore = scoreWord(word);
    if (currentScore == highestScore && word.length == 10){
        if (word[0] > highestWord[0]){
        highestScore = currentScore;
        highestWord = word;}
      else if (word.length < highestWord.length){
        highestScore = currentScore;
        highestWord = word;
      }
    }
    else if (currentScore > highestScore){
      highestScore = currentScore;
      highestWord = word;
    }
  }
  return { word: highestWord, score: highestScore };
};
