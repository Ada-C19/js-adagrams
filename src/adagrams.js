const scoreChart = {
  'A': 1, 
  'B': 3, 
  'C': 3, 
  'D': 2, 
  'E': 1, 
  'F': 4, 
  'G': 2, 
  'H': 4, 
  'I': 1, 
  'J': 8, 
  'K': 5, 
  'L': 1, 
  'M': 3, 
  'N': 1, 
  'O': 1, 
  'P': 3, 
  'Q': 10, 
  'R': 1, 
  'S': 1, 
  'T': 1, 
  'U': 1, 
  'V': 4, 
  'W': 4, 
  'X': 8, 
  'Y': 4, 
  'Z': 10
}; 

/* 
Helper function to create a pool of letters used to 
create user's hand. 
Letters are drawn in respect to amount availability per letter
*/
const getNewLetterPool = () => {
  const letterPool = {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
} 
return letterPool;
}; 

// --- Wave 1 --- 

/* Helper function to generate random weights */
const randomWeightedChoice = (letterPool) => {

  const choices = Object.keys(letterPool);
  const weights = Object.values(letterPool);

  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0); 
  let randomWeight = Math.floor(Math.random() * totalWeight); 

  for (let i = 0; i < choices.length; i++) {
    randomWeight -= weights[i]; 
    if (randomWeight < 0) {
      return choices[i];
    }
  }
  return null;
}

export const drawLetters = () => {
  let letterPool = getNewLetterPool(); 
  const hand = [];

  while (hand.length < 10) {

    const generateLetter = randomWeightedChoice(letterPool);
    hand.push(generateLetter);

    letterPool[generateLetter] -= 1;

    if (letterPool[generateLetter] === 0) {
      delete letterPool[generateLetter]; 
    }
  }

  return hand; 
  };
