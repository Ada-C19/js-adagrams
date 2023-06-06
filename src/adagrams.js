export const drawLetters = () => {
  // Implement this method for wave 1
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
  let weightedList = []
  for (let key of Object.keys(LETTER_POOL)) {
      const letterList = new Array(LETTER_POOL[key])
      letterList.fill(key,0)
      weightedList.push(...letterList)
  }
  const lettersList = [];
  const letterDrawn = {};

  while (lettersList.length <10) {
    let randomNum = weightedList[Math.floor(Math.random()*weightedList.length)];
    if (randomNum in letterDrawn){
      if (letterDrawn[randomNum] < LETTER_POOL[randomNum]) {
        letterDrawn[randomNum] +=1
      } else {
        continue
      }
    } else {
      letterDrawn[randomNum] = 1
    }
    lettersList.push(randomNum);
  }
  return lettersList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersBank = {};
  for (let letter of lettersInHand) {
    if (letter in lettersBank) {
      lettersBank[letter] +=1
    } else {
      lettersBank[letter] =1
    }
  }
  const capitialInput = input.toUpperCase();
  for (let letter of capitialInput) {
      if (lettersBank[letter] >=1) {
          lettersBank[letter] -=1
      } else {
          return false;
      }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const pointSystem ={
    'A': 1, 
    'E': 1, 
    'I': 1, 
    'O': 1, 
    'U': 1,
    'L': 1,
    'N': 1,
    'R': 1,
    'S': 1,
    'T': 1,
    'D': 2, 
    'G': 2,
    'B': 3, 
    'C': 3, 
    'M': 3, 
    'P': 3,
    'F': 4, 
    'H': 4, 
    'V': 4, 
    'W': 4, 
    'Y': 4,
    'K': 5,
    'J': 8, 
    'X': 8,
    'Q': 10,
    'Z': 10
    };
  const capitialInput = word.toUpperCase()
  let score = 0;
  for (let letter of capitialInput) {
    score += (pointSystem[letter])
  }
  if (capitialInput.length >=7 ) {
      score += 8
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highestScore = 0;
  let bestWord = words[0];
  for (let word of words) {
      let score = scoreWord(word);
      if (score > highestScore) {
          highestScore = score;
          bestWord = word;
      } else if (score === highestScore) {
          if (word.length === 10 && bestWord.length !== 10) {
              bestWord = word;
          } else if (word.length < bestWord.length && bestWord.length !== 10) {
              bestWord = word;
          }
      }
      }
  return {word: bestWord, score: highestScore};
};
