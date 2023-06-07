const LETTER_POOL = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
  N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1,
};

export const drawLetters = () => {
  const numLetters = 10;
  const hand = [];
  const letterPool = {...LETTER_POOL};

  for (let i = 0; i < numLetters; i++){
    const availableLetters = Object.keys(letterPool);
    const randomLetter = randomChoiceWeighted(availableLetters, Object.values(letterPool));
    hand.push(randomLetter);

    letterPool[randomLetter] --;

    if(letterPool[randomLetter] === 0){
      delete letterPool[randomLetter];
    }
  }
  return hand;
};

function randomChoiceWeighted(items, weights) {
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let randomValue = Math.random() * totalWeight;

  for (let i = 0; i < items.length; i++){
    randomValue -= weights[i];
    if (randomValue <= 0) {
      return items[i];
    }
  }
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  const hand = lettersInHand.map(letter => letter.toUpperCase());

  if (word.length > hand.length) {
    return false;
  }

  const handCopy = [...hand];

  for (let letter of word) {
    if (!handCopy.includes(letter)) {
      return false;
    }

    handCopy.splice(handCopy.indexOf(letter), 1);
  }

  return true;
};

export const scoreWord = (word) => {
  if (word === '') {
    return 0;
  }
  const scoreValueDict = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8, 'K': 5, 'L': 1,
    'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
  };

  let score = 0;

  if (word === '') {
    return score;
  }

  for (let letter of word.toUpperCase()){
    if (letter in scoreValueDict){
      score += scoreValueDict[letter];
    } 
  }

  score += word.length >= 7 ? 8 : 0;

  return score;
};

export const highestScoreFrom = (words) => {
  let highScore = 0;
  let winningWord = "";
  const wordsLenTen = [];

  for (let word of words) {
    const score = scoreWord(word);
    
    if (score === highScore) {
      if (word.length === 10) {
        wordsLenTen.push(word);
      } else if (word.length < winningWord.length && winningWord.length !== 10) {
        winningWord = word;
      }
    } else if (score > highScore) {
      highScore = score;
      winningWord = word;
      if (word.length === 10) {
        wordsLenTen.push(word);
      }
    }
  }

  if (wordsLenTen.length > 0) {
    return {
      word: wordsLenTen[0],
      score: highScore,
    };
  } else {
    return {
      word: winningWord,
      score: highScore,
    };
  }
};
