// Wave 1:
export const drawLetters = () => {
  let weightedPool = [];
  let numberOfLetters = 0;
  let handOfLetters = [];

  const letterPool = {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3,
    H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6,
    O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4,
    V: 2, W: 2, X: 1, Y: 2, Z: 1
  }

  for (let key in letterPool) {
    for (let i = 0; i <= letterPool[key] - 1; i++) {
      weightedPool.push(key);
    }
  }

  while (numberOfLetters < 10) {
    const index = Math.floor(Math.random() * weightedPool.length)
    const letter = weightedPool[index]
    handOfLetters.push(letter);
    numberOfLetters++;
    weightedPool.splice(weightedPool.indexOf(letter), 1)
  }
  return handOfLetters
};

// Wave 2:
export const usesAvailableLetters = (input, lettersInHand) => {
  const wordUpper = input.toUpperCase();
  for (let index = 0; index < wordUpper.length; ++index) {
    if (lettersInHand.includes(wordUpper[index])) {
      lettersInHand = lettersInHand.filter((element) => element !== wordUpper[index]);
    } else {
      return false;
    }
  }
  return true;
};

// Wave 3:
export const scoreWord = (word) => {
  const scoreChart = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1,
    N: 1, R: 1, S: 1, T: 1, D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3, F: 4, H: 4,
    V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8,
    Q: 10, Z: 10
  }

  let totalScore = 0;
  word = word.toUpperCase();
  for (let str of word) totalScore += scoreChart[str];
  if (word.length >= 7) totalScore += 8;
  return totalScore
};

// Wave 4:
export const highestScoreFrom = (words) => {
  let highestWordScore = 0;
  // let counter = 0;
  let bestWord = '';
  let score;

  for (let word of words) {
    score = scoreWord(word);
    if (score > highestWordScore) {
      highestWordScore = score;
      bestWord = word;
    } else if (score === highestWordScore) {
      if (bestWord.length === 10) continue;
      if ((word.length === 10) || (word.length < bestWord.length)) bestWord = word;
    }
  }
  return { word: bestWord, score: highestWordScore }
};
