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

const letterValues = {
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
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letter of input.toUpperCase()) {
    // Check if the letter is in the hand
    if (!lettersInHand.includes(letter)) {
      return false;
    }

    // Check if there are more of the letter in the input than the hand
    let numLetterInput = input.split("").filter((x) => x === letter).length;
    let numLetterInHand = lettersInHand.filter((x) => x === letter).length;
    if (numLetterInput > numLetterInHand) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  // if (!word) {
  //   return score;
  // }
  for (let letter of word.toUpperCase()) {
    score += letterValues[letter];
  }
  if (word.length > 6) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // let winningWord = { word: "", score: 0 };
  // for (let word of words) {
  //   if (word.scoreWord() > winningWord.score) {
  //     winningWord.word = word;
  //     winningWord.score = word.scoreWord();
  //   } else if (word.scoreWord() === winningWord.score) {
  //     if (word.length === 10) {
  //       winningWord.word = word;
  //       winningWord.score = word.scoreWord();
  //       return winningWord;
  //     }
  //     if (word.length < winningWord.word.length) {
  //       winningWord.word = word;
  //       winningWord.score = word.scoreWord();
  //     }
  //   }
  // }
  // return winningWord;
};
