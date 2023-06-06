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

// {
//   A: 9, 
//   B: 2, 
//   C: 2, 
//   D: 4, 
//   E: 12, 
//   F: 2, 
//   G: 3, 
//   H: 2, 
//   I: 9, 
//   J: 1, 
//   K: 1, 
//   L: 4, 
//   M: 2, 
//   N: 6, 
//   O: 8, 
//   P: 2, 
//   Q: 1, 
//   R: 6, 
//   S: 4, 
//   T: 6, 
//   U: 4, 
//   V: 2, 
//   W: 2, 
//   X: 1, 
//   Y: 2, 
//   Z: 1
// }

// helper functions
export const getRandomIndex = (letterPool) => {
  const index = Math.floor(Math.random() * letterPool.length);
  return index;
};

export const drawLetters = () => {
  const hand = [];
  const copyLetterPool = Array.from(letterPool)

  for (let i=0; i < 10; ++i){
    let randomIndex = getRandomIndex(copyLetterPool);
    hand.push(copyLetterPool[randomIndex])
    copyLetterPool.splice(randomIndex, 1)
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
