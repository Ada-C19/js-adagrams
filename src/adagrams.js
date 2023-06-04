const ALPHA = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const letterPool = {
    'A':9,
    'B':2,
    'C':2,
    'D':4,
    'E':12,
    'F':2,
    'G':3,
    'H':2,
    'I':9,
    'J':1,
    'K':1,
    'L':4,
    'M':2,
    'N':6,
    'O':8,
    'P':2,
    'Q':1,
    'R':6,
    'S':4,
    'T':6,
    'U':4,
    'V':2,
    'W':2,
    'X':1,
    'Y':2,
    'Z':1
}
const letterValue = {
    'A':1,
    'B':3,
    'C':3,
    'D':2,
    'E':1,
    'F':4,
    'G':2,
    'H':4,
    'I':1,
    'J':8,
    'K':5,
    'L':1,
    'M':3,
    'N':1,
    'O':1,
    'P':3,
    'Q':10,
    'R':1,
    'S':1,
    'T':1,
    'U':1,
    'V':4,
    'W':4,
    'X':8,
    'Y':4,
    'Z':10
}

export const drawLetters = () => {
  // Implement this method for wave 1
  const hand = [];
  const frequency = {};
  for (const letter in letterPool){
    frequency[letter] = 0;
  }
  while (hand.length < 10) {
    const index = Math.floor(Math.random()*ALPHA.length);
    const letter = ALPHA[index];
    if (frequency[letter] < letterPool[letter]) {
      hand.push(letter);
      frequency[letter]++;
    } else {
      continue;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const helper = (word) => {
    const count = {};
    for (const letter of word) {
      if (letter in count) {
        count[letter]++;
      } else {
        count[letter] = 1;
      }
    }
    return count;
  }

  const inputCount = helper(input);
  const handCount = helper(lettersInHand);
  for (const letter of input) {
    if (!lettersInHand.includes(letter) || inputCount[letter] > handCount[letter]) {
      return false; 
    }               
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let sum = 0;
  for (const letter of word) {
    sum += letterValue[letter.toUpperCase()];
  }
  if (word.length > 6) {
    sum += 8;
  }
  return sum;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordScoreList = words.map(scoreWord);

  const result = {};
  result.word = words[0];
  result.score = wordScoreList[0];

  for (let i = 1; i < words.length; i++) {
    if (wordScoreList[i] > result.score) {
      result.word = words[i]; 
      result.score = wordScoreList[i];
    } else if (wordScoreList[i] === result.score) {
      if (words[i].length >= 10 && result.word.length < 10) {
        result.word = words[i];
      } else if (words[i].length < result.word.length && result.word.length < 10) {
        result.word = words[i]; 
      }
    }
  } 
  return result;
};
