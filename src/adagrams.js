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
  for (const letter of input.toUpperCase()) {
    if (frequencyWord[letter] > frequencyHand[letter]) {
      return false;
    }
  }
  return true;

};

export const scoreWord = (word) => {
  let pointsTotal = 0;
  const wordUpper = word.toUpperCase();
  const SCORE_CHART = {
    "A": 1,
    "E": 1, 
    "I": 1,
    "O": 1,
    "U": 1,
    "L": 1,
    "N": 1,
    "R": 1,
    "S": 1,
    "T": 1,
    "D": 2,
    "G": 2,
    "B": 3,
    "C": 3,
    "M": 3,
    "P": 3,
    "F": 4,
    "H": 4,
    "V": 4,
    "W": 4,
    "Y": 4,
    "K": 5,
    "J": 8,
    "X": 8,
    "Q": 10,
    "Z": 10,
}
  // Check if the string is empty
  if (wordUpper.trim().length === 0) {
    return 0;
  }

  // Add up the points by looking up each letter in word in the SCORE_CHART dict
  for (const letter of wordUpper) {
    pointsTotal += SCORE_CHART[letter];
  }

  if (wordUpper.length > 6) {
    pointsTotal += 8;
  }

  return pointsTotal;
};

export const highestScoreFrom = (words) => {
  const wordMap = {};

  for (const word of words) {
    // Check if word isn't in the wordMap already, add its length and score to the map
    if (!(word in wordMap)) {
      wordMap[word] = [word.length, scoreWord(word)]
    }
  }

  // Get an array of arrays with the lenghts and scores of each word
  const lenScores = Object.values(wordMap);
  const scores = [];

  // Get just the scores and add them to the scores array
  for (let i = 0; i < lenScores.length; i++) {
    scores.push(lenScores[i][1]);
  }

  // Find the highest score 
  const highestScore = Math.max(...scores);

  // Find the lengths of words with the the highest score 
  const lengthsWithHighestScores = [];

  for (const lenScore of lenScores) {
    if (lenScore[1] === highestScore) {
      lengthsWithHighestScores.push(lenScore[0]);
    }
  }

  // Find the shortest word length with the highest score
  const shortestHighest = Math.min(...lengthsWithHighestScores);
  const winner = {
    'score': null,
    'word': null,
  };

  for (const word in wordMap) {
    const lenScore = wordMap[word];
    const length = lenScore[0];
    const score = lenScore[1];

    if (score === highestScore && length === 10) {
      winner['score'] = score;
      winner['word'] = word;
      return winner;
    }

    if (score === highestScore && length === shortestHighest) {
      winner['score'] = highestScore;
      winner['word'] = word;
    }
  }

  return winner;
};
