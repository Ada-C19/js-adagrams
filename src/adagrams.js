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

const score_pool = {
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
  // Implement this method for wave 1
  let lettersList = [];
  let letterPoolCopy = {...LETTER_POOL};

  while (lettersList.length < 10) {
    const letters = Object.keys(letterPoolCopy);
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const randomLetterValue =letterPoolCopy[randomLetter];
    if (randomLetterValue > 0) {
      letterPoolCopy[randomLetter] = randomLetterValue - 1;
      lettersList.push(randomLetter);
    }
  } return lettersList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const inputUppercase = input.toUpperCase();
  let lettersInHandCopy = [...lettersInHand];

  for (let char of inputUppercase) {
    if (lettersInHandCopy.includes(char)) {
      let index = lettersInHandCopy.indexOf(char);
      lettersInHandCopy.splice(index, 1);
    } else if (!lettersInHandCopy.includes(char)) {
      return false;
    }
  } return true;
};

export const scoreWord = (word) => {
  let score = 0;

  for (let char of word.toUpperCase()) {
    score += score_pool[char];
  }
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  } return score;
  };

export const highestScoreFrom = (words) => {
  let highestScoreWord = '';
  let highestScore = 0;

  for (let word of words) {
    let wordScore = scoreWord(word);
    if (wordScore > highestScore) {
      highestScoreWord = word;
      highestScore = wordScore;
    }
  } return {'word': highestScoreWord, 'score': highestScore};
};
