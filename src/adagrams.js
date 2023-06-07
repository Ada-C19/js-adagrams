export const drawLetters = () => {
  const LETTER_POOL = {
    'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 
    'F': 2, 'G': 3, 'H': 2, 'I': 9, 'J': 1, 
    'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 
    'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 
    'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 
    'Z': 1
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }
  
  let letterBag = [];
  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      letterBag.push(letter);
    }
  }
  letterBag = shuffleArray(letterBag);
  const playerHand = letterBag.slice(0, 10);
  return playerHand;
}

export const usesAvailableLetters = (input, lettersInHand) => {
  let letterHashTable = {};
  for (let letter of lettersInHand) {
    if (letter in letterHashTable){
      ++letterHashTable[letter];
    } else {
      letterHashTable[letter] = 1;
    }
  }

  for (let letter of input) {
    const letterIsUnavailable = (letterHashTable[letter] === 0) 
    || !(letter in letterHashTable);
    
    if (letterIsUnavailable) {
      return false;
    } else {
      --letterHashTable[letter];
    }
  }
  return true;
}

export const scoreWord = (word) => {
  const LETTER_SCORE = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 
    'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8, 
    'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 
    'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1, 
    'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 
    'Z': 10
  };

  word = word.toUpperCase()
  let score = 0;
  
  for (let letter of word){
    score += LETTER_SCORE[letter];
  }

  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let winningWord = {
    word: null,
    score: null
  }

  for (let word of words){
    let thisWord = {
      word: word,
      score: scoreWord(word)
    }
    
    if (thisWord.score > winningWord.score){
      winningWord = thisWord
    } else if (thisWord.score === winningWord.score){
      if (winningWord.word.length === 10){
        continue;
      } else if (thisWord.word.length === 10 
        || thisWord.word.length < winningWord.word.length){
        winningWord = thisWord;
      }
    }
  }
  return winningWord;
}
