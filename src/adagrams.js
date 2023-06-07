const letterPool = [
  'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
  'B', 'B',
  'C', 'C',
  'D', 'D', 'D', 'D',
  'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
  'F', 'F',
  'G', 'G', 'G',
  'H', 'H',
  'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
  'J',
  'K',
  'L', 'L', 'L', 'L',
  'M', 'M',
  'N', 'N', 'N', 'N', 'N', 'N',
  'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
  'P', 'P',
  'Q',
  'R', 'R', 'R', 'R', 'R', 'R',
  'S', 'S', 'S', 'S',
  'T', 'T', 'T', 'T', 'T', 'T',
  'U', 'U', 'U', 'U',
  'V', 'V',
  'W', 'W',
  'X',
  'Y', 'Y',
  'Z',
]

const letterValues = {
  A: 1, 
  B: 3, 
  C: 3, 
  D: 2, 
  E: 1, 
  F: 4, 
  G: 2, 
  H: 4, 
  I: 1, 
  J: 8, 
  K: 5, 
  L: 1, 
  M: 3, 
  N: 1, 
  O: 1, 
  P: 3, 
  Q: 10, 
  R: 1, 
  S: 1, 
  T: 1, 
  U: 1, 
  V: 4, 
  W: 4, 
  X: 8, 
  Y: 4, 
  Z: 10
}

// helper functions
export const getRandomIndex = (letterPool) => {
  const index = Math.floor(Math.random() * letterPool.length);
  return index;
};

export const drawLetters = () => {
  const hand = [];
  const copyLetterPool = Array.from(letterPool);

  for (let i=0; i < 10; ++i){
    let randomIndex = getRandomIndex(copyLetterPool);
    hand.push(copyLetterPool[randomIndex])
    copyLetterPool.splice(randomIndex, 1)
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const copyLettersInHand = Array.from(lettersInHand);
  input = input.toUpperCase();

  for(let i = 0; i < input.length; ++i){
    if (copyLettersInHand.includes(input[i])){
      let index = copyLettersInHand.indexOf(input[i]);
      copyLettersInHand.splice(index, 1);
    } else{
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  word = word.toUpperCase();

  if (word.length >= 7){
    score += 8;
  } else if (!word){
    return score
  }

  for(let letter of word){
    score += letterValues[letter];
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
