export const drawLetters = () => {
  const LETTER_POOL = {A:9, B:2, C:2, D:4, E:12, F:2, G:3, H:2, I:9, J:1, K:1, L:4,  
    M:2, N:6, O:8, P:2, Q:1, R:6, S:4, T:6, U:4, V:2, W:2, X:1, Y:2, Z:1};
  
  const weightedPool = [];
  for (const [key, value] of Object.entries(LETTER_POOL)) {
    weightedPool.push(...Array(value).fill(key));
  }
  
  const hand = [];
  while (hand.length < 10) {
    const letterIndex = Math.floor(Math.random() * weightedPool.length);
    hand.push(weightedPool[letterIndex]);
    weightedPool.splice(letterIndex, 1);
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
