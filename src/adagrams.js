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
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
