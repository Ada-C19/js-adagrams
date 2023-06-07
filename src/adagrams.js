export const drawLetters = () => {
  const LETTER_POOL = {
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
  let lettersList = [];
  let letterFreq = {};


    while (lettersList.length < 10) {
      let randomLetter = Object.keys(LETTER_POOL)[Math.floor(Math.random() * Object.keys(LETTER_POOL).length)];

    if (randomLetter in letterFreq) {
      letterFreq[randomLetter] += 1;

    if (letterFreq[randomLetter] < LETTER_POOL[randomLetter]) {
      lettersList.push(randomLetter);
    }
  } else {
    letterFreq[randomLetter] = 1;
    lettersList.push(randomLetter)
  }
}

return lettersList;

};

export const usesAvailableLetters = (input, lettersInHand) => {
let upperCaseWord = input.toUpperCase();
let letterCount = {};


  for (let letter of lettersInHand) {
    if (letter in letterCount) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  for (let letter of upperCaseWord) {
    if (!(letter in lettersInHand) || letterCount[letter] === 0) {
      return false;
    } else if (letter in lettersInHand) {
      letterCount[letter] -= 1;
    }
  }

return true;
};

export const scoreWord = (word) => {
let upperCaseWord = word.toUpperCase();
let total = 0;
let scoreChart = {
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
  Z: 10
};

if (word.length === 0) {
  // throw 'Complete test';
  return 0;
}

for (let letter of upperCaseWord) {
  total += scoreChart[letter]
}

if (word.length >= 7) {
  total += 8
}

return total;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let highScoringWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordScore = scoreWord(word);

    if (wordScore > highestScore) {
      highestScore = wordScore;
      highScoringWords = [word];
    } else if (highestScore === wordScore) {
      highScoringWords.push(word);
    }
  }
  if (highScoringWords.length === 1) {
    // return [highScoringWords[0], highestScore];
    return { word: highScoringWords[0], score: highestScore };
}

let tenLetterWords = highScoringWords.filter(word => word.length === 10);

if  (tenLetterWords.length === 1) {
  return { word: tenLetterWords[0], score: highestScore };

} else if (tenLetterWords.length > 1) {
  tenLetterWords.sort((a, b) => a.length - b.length);
  return { word: tenLetterWords[0], score: highestScore };
}

highScoringWords.sort((a, b) => a.length - b.length);
return { word: highScoringWords[0], score: highestScore }
};