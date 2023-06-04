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
};

export const usesAvailableLetters = (input, lettersInHand) => {

  // make input case insensitive and turn it into an array
  // so that we can use the custom count prototype on it
  input = input.toUpperCase().split('');

  // to ensure each letter is in lettersInHand and does not occur too frequently:
  for (let letter of input) {
    if (!(lettersInHand.indexOf(letter) !== -1) || (input.count(letter) > lettersInHand.count(letter))) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // minimum required length of word to qualify for a long word bonus:
  const bonusPointMinLength = 7;
  // bonus points to be awarded for words that meet the bonus minimum length:
    const bonusPoints = 8;

    const letterValues = {
      'AEIOULNRST': 1,
      'DG': 2,
      'BCMP': 3,
      'FHVWY': 4,
      'K': 5,
      'JX': 8,
      'QZ': 10
  };

  let score = 0
  if (!word) {
    return score;
  }

  word = word.toUpperCase() // make word case insensitive
  if (word.length >= bonusPointMinLength) {
    score += bonusPoints;
  }

  for (let letter of word) {
    for (let tier in letterValues) {
        if (tier.indexOf(letter) !== -1) {
          score += letterValues[tier];
        }
    }
  }
  return score;
};

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
