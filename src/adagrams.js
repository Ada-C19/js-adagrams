``

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

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
