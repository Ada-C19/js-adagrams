const letterPool = {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
}
const letterScore= {
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
}
export const drawLetters = () => {
  // Implement this method for wave 1
  let pool = {...letterPool};
  let hand = [];

  while (hand.length < 10) {
  const letters = Object.keys(letterPool);
  const letter = letters[Math.floor(Math.random() * letters.length)];

  if (pool[letter] > 0) {
    hand.push(letter);
    pool[letter] -= 1;
  } else {
    delete pool[letter];
}
}
return hand;
};
// helper fn frequency map
const createMap = (x) => {
  const freqMap = {};
  for (let char of x) {
    if (freqMap[char] !== undefined) {
      freqMap[char] += 1

    } else {
      freqMap[char] = 1
    }
  }
  return freqMap;
};
export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let word = input.toUpperCase();
  let wordFreq = createMap(input);
  let lettersInHandFreq = createMap(lettersInHand);
  let result = false;
  for (let char of word) {
    if (lettersInHand.includes(char) && wordFreq[char] <= lettersInHandFreq[char]) {
      result = true
    } else {
      return false
    }
  }
  return result
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let total = 0;
  let words = word.toUpperCase();
  for (let letter of words) {
      total += letterScore[letter]
    }
  if (words.length === 0) {
    return 0;
  } else if (words.length >= 7){
    total += 8
  }
  return total
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
//   - Has one parameter: `words`, which is an array of strings
// - Returns a single object that represents the data of a winning word and its score. The object should have the following keys:
//   - `word`, whose value is a string of a word
//   - `score`, whose value is the score of that word
// - In the case of tie in scores, use these tie-breaking rules:
//   - prefer the word with the fewest letters...
//   - ...unless one word has 10 letters. If the top score is tied between multiple words and one is 10 letters long, choose the one with 10 letters over the one with fewer tiles
//   - If the there are multiple words that are the same score and the same length, pick the first one in the supplied list
  let highScore = 0;
  let highWord = '';
  for (let word of words) {
    let score = scoreWord(word);
    if (score > highScore) {
      highScore = score;
      highWord = word
    } else if (score == highScore){
        if (highWord.length === 10) {
          continue

        }else if (word.length === 10) {
          highScore = score;
          highWord = word;
        } else if (word.length < highWord.length) {
          highScore = score;
          highWord = word;
        }
    }
    }
    return {word: highWord, score: highScore};
};