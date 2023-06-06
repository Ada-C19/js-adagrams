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
  const letterMap = {...LETTER_POOL};
  let drawn = new Array();

  for(let i = 0; i<10; i++){
      let letterBank = Object.keys(letterMap);
      let randomLetterIndex= Math.floor(Math.random()*letterBank.length);
      let randomLetter = letterBank[randomLetterIndex];
      drawn.push(randomLetter);
      letterMap[randomLetter] -= 1;
      if(letterMap[randomLetter] === 0){
          delete letterMap[randomLetter];
      }
  }
  return drawn;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let map = new Map();
  for(let i = 0; i< lettersInHand.length; i++){
    let curHandLetter = lettersInHand[i]
    map.set(curHandLetter, map.get(curHandLetter) + 1 || 1);
  } 
  for(let i = 0; i<input.length; i++){
    let curInputLetter = input[i]
    if(!lettersInHand.includes(curInputLetter))
        return false;
    map.set(curInputLetter, map.get(curInputLetter)-1)
    if(map.get(curInputLetter) < 0)
        return false;
  }
  return true;

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
