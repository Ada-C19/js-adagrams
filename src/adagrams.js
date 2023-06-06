export const drawLetters = () => {
    // build arrays of letters and their weights
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const weights = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 
    1, 6, 4, 6, 4, 2, 2, 1, 2, 1];

    // initialize letter pool to hold all letters & weights
    const letterPool = [];

    // initialize empty array to hold hand
    const hand = []; 

    // loop thru letters and weights arrays to add all available weighted letters
    // to letterPool array
    for (let i = 0; i < letters.length; i++) {
      for (let j = 1; j <= weights[i]; j++) {
        letterPool.push(letters[i])
      }
    } 
    
    // build hand of 10 letters per specs
    while (hand.length < 10) {
      const randomIndex = Math.floor(Math.random() * letterPool.length);
      const randomLetter = letterPool[randomIndex]
      hand.push(randomLetter)
      letterPool.splice(randomIndex, 1)
    }

    // return hand of 10 letters
    return hand; 
}; 

export const usesAvailableLetters = (input, lettersInHand) => {
  // turn input into all uppercase
  let inputUpperCase = input.toUpperCase();

  // loop thru each character of input string
  for (let char of inputUpperCase){
    // calculate count of each char in input vs. in hand
    let inputLetterCount = [...inputUpperCase].filter(x => x === char).length;
    let handLetterCount = lettersInHand.filter(y => y === char).length;
    // return false if count of any char in input > in hand
    if (inputLetterCount > handLetterCount) {
      return false;
    }
  }

  // if after for-loop, no char count in input > in hand, return true
  return true;
};

export const scoreWord = (word) => {
  // initialize variable score to hold word's score
  let score = 0; 

  // turn input into all uppercase
  const wordUpperCase = word.toUpperCase();

  // build arrays of letters and points
  const letters = [["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"], 
  ["D", "G"], ["B", "C", "M", "P"], ["F", "H", "V", "W", "Y"], ["K"],
  ["J", "X"], ["Q", "Z"]];
  const points = [1, 2, 3, 4, 5, 8, 10];

  // loop thru letters array and wordUpperCase
  // add points to word's score accordingly
  for (let i = 0; i < letters.length; i++) {
    for (let char of wordUpperCase) {
      if (letters[i].includes(char)) {
        score += points[i];
      }
    }
  }
  
  // add extra 8 points if wordUpperCase is at least 7 char long
  if (wordUpperCase.length >= 7) {
    score += 8;
  }

  // return updated score
  return score;
};

export const highestScoreFrom = (words) => {
  // initialize object to hold word:score pairs
  let wordScoreObject = {};

  // key:value pairs SHOULD NOT BE switched around!
  // numeric keys are auto converted into strings
  // keys have to be unique

  // loop thru each word in input
  for (let word of words) {
    // turn all letters of word into uppercase
    const wordUpperCase = word.toUpperCase();
    // calculate score of each word
    let score = scoreWord(wordUpperCase);
    // populate object w/ word:score pairs
    wordScoreObject[wordUpperCase] = score;
  }

  // create array of scores
  const scoreArray = Object.values(wordScoreObject);

  // find max score
  const maxScore = Math.max(...scoreArray);
  
  // initialize array to hold winning words
  const winningWordArray = [];

  // loop thru word:score object
  // populate winningWordArray w/ all winning words
  for (const word in wordScoreObject) {
    if (wordScoreObject[word] === maxScore) {
      winningWordArray.push(word); 
    }
  }

  // if there's only 1 winning word
  // return score:word pair
  if (winningWordArray.length === 1) {
    return {"score": scoreWord(winningWordArray[0]), "word": winningWordArray[0]};
  }
  // if there's > 1 winning word 
  else {
    // let 1st word be shortest word 
    let shortestWord = winningWordArray[0];
    // loop thru winningWordArray
    for (let word of winningWordArray) {
      // return score:word pair if word is 10 letters long
      if (word.length === 10) {
        return {"score": scoreWord(word), "word": word};
      }
      // if word is not 10 letters long 
      else {
        // if current word < shortest word
        // current word becomes shortest word
        if (word.length < shortestWord.length) {
          shortestWord = word;
        // if current word >= shortest word
        // maintain shortest word
        } else {
          shortestWord = shortestWord;
        }
      }       
    }
    // if after looping thru winningWordArray and no 10-letter word found
    // return score:word pair for shortest word
    return {"score": scoreWord(shortestWord), "word": shortestWord};
  }  
};
