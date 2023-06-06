const LETTER_POOL = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
  N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1,
};

export const drawLetters = () => {
  const numLetters = 10;
  const hand = [];
  const letterPool = {...LETTER_POOL};

  for (let i = 0; i < numLetters; i++){
    const availableLetters = Object.keys(letterPool);
    const randomLetter = randomChoiceWeighted(availableLetters, Object.values(letterPool));
    hand.push(randomLetter);

    letterPool[randomLetter] --;

    if(letterPool[randomLetter] === 0){
      delete letterPool[randomLetter];
    }
  }
  return hand;
};

function randomChoiceWeighted(items, weights) {
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let randomValue = Math.random() * totalWeight;

  for (let i = 0; i < items.length; i++){
    randomValue -= weights[i];
    if (randomValue <= 0) {
      return items[i];
    }
  }
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  const hand = lettersInHand.map(letter => letter.toUpperCase());

  if (word.length > hand.length) {
    return false;
  }

  const handCopy = [...hand];

  for (let letter of word) {
    if (!handCopy.includes(letter)) {
      return false;
    }

    handCopy.splice(handCopy.indexOf(letter), 1);
  }

  return true;
};

export const scoreWord = (word) => {

};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
