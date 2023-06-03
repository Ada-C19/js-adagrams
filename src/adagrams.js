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
  let letterArray = Object.keys(LETTER_POOL)
  let tempLetters = {}
  let handSelection = []

  while (handSelection.length < 10) {
    let newNum = Math.floor(Math.random() * (26 + 1));
    let currentLetter = letterArray[newNum];
    if (currentLetter === undefined) {
      continue;
    }
    else if (!(currentLetter in tempLetters)) {
      tempLetters[currentLetter] = 1;
      handSelection.push(currentLetter);
    }
    else if (currentLetter in tempLetters) {
      if (tempLetters[currentLetter] < LETTER_POOL[currentLetter]) {
        tempLetters[currentLetter] += 1;
        handSelection.push(currentLetter);
      }
    }
    else {
      continue;
    }
  }
  return handSelection
};

// export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
// };

// export const scoreWord = (word) => {
  // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
// };
