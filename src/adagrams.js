export const drawLetters = () => {

  const letterPoolFreq = {'A': 9, 'N': 6, 'B': 2, 'O': 8, 'C': 2, 'P': 2, 'D': 4, 'Q': 1, 'E': 12, 'R': 6, 'F': 2, 'S': 4, 'G': 3, 'T': 6,
  'H': 2, 'U': 4, 'I': 9, 'V': 2, 'J': 1, 'W': 2, 'K': 1, 'X': 1, 'L': 4, 'M': 2, 'Z': 1};
  const letterPool = [];
  const gameHand = [];

  for (const letter in letterPoolFreq) {
    letterPool.push(...Array(letterPoolFreq[letter]).fill(letter));
  }

  const selectRandomLetter = () => {
    const tempIndex = Math.floor(Math.random() * (letterPool.length + 1));
    return letterPool[tempIndex];
  };
  
  while (gameHand.length < 10) {
    const tempLetter = selectRandomLetter()
    let tempLetterCount = 0; 

    gameHand.forEach(letter => {
      if (letter === tempLetter) {
        tempLetterCount++;
      }
    });

    if (tempLetterCount < letterPoolFreq[tempLetter]) {
      gameHand.push(tempLetter);
    }
  }
  return gameHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  // let lettersInHandCopy = [...lettersInHand]
  const countLetter = (word, letterToCount) => {
    let letterCount = 0;
    for (const letter of word) {
      if (letter === letterToCount) {
        letterCount += 1;
      }
    return letterCount;
    }
  }

  input.forEach(letter => {
    if (!(lettersInHand.includes(letter)) || countLetter(input, letter) > countLetter(lettersInHand, letter)) {
      return false;
    }});

  // for (let i = 0; i < input.length; i++) {
  //   if (!(lettersInHandCopy.includes(input[i]))) {
  //     return false;
  //   } else {
  //     let tempIndex = lettersInHandCopy.indexOf(input[i])
  //     lettersInHandCopy.splice(tempIndex, 1)
  //   }
  // }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  word = word.toUpperCase()

  const scoreChart = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10
  };

  let score = 0;

  for (let letter of word) {
    score += scoreChart[letter];
  }

  if (word.length >= 7) {
    score += 8;
  }

  return score;
}


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4

  words.sort((a, b) => a.length - b.length);
  const getScores = words.map(word => scoreWord(word));
  const highScore = getScores.reduce((accumulator, current) => Math.max(accumulator, current));

  const findHighestScoringWord = (words) => {
    for (let word of words) {
      if (word.length === 10) {
        return word;
      } 
    }
    for (let word of words) {
      if (scoreWord(word) === highScore) {
          return word;
      }
    }
  }

  return {'word': findHighestScoringWord(words), 'score': highScore};
  }

  
  