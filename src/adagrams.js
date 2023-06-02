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
  
  let hand_count = 0;
  let hand = []
  const keys = Object.keys(LETTER_POOL)

  while (hand_count < 10) {
    let random_key = keys[Math.floor(Math.random() * keys.length)];
    
    if (hand.filter((x) => x === random_key).length < LETTER_POOL[random_key]) {
      hand.push(random_key);
      hand_count = hand.length;
    }
  }

  return hand;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  let wordArray = Array.from(input);
  
  for (const letter of wordArray) {
    let index = lettersInHand.indexOf(letter);
    if (index === -1) {
      return false;
    }
    else {
      lettersInHand.splice(index, 1);
    }
  }

  return true;

};

export const scoreWord = (word) => {
  const scores = {
    "AEIOULNRST": 1, 
    "DG": 2, 
    "BCMP": 3,
    "FHVWY": 4,
    "K": 5, 
    "JX": 8,
    "QZ": 10 
  }
  const wordUpper = word.toUpperCase()
  const wordArray = Array.from(wordUpper);

  let sum = 0;

  for (const letter of wordArray) {
    for (const item in scores) {
      if (item.includes(letter)) {
        sum += scores[item];
      }
    }
  }

  if (word.length > 6) {
    sum += 8;
  }

  return sum;

};

export const highestScoreFrom = (words) => {
  // Pseudocode: (instead - make a list of objects with word and score and length. then filter and map?)
  // 1. use a loop to score each of the words in the input array, save the output in an 
  // array of objects wwhere each object has keys word, score, and length with corresponding values
  // 2. use the .max and .map function to get the max score from the array
  // 3. use .filter to move all objects whose score is the high score to a new array 
  // 4. if there's more than one element in that array, apply tie breaking logic. if not,
  // return the single element in that array 
  // 5. use .max and .apply functions to get the max word length from the array 
  // 6. if the max is less than 10, use .min and .apply functions to get the min word 
  // length from the array 
  // 7. use .filter and .map to add all objects with the min length to a new array, 
  // and return the first element of that list 
  // 8. if the max is greater than or equal to 10, use .filter and .map to add all 
  // objects with the max length to a new array, and return the first element of that list
 
  const scoredWords = [];

  for (const word of words) {
    scoredWords.push({
      "word": word,
      "score": scoreWord(word),
      "length": word.length
    });
  }

  const highScore = Math.max(...scoredWords.map(w => w.score));
  const highScoreWords = scoredWords.filter(s => s.score === highScore);

  if (highScoreWords.length === 1) {
    return {"word": highScoreWords[0].word, "score": highScoreWords[0].score};
  }

  const longestWordLength =  Math.max(...highScoreWords.map(w => w.length));
  let possibleWinners = [];
  
  if (longestWordLength < 10) {
    const shortestWordLength = Math.min(...highScoreWords.map(w => w.length));
    possibleWinners = highScoreWords.filter(l => l.length === shortestWordLength);
    return {"word": possibleWinners[0].word, "score": possibleWinners[0].score};
  } 

  possibleWinners = highScoreWords.filter(l => l.length === longestWordLength);
  return {"word": possibleWinners[0].word, "score": possibleWinners[0].score};

};
