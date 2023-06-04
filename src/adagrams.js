export const drawLetters = () => {
  // Implement this method for wave 1
  const letterFrequency = [
    { letter: 'A', frequency: 9 },
    { letter: 'B', frequency: 2 },
    { letter: 'C', frequency: 2 },
    { letter: 'D', frequency: 4 },
    { letter: 'E', frequency: 12 },
    { letter: 'F', frequency: 2 },
    { letter: 'G', frequency: 3 },
    { letter: 'H', frequency: 2 },
    { letter: 'I', frequency: 9 },
    { letter: 'J', frequency: 1 },
    { letter: 'K', frequency: 1 },
    { letter: 'L', frequency: 4 },
    { letter: 'M', frequency: 2 },
    { letter: 'N', frequency: 6 },
    { letter: 'O', frequency: 8 },
    { letter: 'P', frequency: 2 },
    { letter: 'Q', frequency: 1 },
    { letter: 'R', frequency: 6 },
    { letter: 'S', frequency: 4 },
    { letter: 'T', frequency: 6 },
    { letter: 'U', frequency: 4 },
    { letter: 'V', frequency: 2 },
    { letter: 'W', frequency: 2 },
    { letter: 'X', frequency: 1 },
    { letter: 'Y', frequency: 2 },
    { letter: 'Z', frequency: 1 }
  ];

  const frequencyArray = [];
  
  for (const element of letterFrequency) {
    for (let i = 0; i < element.frequency; i++){
      frequencyArray.push(element.letter);
    }
  }
  const letterBank = [];
  const seenIndex = [];
  while (letterBank.length < 10) {
    const randomIndex = Math.floor(Math.random() * frequencyArray.length);
    if (!seenIndex.includes(randomIndex)) {
      letterBank.push(frequencyArray[randomIndex]);
      seenIndex.push(randomIndex);
    }
  }  
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandSet = new Set(lettersInHand);
  for (let char of input) {
    if (!lettersInHandSet.has(char)) {
      return false 
    }
  }
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};