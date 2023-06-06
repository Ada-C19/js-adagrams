// import { random } from "core-js/core/number";

export const drawLetters = () => {
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

  let copy = { ...LETTER_POOL }
  const tenLetters = [];

  while (tenLetters.length < 10) {
    let randomNum = Math.floor(Math.random() * Object.keys(copy).length);
    let randomLetter = Object.keys(copy)[randomNum];

    if (copy[randomLetter] > 0) {
      tenLetters.push(randomLetter);
      copy[randomLetter]--
    }
  }

  return tenLetters

};

export const usesAvailableLetters = (input, lettersInHand) => {
  const map = {};
  for (let letter of lettersInHand) {
    if (map[letter]) {
      map[letter] += 1;
    } else {
      map[letter] = 1;
    }
  }

  for (let letter of input) {
    if (!map[letter] || map[letter] <= 0) return false;
    else {
      map[letter]--;
    }
  }
  return true;
};

export const scoreWord = (word) => {
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

  let score = 0;
  for (let letter of word.toUpperCase()) {
    score += scoreChart[letter];
  }
  if (word.length >= 7) {
    score += 8
  }
  return score
};

export const highestScoreFrom = (words) => {
  let winner;
  let score;
  let highestScore = 0;
  let winningWords = []

  for (let word of words) {
    score = scoreWord(word);

    if (score > highestScore) {
      highestScore = score;
      winningWords = [word];
    } else if (score === highestScore) {
      winningWords.push(word);
    }
  }

  for (let word of winningWords) {
    if (word.length === 10) {
      winner = word;
      break
    } else {
      winner = winningWords.reduce((shortest, word) => shortest.length < word.length ? shortest : word);
    }
  }
  return { word: winner, score: scoreWord(winner) }
}