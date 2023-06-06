export const drawLetters = () => {
  // Implement this method for wave 1
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
    Z: 1,
  };

  const handLetters = [];
  const letters = Object.keys(letterPool);

  while (Object.keys(handLetters).length < 10) {
    let letterIndex = Math.floor(Math.random() * letters.length);
    let letter = letters[letterIndex];

    if (letterPool[letter] > 0) {
      letterPool[letter]--;
      handLetters.push(letter);
    }
  }
  return handLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHandCopy = [...lettersInHand];

  for (let letter of input.toUpperCase()) {
    if (lettersInHandCopy.includes(letter)) {
      const index = lettersInHandCopy.indexOf(letter);
      lettersInHandCopy.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  const scoreChart = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };

  let score = 0;

  for (let letter of word.toUpperCase()) {
    for (let [k, v] of Object.entries(scoreChart)) {
      if (letter === k) {
        score += v;
      }
    }
  }

  if (word.length >= 7) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  const result = { word: "", score: 0 };
  const wordsAndScores = {};
  let highestScore = 0;
  let ties = 0;

  for (let word of words) {
    wordsAndScores[word] = scoreWord(word);
  }

  for (let [k, v] of Object.entries(wordsAndScores)) {
    if (v > highestScore) {
      highestScore = v;
    } else if (v === highestScore) {
      ties++;
    }
  }

  if (ties === 0) {
    for (let [k, v] of Object.entries(wordsAndScores)) {
      if (v === highestScore) {
        result["word"] = k;
        result["score"] = v;
        return result;
      }
    }
  } else {
    const tiedWords = [];
    for (let [k, v] of Object.entries(wordsAndScores)) {
      tiedWords.push(k);
    }
    for (let tiedWord of tiedWords) {
      if (tiedWord.length === 10) {
        result["word"] = tiedWord;
        result["score"] = wordsAndScores[tiedWord];
        return result;
      }
    }

    let shortestLength = 10;
    let shortestWord = "";

    for (let i = 0; i < tiedWords.length; i++) {
      if (tiedWords[i].length < shortestLength) {
        shortestLength = tiedWords[i].length;
        shortestWord = tiedWords[i];
      }
    }
    result["word"] = shortestWord;
    result["score"] = wordsAndScores[shortestWord];
    return result;
  }
};
