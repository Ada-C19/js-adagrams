import {
  WORD_LENGTH_BONUS_POINTS, 
  WORD_LENGTH_BONUS_THRESHOLD,
  LETTER_POOL,
  POINT_VALUES
} from 'constants';


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


