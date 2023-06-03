const letterPool = {
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
const vowels = ["A", "E", "I", "O", "U", "Y"];

export const drawLetters = () => {
  // Build list of all the letters
  const allLetters = [];
  for (const [letter, num] of Object.entries(letterPool)) {
    for (let i = 0; i < num; ++i) {
      allLetters.push(letter);
    }
  }

  // build the hand making sure at least 3 letters are vowels
  let hand = [];
  let vowelCount = 0;
  while (vowelCount < 3) {
    hand = [];
    for (let i = 0; i < 10; ++i) {
      let randomLetter =
        allLetters[Math.floor(Math.random() * allLetters.length)];

      // make sure we dont exceed the number allowed for that letter
      let randomLetterCountInHand = hand.filter(
        (x) => x === randomLetter
      ).length;
      while (randomLetterCountInHand === letterPool[randomLetter]) {
        randomLetter =
          allLetters[Math.floor(Math.random() * allLetters.length)];
        randomLetterCountInHand = hand.filter((x) => x === randomLetter).length;
      }
      // add the letter to the hand
      hand.push(randomLetter);
    }
    // makes sure vowel_count is updated before we go through the loop again.
    vowelCount = 0;
    for (let vowel of vowels) {
      vowelCount = vowelCount + hand.filter((x) => x === vowel).length;
    }
  }
  console.log("HAND: ", hand);
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
