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


function getRandomProperty() {
  const keys = Object.keys(LETTER_POOL);

  return keys[Math.floor(Math.random() * keys.length)];
}

let drawnLetters = [];

export const drawLetters = () => {
  while (drawnLetters.length < 10) {
    let myCurrentKey = getRandomProperty();
    let myCurrentValue = LETTER_POOL[myCurrentKey];
    if (myCurrentValue !== 0) {
      drawnLetters.push(myCurrentKey);
      LETTER_POOL[myCurrentKey] = myCurrentValue - 1;
    }
    if (LETTER_POOL[myCurrentKey] === 0) {
      delete LETTER_POOL[myCurrentKey];
    }
  }
  
  return drawnLetters;
};



export const usesAvailableLetters = (input, lettersInHand) => {
  let bankCopy = JSON.parse(JSON.stringify(lettersInHand))
  for (let letter of input) {
    if (!bankCopy.includes(letter.toUpperCase())){
      return false
    } else if (bankCopy.includes(letter.toUpperCase())) {
      bankCopy = bankCopy.filter(value => value !== letter)
      }
    }
    return true
  };
  

export const scoreWord = (word) => {
  let score = 0;
  let lengthOfWord = word.length;
  const letterValueDict = { 
     A: 1, E: 1, I: 1, O: 1, U: 1, L: 1,
     N: 1, R: 1, S: 1, T: 1, D: 2, G: 2,
     B: 3, C: 3, M: 3, P: 3, F: 4, V: 4,
     W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10,
     Z: 10, H:4
    };

    if (word.length === 0){
      return 0;
    }

    if(lengthOfWord >= 7){
      score += 8;
    }

    for (let i = 0; i < lengthOfWord; i++) {
      const alpha = word[i].toUpperCase();
      score += letterValueDict[alpha];
    } 

    return score;
    
}


export const highestScoreFrom = (words) => {
  let wordDict = {};
  let listOfMaxKeys = [];
  let maxValue;
  
  for (const word of words) {
    wordDict[word] = scoreWord(word);
  }

  maxValue = Math.max(...Object.values(wordDict));
  
  
  for (const [key, value] of Object.entries(wordDict)) {
    if(value === maxValue) {
      listOfMaxKeys.push(key);
    }
  }

  if (listOfMaxKeys.length > 1) {
    let tenLetterWordsList = [];
    let nonTenLetterWordsList = [];

    for (const word of listOfMaxKeys) {
      if (word.length === 10) {
        tenLetterWordsList.push(word);
      } else {
        nonTenLetterWordsList.push(word);
      }
    }
    
    if (tenLetterWordsList.length > 0) {
      return { word: tenLetterWordsList[0], score: wordDict[tenLetterWordsList[0]] };
    } else {
      let sortedNonTenLetterWordList = nonTenLetterWordsList.sort((a, b) => a.length - b.length);
      let shortestWord = sortedNonTenLetterWordList[0];
      return { word: shortestWord, score: wordDict[shortestWord] };
    }
  }

  return { word: listOfMaxKeys[0], score: wordDict[listOfMaxKeys[0]] };
};

