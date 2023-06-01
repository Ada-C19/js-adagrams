export const drawLetters = () => {
  const letterBank = {
    A:9, B:2, C:2, D:4, E:12, F:2, G:3, H:2, I:9, J:1, K:1, L:4, M:2, N:6, O:8, P:2, Q:1, R:6, S:4, T:6, U:4, V:2, W:2, X:1, Y:2, Z:1
  };
  
  // Create an array of all available letters
  const drawPile = [];
  for (const letter in letterBank) {
    let letters = Array(letterBank[letter]).fill(letter);
    drawPile.push(...letters);
  }
 
  // Draw letters from the pile
  const hand = [];
  for (let i = 98; i > 88; i--) {
    // Generate a random number as index
    const randIdx = Math.floor(Math.random() * i);
    // Select the letter at randIdx and remove from drawPile
    const randLetter = drawPile.splice(randIdx, 1);
    // Add letter to hand
    hand.push(randLetter[0]);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
