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

export const drawLetters = () => {
  // Implement this method for wave 1
  let pool = {...letterPool};
  let hand = [];

  while (hand.length < 10) {
  const letters = Object.keys(letterPool);
  const letter = letters[Math.floor(Math.random() * letters.length)];

  if (pool[letter] > 0) {
    hand.push(letter);
    pool[letter] -= 1;
  } else {
    delete pool[letter];
}
}
return hand;
};
// helper fn frequency map
const createMap = (x) => {
  const freqMap = {};
  for (let char of x) {
    if (freqMap[char] !== undefined) {
      freqMap[char] += 1

    } else {
      freqMap[char] = 1
    }
  }
  return freqMap;
};
export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  //creating a frequency map helpter fn
  let word = input.toUpperCase();
  let wordFreq = createMap(input);
  let lettersInHandFreq = createMap(lettersInHand);
  let result = false;
  for (let char of word) {
    if (lettersInHand.includes(char) && wordFreq[char] <= lettersInHandFreq[char]) {
      result = true
    } else {
      return false
    }
  }
  return result
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
