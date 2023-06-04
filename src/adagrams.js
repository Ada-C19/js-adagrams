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
  const handPool = {};
  const hand = [];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  let i = 0;
  while (i < 10) {
    let randIndex = Math.floor(Math.random() * (alphabet.length));
    let randLetter = alphabet[randIndex];
    if (!hand.includes(randLetter)) {
      handPool[randLetter] = 1;
      hand.push(randLetter);
      i += 1;
    } else if (handPool[randLetter] < LETTER_POOL[randLetter]) {
      handPool[randLetter] += 1;
      hand.push(randLetter);
      i += 1;
    }
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterPool = {}
  const inputArray = input.split('');
  let result = true

  lettersInHand.forEach((letter) => {
    if (letter in letterPool) {
      letterPool[letter] += 1;
    } else {
      letterPool[letter] = 1;
    }
  })

  inputArray.forEach((letter) => {
    if (letter in letterPool && letterPool[letter] > 0) {
      letterPool[letter] -= 1;
    } else {
      result = false;
    }
  })

  return result;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreChart = {
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
    Z: 10,
  };
  const wordLen = [7, 8, 9, 10]
  const wordArray = word.toUpperCase().split('');
  let score = 0;

  wordArray.forEach((letter) => {
    score += scoreChart[letter];
  });

  if (wordLen.includes(wordArray.length)) {
    score += 8;
  }
  return score;
};

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
