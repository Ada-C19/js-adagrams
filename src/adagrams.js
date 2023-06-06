import { _ } from "core-js";


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
  Z: 1
};

const POINTS = {
  1:['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2:['D','G'],
  3:['B', 'C', 'M', 'P'],
  4:['F', 'H', 'V', 'W', 'Y' ],
  5:['K'],
  8:['J','X'],
  10:['Q','Z'],
}

const ADD_EIGHT_IF_LENGTH = [7, 8, 9, 10]

const buildPileOfLetters = (dictionary) => {
  let pile = [];
  if (Object.keys(dictionary)===0) {
    return null;
  }
  for (let [x, y] of Object.entries(dictionary)) {
    for (let i = 0; i < y; i++) {
      pile.push(x);
    }
  }
  return pile;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  let hand = []
  let pile = buildPileOfLetters(LETTER_POOL);
  const random = Math.floor(Math.random() * pile.length);
  for (let i = 0; i < 10; i++) {
    hand.push(pile[random]);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {

  const hash = {};

  for (let letter of lettersInHand) {
    if (hash[letter]) {
      hash[letter] += 1;
    } else {
      hash[letter] = 1;
    }
  }

  const word = Array.from(input.toUpperCase());

  for (const letter of word) {
    if (hash[letter]) {
      hash[letter] -= 1;
    } else {
      return false;
    }
  }

  return true;

};

export const scoreWord = (word) => {
  
  if (word.length === 0){
    return 0
  }
  let points = 0;
  const upperCaseWord = word.toUpperCase();

  for (const letter of upperCaseWord) {
    for (const [score, singleLetter] of Object.entries(POINTS)) {
      if (singleLetter.includes(letter)) {
        points += parseInt(score);
      }
    }
  }

  if (ADD_EIGHT_IF_LENGTH.includes(word.length)) {
    points += 8;
  }

  return points;
};

export const highestScoreFrom = (words) => {
  //Implement this method for wave 4
  // let wordsPoints = {};
  // let winners = [];
  // let result = {};

  // for (let word of words) {
  //   wordsPoints[word] = scoreWord(word);
  // }

  // let scores = Object.values(wordsPoints);

  // let max = scores[0];
  // for (let i = 0; i < scores.length; i++) {
  //   if (scores[i] > max) { max = scores[i]; }
  // }

  // for (const [word, score] of Object.entries(wordsPoints)) {
  //   if (score === max) {
  //     winners.push(word);
  //   }
  // }
  
  // if (winners.length >= 1) {
  //   for (let word of winners) {
  //     if (word.length === 10){
  //       result[word] = scoreWord(word);
  //       return result;
  //     }
  //   }
  // }

  // else {
  //   result[w]
  // }

    const pairWordPoints = {};
    let maxScore = 0;
    const semifinalist = {};
    let winner = {};
  
    for (const word of words) {
      pairWordPoints[word] = scoreWord(word);
    }
  
    maxScore = Math.max(...Object.values(pairWordPoints));
  
    for (const word in pairWordPoints) {
      if (pairWordPoints[word] === maxScore) {
        semifinalist[word] = pairWordPoints[word];
      }
    }
  
    for (const [word, score] of Object.entries(semifinalist)) {
      if (word.length === 10) {
        winner = {
          word : word, 
          score : score
        };
      return winner;
      }
    }
  
    winner = {
      word : min(Object.keys(semifinalist), word => word.length),
      score: semifinalist[min(Object.keys(semifinalist), word => word.length)]
    };
    
  return winner;
};

const min = (arr, getKey) => {
  if (arr.length === 0) {
    return undefined;
  }

  let minValue = arr[0];
  let minKey = getKey(minValue);

  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    const currentKey = getKey(currentValue);

    if (currentKey < minKey) {
      minValue = currentValue;
      minKey = currentKey;
    }
  }

  return minValue;
};
  
