export const drawLetters = () => {
  // Implement this method for wave 1
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let weights = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1];

  let cumulativeWeight = 98;

  let hand = [];

  while (hand.length < 10) {
    let randomNumber = Math.floor(Math.random() * cumulativeWeight);
    for (let i = 0; i < letters.length; i++) {
      randomNumber -= weights[i];
      if (weights[i] === 0) {
        delete letters[i];
      }
      if (randomNumber < 0) {
        hand.push(letters[i]);  
        weights[i] -= 1;
        break;
      }
    }
  }
  return hand;
};





export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
