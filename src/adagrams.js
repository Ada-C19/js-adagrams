// import { random } from "core-js/core/number";

const WORD_LENGTH_BONUS_THRESHOLD = 7;
const WORD_LENGTH_BONUS_POINTS = 8;
const LETTER_POOL = {
  'A': 9,
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
};

const POINT_VALUES = {
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
  let letterPoolList = generateLetterPool();
  let letterBank = [];
  for (let letter = 0; letter < 10; letter++) {
    let randomIndex = Math.floor(Math.random() * letterPoolList.length);
    letterBank.push(letterPoolList[randomIndex]);
    letterPoolList.splice(randomIndex, 1);
  }
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let letterCounts = countAvailableLetters(lettersInHand);
  input = input.toUpperCase();
  for (let letter of input) {
    if (!(letter in letterCounts) || letterCounts[letter] <= 0) {
      return false;
    }
    letterCounts[letter]--;
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  if (word.length >= WORD_LENGTH_BONUS_THRESHOLD) {
    score += WORD_LENGTH_BONUS_POINTS;
  }
  for (let letter of word) {
    score += POINT_VALUES[letter.toUpperCase()];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let wordsToCompareAndBestScore = findTopScoreAndBestWords(words);
  let currentWinner = wordsToCompareAndBestScore['wordsToCompare'][0];
  for (let word of wordsToCompareAndBestScore['wordsToCompare']) {
    if(word.length === 10) {
      return {word: word, score: wordsToCompareAndBestScore['score']};
    } else if (word.length < currentWinner.length) {
      currentWinner = word;
    }
  }
  return {word: currentWinner, score: wordsToCompareAndBestScore['score']};
};




// Helper Functions
const generateLetterPool = () => {
  let letterPoolList = [];
  for (const [letter, quantity] of Object.entries(LETTER_POOL)) {
    let count = 0;
    while (count < quantity) {
      letterPoolList.push(letter);
      count++; 
    }
  } 
  return letterPoolList;
};

const countAvailableLetters = letterBank => {
  let letterCounts = {};
  for (let letter of letterBank) {
    if (!(letter in letterCounts)) {
      letterCounts[letter] = 0;
    }
    letterCounts[letter]++;
  }
  return letterCounts;
};

const makeScoresAndWordsObject = wordList => {
  let scoresAndWords = {};
  for (let word of wordList) {
    let score = scoreWord(word);
    if (!(score in scoresAndWords)) {
      scoresAndWords[score] = [];
    }
    scoresAndWords[score].push(word);
  }
  return scoresAndWords;
};

const findTopScoreAndBestWords = wordList => {
  let scoresAndWords = makeScoresAndWordsObject(wordList);
  let highestScore = Math.max(...Object.keys(scoresAndWords));
  return {wordsToCompare: scoresAndWords[highestScore], score: highestScore};
}


