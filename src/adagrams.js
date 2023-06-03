export const drawLetters = () => {
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
};

// const availableLetters = Object.assign({}, LETTER_POOL);
//   const hand = [];

//   for (let i = 0; i < 10; i++) {
//     const letters = Object.keys(availableLetters);
//     console.log('Available Letters:', letters);
//     const randomIndex = Math.floor(Math.random() * letters.length);
//     const letter = letters[randomIndex];
//     hand.push(letter);

//     availableLetters[letter] -= 1;
//     if (availableLetters[letter] === 0) {
//       delete availableLetters[letter];
//     }
//   }
//   return hand;
const availableLetters = [];
for (const [letter, count] of Object.entries(LETTER_POOL)) {
  for (let i = 0; i < count; i++) {
    availableLetters.push(letter);
  }
}

const hand = [];
for (let i = 0; i < 10; i++) {
  const randomIndex = Math.floor(Math.random() * availableLetters.length);
  const letter = availableLetters.splice(randomIndex, 1)[0];
  hand.push(letter);
}

return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
    const letterBankStr = lettersInHand.join('');
  
    const inputCounts = new Map();
    for (const letter of input.toUpperCase()) {
      inputCounts.set(letter, (inputCounts.get(letter) || 0) + 1);
    }
  
    const bankCounts = new Map();
    for (const letter of letterBankStr) {
      bankCounts.set(letter, (bankCounts.get(letter) || 0) + 1);
    }
  
    for (const [letter, count] of inputCounts) {
      if (count > (bankCounts.get(letter) || 0)) {
        return false;
      }
    }
  
    return true;
};

export const scoreWord = (word) => {
  const SCORES = {
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
  let score = 0
    for (const letter of word.toUpperCase()){
      try{
        score += SCORES[letter];
      }
      catch (KeyError){
        score += 0
      }
    }
    if (word.length >= 7 && word.length <= 10) {
      score += 8;
    }
    
    return score
        
};

export const highestScoreFrom = (words) => {
  if (!words.length) {
    throw new ValueError("The word list is empty");
  }

  const wordScores = words.map((word) => [word, scoreWord(word)]);

  const maxScore = Math.max(...wordScores.map(([, score]) => score));

  const maxScoreWords = wordScores
    .filter(([, score]) => score === maxScore)
    .map(([word]) => word);

  if (maxScoreWords.length > 1) {
    const tenLetterWords = maxScoreWords.filter((word) => word.length === 10);
    if (tenLetterWords.length) {
      return { score: maxScore, word: tenLetterWords[0] };
    }

    const shortestWord = maxScoreWords.reduce((a, b) => (a.length < b.length ? a : b));
    return { score: maxScore, word: shortestWord };
  }
  return { score: maxScore, word: maxScoreWords[0] };
};