// letter bank with letter frequency
const letterPool = {
  'A': 9, 'N': 6, 'B': 2, 'O': 8, 'C': 2, 'P': 2, 'D': 4, 'Q': 1, 'E': 12, 'R': 6, 'F': 2, 'S': 4, 'G': 3, 'T': 6,
'H': 2, 'U': 4, 'I': 9, 'V': 2, 'J': 1, 'W': 2, 'K': 1, 'X': 1, 'L': 4, 'M': 2, 'Z': 1
};

// letter bank with letter value
const letterValue = {
  '1': ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  '2': ['D', 'G'],
  '3': ['B', 'C', 'M', 'P'],
  '4': ['F', 'H', 'V', 'W', 'Y'],
  '5': ['K'],
  '8': ['J', 'X'],
  '10': ['Q', 'Z']
};

export const drawLetters = () => {
  // Implement this method for wave 1

    // new copy of letterPool that won't be changed, using spread syntax
    let letterPoolCopy = {...letterPool};  
    let letters = [];

    while (letters.length < 10) {
        let letterKeys = Object.keys(letterPoolCopy);
        let letterKey = letterKeys[Math.floor(Math.random() * letterKeys.length)];
        if (letterPoolCopy[letterKey] !== 0) {
            letterPoolCopy[letterKey] -= 1;
            letters.push(letterKey);
        };
    };

    return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  let lettersInHandCopy = [...lettersInHand];
  let letterBankCase = lettersInHandCopy.map(letter => letter.toUpperCase());

  for (let letter of input.toUpperCase()) {
    let index = letterBankCase.indexOf(letter);
    if (index !== -1) {
      letterBankCase.splice(index, 1);
    } else {
        return false;
    };
  };
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  let currentScore = 0;

  // Cannot get this to work to save my life
  // if (word.length === 0){
    // return currentScore;
  //   return 0;
  if (word === "") {
    return currentScore;
    // return 0;
  };

  for (let letter of word.toUpperCase()) {
    for (let [key, val] of Object.entries(letterValue)) {
      if (val.includes(letter)) {
        currentScore += Number(key);
      };
    };
  };
  if (word.length > 6 && word.length <= 10) {
    currentScore += 8;
  };
  return currentScore;  
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4

  // *** pseudocode ***

  // initialize a variable, highest_score, to 0
  // initialize a variable, winning_word, to an empty string
  // for each word in the words array, pass the word as an argument to scoreWord
  // if the score is greater highest_score:
  // if word.length === 10: assign score as highest_score and word as winning_word
  // elif word.length < 10 && winning_word.length === 10: assign score as highest_score and word as winning_word
  // elif the score === highest_score:
    // if word.length === 10 && winning_word.length !== 10: assign score as highest_score and word as winning_word
    // elif winning_word.length !== 10 && word.length < 10 && word.length < winning_word.length: assign score as highest_score and word as winning_word
    // return { word: winning_word, score: highest_score }
  
  let highestScore = 0;
  let winningWord = "";

  words.forEach(word => {
    let score = scoreWord(word);
    
    if (score > highestScore) {
      if (word.length === 10) {
        highestScore = score;
        winningWord = word;
      } else if (word.length < 10 && winningWord.length !== 10) {
        highestScore = score;
        winningWord = word;
      };
    } else if (score === highestScore) {
      if (word.length === 10 && winningWord.length !== 10) {
        highestScore = score;
        winningWord = word;
      } else if (winningWord.length !== 10) {
          if (word.length ===10 || word.length < winningWord.length) {
          highestScore = score;
          winningWord = word;
        };
      };
    };
  });
    return { word: winningWord, score: highestScore };
};
