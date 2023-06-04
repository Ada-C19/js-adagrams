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

  const frequencyArray = letterFrequency.flatMap(({ letter, frequency }) =>
    Array(frequency).fill(letter)
  );
  
  const letterBank = [];
  const seenIndex = new Set();
  while (letterBank.length < 10) {
    const randomIndex = Math.floor(Math.random() * frequencyArray.length);
    if (!seenIndex.has(randomIndex)) {
      letterBank.push(frequencyArray[randomIndex]);
      seenIndex.add(randomIndex);
    }
  }  
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersFrequency = {};
  for (let letter of lettersInHand) {
    lettersFrequency[letter] = (lettersFrequency[letter] || 0) + 1;
  }
  for (let char of input) {
    if (!lettersFrequency[char]) {
      return false;
    }
    lettersFrequency[char]--;
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const pointsValue1 = set(['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']);
  const pointsValue2 = set(['D', 'G']);
  const pointsValue3 = set(['B', 'C', 'M', 'P']);
  const pointsValue4 = set(['F', 'H', 'V', 'W', 'Y']);
  const pointsValue5 = set(['K']);
  const pointsValue8 = set(['J', 'X']);
  const pointsValue10 = set(['Q', 'Z']);

};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};