const letterDistribution = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1,
  L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
  Y: 2, Z: 1
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

export const drawLetters = () => {
  const availableLetters = Object.keys(letterDistribution);
  const hand = [];

  for (let count = 0; count < 10; count++) {
    const randomIndex = Math.floor(Math.random() * availableLetters.length);
    const selectedLetter = availableLetters[randomIndex];

    if (letterDistribution[selectedLetter] > 0) {
      hand.push(selectedLetter);
      letterDistribution[selectedLetter] -= 1;
    }
    if (letterDistribution[selectedLetter] === 0) {
      availableLetters.splice(randomIndex, 1);
    }
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const inputWord = input.toUpperCase();
  const inputLetters = inputWord.split('');
  const letterCounts = {};
  
  for (let letter of lettersInHand) {
    letterCounts[letter] = letterCounts[letter] ? letterCounts[letter] + 1 : 1;
  }

  for (let letter of inputLetters) {
    if (!(letter in letterCounts) || letterCounts[letter] === 0) {
      return false;
    }
    letterCounts[letter]--;
  }

  return true;
};

export const scoreWord = (word) => {
  const cleanedWord = word.toUpperCase().replace(/[^A-Z]/g, '');
  let score = 0;

  for (let letter of cleanedWord) {
    score += letterScores[letter];
  }

  if (cleanedWord.length >= 7 && cleanedWord.length <= 10) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let winningWord = '';

  for (const word of words) {
    const score = scoreWord(word);

    if (score > highestScore) {
      highestScore = score;
      winningWord = word;
    } else if (score === highestScore) {
      if (winningWord.length === 10) {
        continue;
      } else if (word.length === 10) {
        highestScore = score;
        winningWord = word;
      } else if (word.length < winningWord.length) {
        highestScore = score;
        winningWord = word;
      }
    }
  }

  return { word: winningWord, score: highestScore };
};
