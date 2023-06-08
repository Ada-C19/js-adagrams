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

let lettersArr = Object.keys(letterPool);
let lettersPool = [];
lettersArr.forEach((letter) => {
  console.log(letter);
  for (let i = 0; i < letterPool[letter]; i++) {
    lettersPool.push(letter);
  }
});
console.log(lettersPool);

export const drawLetters = () => {
  const hand = [];

  for (let i = 0; i < 10; i++) {
    // Create a list from the keys of our letter pool
    // as long as there are letters

    if (lettersPool.length > 0) {
      // Create a random index
      let randomIndex = Math.floor(
        Math.random() * Object.keys(letterPool).length
      );
      // Create a random letter from the list of letters
      // using the random index
      let selectedLetter = lettersPool[randomIndex];

      // take the randomly selected letter and add to our hand
      if (letterPool[selectedLetter] > 0) {
        hand.push(selectedLetter);
        // subtract the letter from our letter pool, decreasing count of letters
        letterPool[selectedLetter] -= 1;
      } else if (letterPool[selectedLetter] === 0) {
        delete letterPool[selectedLetter];
      }
    }

    // for (const letter in letterPool) {
    //   randomIndex -= letterPool[letter];
    //   if (randomIndex <= 0) {
    //     selectedLetter = letter;
    //     break;
    //   }
    // }

    // hand.push(selectedLetter);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // create variable to count occurrences of each letter in word
  input = input.toUpperCase();
  let input_letter_count = {};
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    input_letter_count[letter] = (input_letter_count[letter] || 0) + 1;
  }

  // create variable to count occurrences of each letter in the letter bank
  let bank_letter_count = {};
  for (let i = 0; i < lettersInHand.length; i++) {
    let letter = lettersInHand[i];
    bank_letter_count[letter] = (bank_letter_count[letter] || 0) + 1;
  }

  // compare the input_letter_count and bank_letter_count to see if input can be made
  for (let letter in input_letter_count) {
    let count = input_letter_count[letter];
    // check if not in bank_letter_count
    if (!(letter in bank_letter_count) || count > bank_letter_count[letter]) {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  let letter_values = {
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

  let score = 0;
  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    score += letter_values[letter] || 0;
  }

  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let winningWord = '';

  // check through each
  // console.log(108, words);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const score = scoreWord(word);

    if (score > highestScore) {
      highestScore = score;
      winningWord = word;
    } else if (score === highestScore) {
      if (
        winningWord.length !== 10 &&
        (word.length === 10 || word.length < winningWord.length)
      ) {
        winningWord = word;
      }
    }
  }

  return { word: winningWord, score: highestScore };
};
