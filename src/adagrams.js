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

const LETTER_SCORES = {
  A : 1, 
  E : 1, 
  I : 1, 
  O : 1, 
  U : 1, 
  L : 1, 
  N : 1, 
  R : 1, 
  S : 1, 
  T : 1,
  D : 2, 
  G : 2,
  B : 3, 
  C : 3, 
  M : 3, 
  P : 3,
  F : 4, 
  H : 4, 
  V : 4, 
  W : 4, 
  Y : 4,
  K : 5,
  J : 8, 
  X : 8, 
  Q : 10, 
  Z : 10,
};

const makeLetterPool = () => {
  const letterPool = [];
  for (const [k, v] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < v; i++) {
      letterPool.push(k);
    }
  }

  return letterPool;
}

export const drawLetters = () => {
  const valLetterPool = makeLetterPool();
  const newLetters = [];

  for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * valLetterPool.length);
    const letter = valLetterPool[num];
    newLetters.push(letter);
    valLetterPool.splice(num, 1);
  }

  return newLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  input = input.toUpperCase()

  for (const letter of input) {
    if (lettersInHand.includes(letter)) {
      const index = lettersInHand.indexOf(letter);
      lettersInHand.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  let letterLength = 0;

  for (const letter of word.toUpperCase()) {
    if (letter in LETTER_SCORES) {
      score += LETTER_SCORES[letter];
      letterLength += 1
    }
  }

  if (letterLength >= 7) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
