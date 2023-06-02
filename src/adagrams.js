const letterDistribution = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
  N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
};



export const drawLetters = () => {
  // Implement this method for wave 1
  const letterPool = Object.keys(letterDistribution);
  const hand = [];


  for (let count = 0; count < 10; count++) {
    const randomIndex = Math.floor(Math.random() * letterPool.length);
    const letter = letterPool[randomIndex];

    if (letterDistribution[letter] > 0) {
      hand.push(letter);
      letterDistribution[letter] -= 1; 
      
    } 
    if (letterDistribution[letter] === 0) {
      letterPool.splice(randomIndex, 1);
    }
  }
  return hand;
};



export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const handLetters = [...lettersInHand]; // create a copy of lettersInhand
  for (const char of input) {
    const index = handLetters.indexOf(char);

    if (index === -1) {
      return false; // input contains a letter not present in the hand
    }
    handLetters.splice(index, 1); // remove the used letter from handLetters
  }
  return true;
};



const letterScores = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};
export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  for (const char of word.toUpperCase()) {
    score += letterScores[char];
  }
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};



export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highestScore = 0;
  let highestScoreWord = [];

  for (const word of words) {
    const score = scoreWord(word);

    if (score > highestScore) {
      highestScore = score;
      highestScoreWord = [word];
    } else if (score === highestScore) {
      highestScoreWord.push(word);
    }
    // console.log(highestScoreWord)
  };

  let minWord = highestScoreWord[0]
  let minLen = minWord.length;

  for (const word of highestScoreWord) {
    if (word.length === 10) {
      return { word, score: highestScore };
    } else if (word.length < minLen) {
      minLen = word.length;
      minWord = word;
    }
  };

  return { word: minWord, score: highestScore };
};
