import { LETTER_POOL, VALUE_OF_LETTERS } from "./gameConstants";
export const drawLetters = () => {
  // Implement this method for wave 1
  const poolOfLetters = {
    A: 9, N: 6, B: 2, O: 8, C: 2, P: 2, D: 4, Q: 1,
    E: 12, R: 6, F: 2, S: 4, G: 3, T: 6, H: 2, U: 4,
    I: 9, V: 2, J: 1, W: 2, K: 1, X: 1, L: 4, Y: 2,
    M: 2, Z: 1
  };

  const playerLetters = [];
  const keys = Object.keys(LETTER_POOL);
  const keysLength = keys.length;

  while (playerLetters.length < 10) {
    const randomIndex = Math.floor(Math.random() * keysLength);
    let randomLetter = keys[randomIndex];
    if (poolOfLetters[randomLetter] > 0) {
      poolOfLetters[randomLetter] -= 1;
      playerLetters.push(randomLetter);
    }
  }

  return playerLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const inputLetters = input.toUpperCase().split('');
  for (let letter of inputLetters) {
    if (!lettersInHand.includes(letter)) {
      return false;
    }

    lettersInHand.splice(lettersInHand.indexOf(letter), 1);
  }

  return true;

};
export const scoreWord = (word) => {
  // Implement this method for wave 3
  word = word.toUpperCase();
  let score = 0;

  for (let letter of word) {
    let letterValue = VALUE_OF_LETTERS[letter]
    score += letterValue;
  }
  if (word.length > 6 && word.length < 11) {
    score += 8;
  }
  return score;
};



export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
