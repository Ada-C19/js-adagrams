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

const SCORE_BOARD = {
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

export const drawLetters = () => {
  let letterArray = Object.keys(LETTER_POOL)
  let tempLetters = {}
  let lettersInHand = []

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
  return lettersInHand
};



export const usesAvailableLetters = (input, lettersInHand) => {
  let tempLetters = getLettersInHandObject(lettersInHand);
  let inputObject = getInputObject(input);
  for (let n = 0; n < input.length; n++) {
    let currentLetter = input[n];
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

const getLettersInHandObject = (lettersInHand) => {
  let tempLetters = {};
  for (let i = 0; i < lettersInHand.length; i++) {
    let letter = lettersInHand[i];
    if (!(letter in tempLetters)) {
      tempLetters[letter] = 1;
    }
    else {
      tempLetters[letter] += 1;
    }
  }
  return tempLetters;
};

const getInputObject = (input) => {
  let capsInput = input.toUpperCase();
  let inputObject = {}
  for (let n = 0; n < capsInput.length; n++) {
    let currentLetter = capsInput[n];
    if (!(currentLetter in inputObject)) {
      inputObject[currentLetter] = 1;
    }
    else {
      inputObject[currentLetter] += 1;
    }
  }
  return inputObject
};


export const scoreWord = (word) => {
  let score = 0;
  let capsWord = word.toUpperCase();
  
  for (let i = 0; i < word.length; i++) {
    let currentLetter = capsWord[i];
    score += SCORE_BOARD[currentLetter];
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score
};

export const highestScoreFrom = (words) => {
  let scoreArray = getScoreArray(words);
  let highScore = getHighScore(scoreArray);
  let potentialWinners = getHighValuePairs(words, scoreArray, highScore);
  let tenLetterWinner = checkForTen(potentialWinners);
  if (tenLetterWinner) {
    return {"word": tenLetterWinner, "score": highScore};
  }
  else {
    let lengthArray = getLengths(potentialWinners);
    let tieBreaker = getTieBreaker(potentialWinners, lengthArray);
    return {"word": tieBreaker, "score": highScore};
  }
};

const getScoreArray = (words) => {
  let scoreArray = []
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let currentScore = scoreWord(currentWord);
    scoreArray.push(currentScore)
  }
  return scoreArray;
};

const getHighScore = (scoreArray) => {
  let highScore = Math.max(...scoreArray)
  return highScore;
};

const getHighValuePairs = (words, scoreArray, highScore) => {
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

const getLengths = (potentialWinners) => {
  let lengthArray = []
  for (let i = 0; i < potentialWinners.length; i++) {
    let currentWord = potentialWinners[i].length;
    lengthArray.push(currentWord);
  }
  return lengthArray
};


const getTieBreaker = (potentialWinners, lengthArray) => {
  for (let i = 0; i < lengthArray.length; i++) {
    let currentWord = potentialWinners[i];
    // let currentLength = lengthArray[i];
    let shortestLength = Math.min(...lengthArray);
    if (currentWord.length === shortestLength) {
      return currentWord;
    }
  }
};


// export const drawLetters = () => {
//   let letterArray = Object.keys(LETTER_POOL)
//   let tempLetters = {}
//   let lettersInHand = []

//   while (lettersInHand.length < 10) {
//     let newNum = Math.floor(Math.random() * (26 + 1));
//     let currentLetter = letterArray[newNum];
//     if (currentLetter === undefined) {
//       continue;
//     }
//     else if (!(currentLetter in tempLetters)) {
//       tempLetters[currentLetter] = 1;
//       lettersInHand.push(currentLetter);
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
//   return lettersInHand
// };

// export const usesAvailableLetters = (input, lettersInHand) => {
//   let tempLetters = getLettersInHandObject(lettersInHand);
//   let inputObject = getInputObject(input);
//   for (let n = 0; n < input.length; n++) {
//     let currentLetter = input[n];
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

// export const scoreWord = (word) => {
//   let score = 0;
//   let capsWord = word.toUpperCase();
  
//   for (let i = 0; i < word.length; i++) {
//     let currentLetter = capsWord[i];
//     score += SCORE_BOARD[currentLetter];
//   }
//   if (word.length >= 7) {
//     score += 8;
//   }
//   return score
// };

// export const highestScoreFrom = (words) => {
//   let scoreArray = getScoreArray(words);
//   let highScore = getHighScore(scoreArray);
//   let potentialWinners = getHighValuePairs(words, scoreArray, highScore);
//   let lengthArray = getLengths(potentialWinners);
//   let tieBreaker = getTieBreaker(potentialWinners, lengthArray);
//   return {"word": tieBreaker, "score": highScore};
// };




// const getLettersInHandObject = (lettersInHand) => {
//   let tempLetters = {};
//   for (let i = 0; i < lettersInHand.length; i++) {
//     let letter = lettersInHand[i];
//     if (!(letter in tempLetters)) {
//       tempLetters[letter] = 1;
//     }
//     else {
//       tempLetters[letter] += 1;
//     }
//   }
//   return tempLetters;
// };

// const getInputObject = (input) => {
//   let capsInput = input.toUpperCase();
//   let inputObject = {}
//   for (let n = 0; n < capsInput.length; n++) {
//     let currentLetter = capsInput[n];
//     if (!(currentLetter in inputObject)) {
//       inputObject[currentLetter] = 1;
//     }
//     else {
//       inputObject[currentLetter] += 1;
//     }
//   }
//   return inputObject
// };

// const getScoreArray = (words) => {
//   let scoreArray = []
//   for (let i = 0; i < words.length; i++) {
//     let currentWord = words[i];
//     let currentScore = scoreWord(currentWord);
//     scoreArray.push(currentScore)
//   }
//   return scoreArray;
// };

// const getHighScore = (scoreArray) => {
//   let highScore = Math.max(...scoreArray)
//   return highScore;
// };

// const getHighValuePairs = (words, scoreArray, highScore) => {
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


// const getLengths = (potentialWinners) => {
//   let lengthArray = []
//   for (let i = 0; i < potentialWinners.length; i++) {
//     let currentWord = potentialWinners[i].length;
//     lengthArray.push(currentWord);
//   }
//   return lengthArray
// };

// const getTieBreaker = (potentialWinners, lengthArray) => {
//   for (let i = 0; i < lengthArray.length; i++) {
//     let currentWord = potentialWinners[i];

//     let shortestLength = Math.min(...lengthArray);
//     if (currentWord.length === 10) {
//       return currentWord;
//       break;
//     }
//     else if (currentWord.length === shortestLength) {
//       return currentWord;
//       // break;
//     }
//   }
// };
