

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};


const letterDistribution = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1,
  L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
  Y: 2, Z: 1
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
