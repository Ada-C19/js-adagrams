// Helper functions:
const generateLetters = () => {
  // Add all letters however many times they should appear to a new array

  const LETTER_POOL = {
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
  const letters = [];

  for (const letter in LETTER_POOL) {
    const frequency = LETTER_POOL[letter]
    for (let i = 0; i < frequency; i++) {
      letters.push(letter);
    }
  }

  return letters;
}

const shuffleLetters = (letters) => {
  return letters.sort( () => Math.random()-0.5);
}

export const drawLetters = () => {

  // Generate an array of all the letters
  let letters = generateLetters();

  // Shuffle the letters
  letters = shuffleLetters(letters);

  // The last 10 letters in the shuffled array will be the hand
  const hand = [];
  const len = letters.length

  for (let i = len - 1; i >= len - 10; i--) {
    hand.push(letters[i]);
  }

  return hand;
};

const countLetterFrequency = (sequence) => {
  const letterFrequency = {};

  for (const letter of sequence) {
    if (letter in letterFrequency) {
      letterFrequency[letter] += 1;
    } else {
      letterFrequency[letter] = 1;
    }
  }
  return letterFrequency;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Iterate through the letters in the input to check if they're in lettersInHand
  for (const letter of input) {
    if (!lettersInHand.includes(letter)) {
      return false;
    }
  }

  // Check how many times a letter occurs in the input and lettersInHand
  const frequencyWord = countLetterFrequency(input);
  const frequencyHand = countLetterFrequency(lettersInHand);

  // Compare the word frequency in the input and lettersInHand
  for (const letter of input) {
    if (frequencyWord[letter] > frequencyHand[letter]) {
      return false;
    }
  }
  return true;

};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };

// console.log(drawLetters());
// console.log(countLetterFrequency("DOG"));
console.log(usesAvailableLetters("DIAE", [
  'A', 'A', 'A', 'A',
  'D', 'I', 'A', 'I',
  'E', 'I'
] ));