
const LETTER_POOL = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 };

export const drawLetters = () => {

  // randomly choose a letter based on their weight
  function randomChooseLetter(LETTER_POOL) {
    const letters = Object.keys(LETTER_POOL);
    const weights = Object.values(LETTER_POOL);

    const totalWeights = weights.reduce((sum, weight) => sum + weight, 0);
    // generate a random weight between 0 to totalWeights
    const randomWeight = Math.random() * totalWeights;

    let weightSum = 0;
    // in the original weights array, find where the randomWeight fall between
    // and return the letter based on the index
    for (let i = 0; i < weights.length; i++) {
      weightSum += weights[i];
      if (randomWeight < weightSum) {
        return letters[i];
      }
    }
  }

  // check if not drawing too many letter
  // then append letter to the player's letter pool
  const randomLetters = [];
  for (let i = 0; randomLetters.length < 10; i++) {
    const randomChar = randomChooseLetter(LETTER_POOL);
    const charCount = randomLetters.filter((char) => (char === randomChar)).length;
    if (charCount < LETTER_POOL[randomChar]) {
      randomLetters.push(randomChar);
    }
  }

  return randomLetters;
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
