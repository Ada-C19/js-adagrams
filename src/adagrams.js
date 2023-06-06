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
};

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
}

const getRandomValue = (values) => {
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

export const drawLetters = () => {
  // Implement this method for wave 1
  const maxLetters = 10;
  let drawnLetters = [];

  const cloneLetterPool = { ...letterPool }

  const letters = Object.keys(cloneLetterPool)
  
  while (drawnLetters.length < maxLetters) {
    let randomLetter = getRandomValue(letters);

    if (cloneLetterPool[randomLetter] > 0) {
      drawnLetters.push(randomLetter);
      cloneLetterPool[randomLetter] -= 1;
    }
  }
  console.log(`These are your letters: ${drawnLetters}`)
  return drawnLetters
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let valid = true;

  const letterHash = {};

  for (let letter of lettersInHand) {
    if (letterHash[letter]) {
      letterHash[letter]++
    } else {
      letterHash[letter] = 1;
    }
  }

  for (let letter of input) {
    if (!(letter in letterHash)) {
      valid = false; 
      break
    } else if (letter in letterHash) {
      if (letterHash[letter] === 0){
        valid = false;
        break
      } else {
        valid = true;
        letterHash[letter]--;
      }
    }
  }

  return valid
  };

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  word = word.toUpperCase()

  if (word.length === 0) {
    return score
  }

  for (let letter of word) {
    score += scoreChart[letter];
  }

  if (word.length >= 7) {
    score += 8;
  }

  return score
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  
  let bestScore = {
    word: '',
    score: 0,
};

  for (let input of words) {
    let calculatedScore = scoreWord(input)
    
    if (input.length === 10) {
      bestScore.word = input;
      bestScore.score = calculatedScore;
      break;
    } 
    
    if ((bestScore.score < calculatedScore) 
        || (bestScore.score === calculatedScore 
        && bestScore.word.length > input.length)) {
          bestScore.word = input;
          bestScore.score = calculatedScore
    }

  }
  
  return bestScore
};
