const letterPool = {
  A: 9,
  B: 2,
  C: 2,
  D: 2,
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

const scoringSystem = {
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

export const drawLetters = () => {
  const generatedPool = generatePool();
  const hand = [];

  function generatePool() {
    const newArr = [];
    Object.entries(letterPool).forEach(([key, value]) => {
      newArr.push(repeatElement(key, value));
    });
    return newArr.flat();
  }

  function repeatElement(element, count) {
    return Array(count).fill(element).flat();
  }

  function drawLetter() {
    let randomNumber = Math.floor(Math.random() * generatedPool.length);
    hand.push(generatedPool[randomNumber]);
    generatedPool.splice(randomNumber, 1);
  }

  while (hand.length < 10) {
    drawLetter();
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const copyLettersInHand = [...lettersInHand];
  for (let letter of input) {
    const indexToRemove = copyLettersInHand.indexOf(letter);
    if (indexToRemove === -1) {
      return false;
    }
    const removedValue = copyLettersInHand.splice(indexToRemove, 1);
    if (removedValue.length === 0) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let wordScore = 0;
  word = word.toUpperCase();
  for (let letter of word) {
    wordScore += scoringSystem[letter];
  }
  wordScore = word.length >= 7 ? (wordScore += 8) : wordScore;
  return wordScore;
};

export const highestScoreFrom = (words) => {
  const wordObjects = words.map((word) => ({
    word: word,
    score: scoreWord(word),
  }));
  const wordScores = words.map((word) => scoreWord(word));
  const maxScore = Math.max(...wordScores);
  const highScoreObjects = wordObjects.filter((obj) => obj.score == maxScore);
  const shortestWord = highScoreObjects.reduce((a, b) =>
    a.word.length <= b.word.length ? a.word.length : b.word.length
  );

  function winnerCalculator(arr, shortestWord) {
    if (arr.some((word) => word.word.length === 10)) {
      return arr.find((word) => word.word.length === 10);
    } else {
      return arr.find((word) => word.word.length <= shortestWord);
    }
  }

  if (highScoreObjects.length > 1) {
    return winnerCalculator(highScoreObjects, shortestWord);
  } else {
    return highScoreObjects[0];
  }
};
