/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

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

// Implement this method for wave 1
// export const drawLetters = () => {
//   let tenLetters = [];
//   while (tenLetters.length < 10) {
//     const keys = Object.keys(LETTER_POOL)
//     let randomLetter = keys[Math.floor(Math.random() * keys.length)];
    
//     tenLetters.push(randomLetter);  
//     for (let letter in tenLetters) {
//       if (LETTER_POOL[letter] > 0) {
//         LETTER_POOL[letter] -= 1;
//       } else {
//         tenLetters.splice(tenLetters[letter],1);
//       }
//       }
//     }
//   return tenLetters;
// }


// Implement this method for wave 2
export const usesAvailableLetters = (input, lettersInHand) => {
  let copyLettersInHand = lettersInHand;
  for (let letter of input) {
    if (copyLettersInHand.includes(letter)) {
      copyLettersInHand.splice(input[letter],1);
    } else {
      return false;
    }
  }
  return true;
};

// Implement this method for wave 3
const scoreChart = {
  "A":1,
  "E":1,
  "I":1,
  "O":1,
  "U":1,
  "L":1,
  "N":1,
  "R":1,
  "S":1,
  "T":1,
  "D":2,
  "G":2,
  "B":3,
  "C":3,
  "M":3,
  "P":3,
  "F":4,
  "H":4,
  "V":4,
  "W":4,
  "Y":4,
  "K":5,
  "J":8,
  "X":8,
  "Q":10,
  "Z":10
}
export const scoreWord = (word) => {
  let totalPoints = 0;
  if (word.length >= 7) {
    totalPoints += 8;
  }
  for (let letter of word) {
    letter = letter.toUpperCase() 
    if (scoreChart[letter]) {
      const storedPoints = scoreChart[letter];
      totalPoints += storedPoints;
      }
    }
  return totalPoints
}

// Implement this method for wave 4
export const highestScoreFrom = (words) => {
  let winningScore = 0;
  let winningWord = '';

  for (let word of words) {
    let wordScore = scoreWord(word);

    if (wordScore > winningScore) {
      winningWord = word;
      winningScore = wordScore;
    } else if (wordScore === winningScore) {
      if (word.length < winningWord.length && winningWord.length != 10) {
        winningWord = word;
      } else if (word.length === 10 && winningWord.length != 10) {
        winningWord = word;
      }
    }
  }
  return {word: winningWord, score: winningScore};
};
