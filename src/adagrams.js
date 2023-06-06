export const drawLetters = () => {
  const letterPool = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1
  };
  
  const letterPoolArray = []
  const lettersInHand = []

  for (let letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      letterPoolArray.push(letter);
    }
  };

  for (let i = 0; i < 10; i++) {
    let randomNumber = [Math.floor(Math.random() * letterPoolArray.length)];
    lettersInHand.push(letterPoolArray[randomNumber]);
    letterPoolArray.splice(randomNumber, 1);
  };

  return lettersInHand
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letter of input.toUpperCase()) {
    if (lettersInHand.includes(letter)) {
      let letterInstance = lettersInHand.indexOf(letter);
      lettersInHand.splice(letterInstance, 1);
    } else {
        return false;
    }
  };

  return true;
};

export const scoreWord = (word) => {
  const letterValue = {
    'A': 1,
    'E': 1,
    'I': 1,
    'O': 1,
    'U': 1,
    'L': 1,
    'N': 1,
    'R': 1,
    'S': 1,
    'T': 1,
    'D': 2,
    'G': 2,
    'B': 3,
    'C': 3,
    'M': 3,
    'P': 3,
    'F': 4,
    'H': 4,
    'V': 4,
    'W': 4,
    'Y': 4,
    'K': 5,
    'J': 8,
    'X': 8,
    'Q': 10,
    'Z': 10
  };
  let score = 0;

  if (word.length == 0) {
    return score
  } else {
    for (let letter of word.toUpperCase()) {
      score += letterValue[letter];
    }
    if (word.length >= 7) {
      score += 8;
    }
  }

  return score;
};

export const highestScoreFrom = (words) => {
  const wordScoreDict = {};
  let highestScore = 0;
  
  for (let i = 0; i < words.length; i++) {
    console.log('current word:', words[i])
    if (scoreWord(words[i]) in wordScoreDict) {
      wordScoreDict[scoreWord(words[i])].push(words[i]);
    } else {
      wordScoreDict[scoreWord(words[i])] = [words[i]]
    }

    if (scoreWord(words[i]) > highestScore) {
      highestScore = scoreWord(words[i])
    }
    console.log('dict:', wordScoreDict, '; high score:', highestScore)
  }

  let shortestWord = 'XXXXXXXXXX';

  console.log('highest score word(s):', wordScoreDict[highestScore], '; list length', wordScoreDict[highestScore].length)

  if (wordScoreDict[highestScore].length > 1) {
    for (let word of wordScoreDict[highestScore]) {
      console.log('tiebreaking list:', wordScoreDict[highestScore], '; current word:', word)
      if (word.length === 10) {
        return {
          'word': word,
          'score': highestScore
        }
      } else {
        if (word.length < shortestWord.length) {
          shortestWord = word;
        }
      }
    }
    return {
      'word': shortestWord,
      'score': highestScore
    }
  }

  return {
    'word': wordScoreDict[highestScore][0],
    'score': highestScore
  };
}