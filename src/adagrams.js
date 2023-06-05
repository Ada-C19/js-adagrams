export const LETTER_POOL = {
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

export const SCORE_CHART = {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'W': 4,
  'X': 8,
  'Y': 4,
  'Z': 10
};


export const drawLetters = () => {
  let pool = { ...LETTER_POOL};
  let playersHand = [];

  for (let i = 0; i < 10; i++) {
    const letters = Object.keys(pool);
    const randomIndex = Math.floor(Math.random() * letters.length);
    const letter = letters[randomIndex];

    if (pool[letter] > 0) {
      playersHand.push(letter);
      pool[letter] -= 1;
    } else {
      delete pool[letter];
      i--;
    }
  }
  return playersHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  input = input.toUpperCase();
  
  for (const char of input) {
    if (letterCount(lettersInHand, char) <
        letterCount(input, char)) {
          return false;
      }
  }
  return true;
};

const letterCount = (lettersInHand, letter) => {
  let count = 0; 

  for (const l of lettersInHand) {
    if (l === letter) {
      count += 1;
    }
  }
  return count;
};

export const scoreWord = (word) => {
  if (word.length === 0){
    return 0;
  }

  const letterPool = {...LETTER_POOL};

  let totalScore = 0;

  for (let i = 0; i < word.length; i++){
    const letter = word[i].toUpperCase();

    if (letter in SCORE_CHART && letterPool[letter]){
      totalScore += SCORE_CHART[letter];
      letterPool[letter]--;

      if (word.length >= 7 && word.length <= 10){
        totalScore += 8 * word.length;
      }
    }
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  let highScore = 0;
  let bestWord = null;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const score = scoreWord(word);

    if (score > highScore || (score === highScore && (word.length === 10 || (bestWord && (word.length < bestWord.word.length || word.length === bestWord.word.length))))) {
      highScore = score;
      bestWord = {word, score};
    }
  }

  if (!bestWord) {
    bestWord = {word: '', score: 0};
  }

  return bestWord;
};

// for (words in highScore) {
//   let score = scoreWord(words);
//   scoredWordDict[words] = score;
// } if (words.length === 10) {
//   bestWord === (words, highScore);
// } return bestWord;

// let highScore = 0;
//   let bestWord = '';
//   let scoredWordDict = {};
