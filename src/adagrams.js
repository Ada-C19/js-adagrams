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

const letterScores = {
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

function countLetters(dealtHand) {
  const counter = {};

  for (const element of dealtHand) {
    counter[element] = (counter[element] || 0) + 1;
  }
  return counter;
}

export const drawLetters = () => {
  // Implement this method for wave 1
const letterList = []

  while (letterList.length < 10) {
    const letterArray = Object.keys(letterPool);
    const letter = letterArray[Math.floor(Math.random() * letterArray.length)];
    const letterCounts = countLetters(letterList);

    if (!letterList.includes(letter)) {
      letterList.push(letter);

    } else if (letterCounts[letter] < letterPool[letter]) {
      letterList.push(letter);
    }
  }
  return letterList;
}

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const handLetterCount = countLetters(lettersInHand);
  const wordLetterCount = countLetters(Array.from(input.toUpperCase()));

  for (const char of Object.keys(wordLetterCount)) {
    if (!handLetterCount[char] || wordLetterCount[char] > handLetterCount[char]) {
      return false
    }
  }
  return true
  };

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scores = [];
  let total = 0;

  for (let char of Array.from(word.toUpperCase())) {
    scores.push(letterScores[char])

  } if (scores.length >= 7 && scores.length <= 10) {
    total += 8;

  } for (let value of scores) {
    total += value;
  }
  return total;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const allScoresDict = {};

  for (let word of words) {
    allScoresDict[word] = scoreWord(word);

  } let highestWord = [null, 0];

  for (let word in allScoresDict) {
    if (allScoresDict[word] > highestWord[1]) {
      highestWord[0] = word;
      highestWord[1] = allScoresDict[word];
    }
    else if (allScoresDict[word] === highestWord[1]) {
      if (word.length === 10) {
        highestWord[0] = word;
        highestWord[1] = allScoresDict[word];
      }
      else if (word.length < (highestWord[0]).length) {
        highestWord[0] = word;
        highestWord[1] = allScoresDict[word];
      }
    }
  }
  return highestWord
};
