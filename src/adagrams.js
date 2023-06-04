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
  console.log(letterPool)

  inputArray.forEach((letter) => {
    if (letter in letterPool && letterPool[letter] > 0) {
      letterPool[letter] -= 1;
      console.log(letterPool)
    } else {
      result = false;
    }
  })

  return result;
};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
