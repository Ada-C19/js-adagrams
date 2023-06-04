Array.prototype.count = function(value) {
  let count = 0;

  this.forEach(item => {
    if (item === value) {
      count++;
    }
  });

  return count;
}

export const drawLetters = () => {

  const maxLettersInHand = 10;

  const letterPool = {
    'A': 9,
    'B': 2,
    'C': 2,
    'D': 4,
    'E': 12,
    'F': 2,
    'G': 3,
    'H': 2,
    'I': 9,
    'J': 1,
    'K': 1,
    'L': 4,
    'M': 2,
    'N': 6,
    'O': 8,
    'P': 2,
    'Q': 1,
    'R': 6,
    'S': 4,
    'T': 6,
    'U': 4,
    'V': 2,
    'W': 2,
    'X': 1,
    'Y': 2,
    'Z': 1
  };

  // Create a letter pool list to emulate a pile of letters to choose from:
  const letterPoolList = [];

  for (let letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      letterPoolList.push(letter);
    }
  }
  
  // build the player's hand using the count function
  const hand = [];

  let num = 0;
  while (num < maxLettersInHand) {
    // choose a random number from 0-97
    let i = Math.floor(Math.random() * letterPoolList.length)
    let letter = letterPoolList[i]
    if (hand.count(letter) < letterPool[letter]) {
      hand.push(letter);
      num++;
    }
  }
  
  return hand
}

// export const usesAvailableLetters = (input, lettersInHand) => {
//   // Implement this method for wave 2
// };

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
