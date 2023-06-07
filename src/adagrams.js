const LETTER_POOL = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, 
  G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, 
  M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, 
  S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, 
  Y: 2, Z: 1,
};

const SCORE_BOARD = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4,
  G: 2, H: 4, I: 1, J: 8, K: 5, L: 1,
  M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1,
  S: 1, T: 1, U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10,
};


export const drawLetters = () => {
  let letterArray = Object.keys(LETTER_POOL);
  let tempLetters = {};
  let lettersInHand = [];

  while (lettersInHand.length < 10) {
    let newNum = Math.floor(Math.random() * (26 + 1));
    let currentLetter = letterArray[newNum];
    if (currentLetter === undefined) {
      continue;
    }
    else if (!(currentLetter in tempLetters)) {
      tempLetters[currentLetter] = 1;
      lettersInHand.push(currentLetter);
    }
    else if (currentLetter in tempLetters) {
      if (tempLetters[currentLetter] < LETTER_POOL[currentLetter]) {
        tempLetters[currentLetter] += 1;
        lettersInHand.push(currentLetter);
      }
    }
    else {
      continue;
    }
  }
  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let tempLetters = getNewObject(lettersInHand);
  let inputObject = getNewObject(input);
  for (let i = 0; i < input.length; i++) {
    let currentLetter = input[i];
    if (currentLetter in tempLetters) {
      if (inputObject[currentLetter] <= tempLetters[currentLetter]) {
        continue;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  return true;
};

const getNewObject = (letters) => {
  let newObject = {}
  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    if (!(currentLetter in newObject)) {
      newObject[currentLetter] = 1;
    }
    else {
      newObject[currentLetter] += 1;
    }
  }
  return newObject;
};

export const scoreWord = (word) => {
  let score = 0;
  let capsWord = word.toUpperCase();
  
  for (let i = 0; i < word.length; i++) {
    if (word === "") {
      return 0;
    }
    let currentLetter = capsWord[i];
    score += SCORE_BOARD[currentLetter];
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let scoreArray = getScoreArray(words);
  let highScore = getHighScore(scoreArray);
  let potentialWinners = getPotentialWinners(words, scoreArray, highScore);
  let tenLetterWinner = checkForTen(potentialWinners);
  if (tenLetterWinner) {
    return {"word": tenLetterWinner, "score": highScore};
  }
  else {
    let lengthArray = getLengthArray(potentialWinners);
    let tieBreaker = getTieBreaker(potentialWinners, lengthArray);
    return {"word": tieBreaker, "score": highScore};
  }
};

const getScoreArray = (words) => {
  let scoreArray = []
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let currentScore = scoreWord(currentWord);
    scoreArray.push(currentScore);
  }
  return scoreArray;
};

const getHighScore = (scoreArray) => {
  let highScore = Math.max(...scoreArray);
  return highScore;
};

const getPotentialWinners = (words, scoreArray, highScore) => {
  let potentialWinners = [];
  for (let i = 0; i < scoreArray.length; i++) {
    let winner = scoreArray[i];
    let winningWord = words[i];
    if (winner === highScore) {
      potentialWinners.push(winningWord);
    }
  }
  return potentialWinners;
};

const checkForTen = (potentialWinners) => {
  for (let i = 0; i < potentialWinners.length; i++) {
    let currentWord = potentialWinners[i];
    if (currentWord.length === 10) {
      return currentWord;
    }
  }
};

const getLengthArray = (potentialWinners) => {
  let lengthArray = []
  for (let i = 0; i < potentialWinners.length; i++) {
    let currentWord = potentialWinners[i].length;
    lengthArray.push(currentWord);
  }
  return lengthArray;
};

const getTieBreaker = (potentialWinners, lengthArray) => {
  for (let i = 0; i < lengthArray.length; i++) {
    let currentWord = potentialWinners[i];
    let shortestLength = Math.min(...lengthArray);
    if (currentWord.length === shortestLength) {
      return currentWord;
    }
  }
};

// const LETTER_POOL = {
//   A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, 
//   G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, 
//   M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, 
//   S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, 
//   Y: 2, Z: 1,
// };

// const SCORE_BOARD = {
//   A: 1, B: 3, C: 3, D: 2, E: 1, F: 4,
//   G: 2, H: 4, I: 1, J: 8, K: 5, L: 1,
//   M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1,
//   S: 1, T: 1, U: 1, V: 4, W: 4, X: 8,
//   Y: 4, Z: 10,
// };


// export const drawLetters = () => {
//   let letterArray = Object.keys(LETTER_POOL);
//   let tempLetters = {};
//   let lettersInHand = [];

//   while (lettersInHand.length < 10) {
//     let newNum = Math.floor(Math.random() * (26 + 1));
//     let currentLetter = letterArray[newNum];
//     if (currentLetter === undefined) {
//       continue;
//     }
//     else if (!(currentLetter in tempLetters)) {
//       tempLetters[currentLetter] = 1;
//       handSelection.push(currentLetter);
//     }
//     else if (currentLetter in tempLetters) {
//       if (tempLetters[currentLetter] < LETTER_POOL[currentLetter]) {
//         tempLetters[currentLetter] += 1;
//         lettersInHand.push(currentLetter);
//       }
//     }
//     else {
//       continue;
//     }
//   }
//   return lettersInHand;
// };

// export const usesAvailableLetters = (input, lettersInHand) => {
//   let tempLetters = getNewObject(lettersInHand);
//   let inputObject = getNewObject(input);
//   for (let i = 0; i < input.length; i++) {
//     let currentLetter = input[i];
//     if (currentLetter in tempLetters) {
//       if (inputObject[currentLetter] <= tempLetters[currentLetter]) {
//         continue;
//       }
//       else {
//         return false;
//       }
//     }
//     else {
//       return false;
//     }
//   }
//   return true;
// };

// const getNewObject = (letters) => {
//   let newObject = {}
//   for (let i = 0; i < letters.length; i++) {
//     let currentLetter = letters[i];
//     if (!(currentLetter in newObject)) {
//       newObject[currentLetter] = 1;
//     }
//     else {
//       newObject[currentLetter] += 1;
//     }
//   }
//   return newObject;
// };

// export const scoreWord = (word) => {
//   let score = 0;
//   let capsWord = word.toUpperCase();
  
//   for (let i = 0; i < word.length; i++) {
//     if (word === "") {
//       return 0;
//     }
//     let currentLetter = capsWord[i];
//     score += SCORE_BOARD[currentLetter];
//   }
//   if (word.length >= 7) {
//     score += 8;
//   }
//   return score;
// };

// export const highestScoreFrom = (words) => {
//   let scoreArray = getScoreArray(words);
//   let highScore = getHighScore(scoreArray);
//   let potentialWinners = getPotentialWinners(words, scoreArray, highScore);
//   let tenLetterWinner = checkForTen(potentialWinners);
//   if (tenLetterWinner) {
//     return {"word": tenLetterWinner, "score": highScore};
//   }
//   else {
//     let lengthArray = getLengthArray(potentialWinners);
//     let tieBreaker = getTieBreaker(potentialWinners, lengthArray);
//     return {"word": tieBreaker, "score": highScore};
//   }
// };

// const getScoreArray = (words) => {
//   let scoreArray = []
//   for (let i = 0; i < words.length; i++) {
//     let currentWord = words[i];
//     let currentScore = scoreWord(currentWord);
//     scoreArray.push(currentScore);
//   }
//   return scoreArray;
// };

// const getHighScore = (scoreArray) => {
//   let highScore = Math.max(...scoreArray);
//   return highScore;
// };

// const getPotentialWinners = (words, scoreArray, highScore) => {
//   let potentialWinners = [];
//   for (let i = 0; i < scoreArray.length; i++) {
//     let winner = scoreArray[i];
//     let winningWord = words[i];
//     if (winner === highScore) {
//       potentialWinners.push(winningWord);
//     }
//   }
//   return potentialWinners;
// };

// const checkForTen = (potentialWinners) => {
//   for (let i = 0; i < potentialWinners.length; i++) {
//     let currentWord = potentialWinners[i];
//     if (currentWord.length === 10) {
//       return currentWord;
//     }
//   }
// };

// const getLengthArray = (potentialWinners) => {
//   let lengthArray = []
//   for (let i = 0; i < potentialWinners.length; i++) {
//     let currentWord = potentialWinners[i].length;
//     lengthArray.push(currentWord);
//   }
//   return lengthArray;
// };

// const getTieBreaker = (potentialWinners, lengthArray) => {
//   for (let i = 0; i < lengthArray.length; i++) {
//     let currentWord = potentialWinners[i];
//     let shortestLength = Math.min(...lengthArray);
//     if (currentWord.length === shortestLength) {
//       return currentWord;
//     }
//   }
// };
