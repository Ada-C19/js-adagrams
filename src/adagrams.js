export const drawLetters = () => {
  const letterValue = {
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
  };
  let hand = [];
  for (let letter in letterValue){
    const amount = letterValue[letter]
    
    for (let num = 0; num < amount; num++) {
      hand.push(letter);
    }
  }
  hand.sort(() => Math.random() - 0.5);

  return hand.slice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const letterFreq = {};

  // Count the frequency of letters in lettersInHand
  for (let letter of lettersInHand) {
    letterFreq[letter] = (letterFreq[letter] || 0) + 1;
  }
  
  // Check if input letters are available and not overused
  for (let letter of input) {
    const upperCaseLetter = letter.toUpperCase();
    if (!letterFreq[upperCaseLetter] || letterFreq[upperCaseLetter] === 0) {
      return false;
    } else {
      letterFreq[upperCaseLetter] -= 1;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  const letterValue = {
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
  };
  let score = 0;
  for(let letter in word) {
    score += letterValue[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
