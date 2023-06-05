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

 const letterScore = {
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

// Wave 01
  export const drawLetters = () => {

  const letterPoolCopy = { ...letterPool };
  const hand = [];
  const letters = Object.keys(letterPoolCopy);

  while (hand.length < 10) {
    let randomLetter =  Math.floor(Math.random() * letters.length);
    let letter = letters[randomLetter];

    if (letterPoolCopy[letter] > 0) {
      letterPoolCopy[letter]--;
      hand.push(letter);
    }
  }
  return hand;
};

// Wave 02
  export const usesAvailableLetters = (input, lettersInHand) => {
    const lettersInHandCopy = [...lettersInHand];
  
    for (let letter of input.toUpperCase()) {
      if (lettersInHandCopy.includes(letter)) {
        const letterIndex = lettersInHandCopy.indexOf(letter);
        lettersInHandCopy.splice(letterIndex, 1);
      } 
      else {
        return false;
      }
    }
    return true;
  };

// Wave 3
export const scoreWord = (word) => {
  let score = 0;
  for (let letter of word.toUpperCase()) {
    score += letterScore[letter];
  }
  if (word.length >=7 && word.length <=10) {
    score += 8;
  }
  return score;
};

// Wave 4
export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let numerOfTies = 0;
  const result = { word: '', score: 0 };
  const wordsAndScores = {};


  for (let word of words) {
    wordsAndScores[word] = scoreWord(word);
  }
  
  for (let [i, j] of Object.entries(wordsAndScores)) {
    if (j > highestScore) {
      highestScore = j;
    } else if (j === highestScore) {
      numerOfTies++;
    }
  }

  if (numerOfTies === 0) {
    for (let [i,j] of Object.entries(wordsAndScores)) {
      if (j === highestScore) {
        result['word'] = i;
        result['score'] = j;
        return result;
      }
    }
  } else {
    const ties = [];
    for (let [i] of Object.entries(wordsAndScores)) {
      ties.push(i);
    }
    for (let tie of ties) {
      if (tie.length === 10) {
        result['word'] = tie;
        result['score'] = wordsAndScores[tie];
        return result;
      }
    }

    let shortestLength = 10;
    let shortestWord = '';

    for (let i = 0; i < ties.length; i++) {
      if (ties[i].length < shortestLength) {
        shortestLength = ties[i].length;
        shortestWord = ties[i];
      }
    }
    result['word'] = shortestWord;
    result['score'] = wordsAndScores[shortestWord];
    return result;
  }
};

