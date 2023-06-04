export const letterPool = {
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
};

export const drawLetters = () => {
  const hand = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  while (hand.length < 10) {
    let randomLetter = characters.charAt(Math.floor(Math.random() * 25));
    let count = hand.filter((letter) => (letter === randomLetter)).length;
    if (count < letterPool[randomLetter]) {
      hand.push(randomLetter);
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const letterFreq = {};
  lettersInHand.forEach((letter) => {
    if (letterFreq[letter]) {
      letterFreq[letter] += 1;
    } else {
      letterFreq[letter] = 1;
    }
  });
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    if (letterFreq[letter]) {
      letterFreq[letter] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

export const letterPoint = {
  'A': 1, 
  'B': 3, 
  'C': 3, 
  'D': 2, 
  'E': 1, 
  'F': 4, 
  'G': 2, 
  'H': 4, 
  'I': 1, 
  'J': 8, 
  'K': 5, 
  'L': 1, 
  'M': 3, 
  'N': 1, 
  'O': 1, 
  'P': 3, 
  'Q': 10, 
  'R': 1, 
  'S': 1, 
  'T': 1, 
  'U': 1, 
  'V': 4, 
  'W': 4, 
  'X': 8, 
  'Y': 4, 
  'Z': 10
  };

export const scoreWord = (word) => {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += letterPoint[word[i].toUpperCase()];
  };
  score += (word.length > 6) ? 8 : 0;
  return score;
};

export const highestScoreFrom = (words) => {
  const Scores = words.map((word) => scoreWord(word));
  const maxScore = Math.max(...Scores);
  const maxWords = words.filter((word) => (scoreWord(word) === maxScore));
  let maxWord = maxWords[0];
  if (maxWords.length != 1) {
    for (const word of maxWords) {
      maxWord = (word.length === 10 && maxWord.length != 10) ? word 
      : (word.length < maxWord.length && maxWord.length != 10) ? word
      : maxWord;
  }
  }
  return ({word: maxWord, score: maxScore});
};
