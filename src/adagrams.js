const LETTER_POOL = {
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

// Wave 1
export const drawLetters = () => {
  const letterList = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C','D', 'D', 'D', 'D',
  'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G','H', 'H',
  'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N',
  'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S',
  'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'X', 'Y', 'Y', 'Z'];
  const playerHand = [];



  while (playerHand.length < 10) {
    const randomIndex = Math.floor(Math.random() * letterList.length);
    const randomLetter = letterList[randomIndex];

    playerHand.push(randomLetter);

    letterList.splice(randomIndex, 1);
  }

  return playerHand;
}
// Wave 2
export const usesAvailableLetters = (word, letterBank) => {
  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (countOccurrences(word, letter) > countOccurrences(letterBank, letter)) {
      return false;
    }
  }

  return true;
};

const countOccurrences = (str, char) => {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};

// Wave 3
export const scoreWord = (word) => {
  const scoreDict = {
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

  let score = 0;

  for (let letter of word.toUpperCase()) {
    if (letter in scoreDict) {
      score += scoreDict[letter];
    }
  }

  if (word.length >= 7) {
    score += 8;
  }

  return score;
};


// Wave 4
export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let topPlayers = [];

  for (const word of words) {
    let wordScore = scoreWord(word);
    if (wordScore > highestScore) {
      highestScore = wordScore;
      topPlayers = [{ word: word, score: wordScore }];
    } else if (wordScore === highestScore) {
      topPlayers.push({ word: word, score: wordScore });
    }
  }

  let winner = topPlayers[0];
  for (const player of topPlayers) {
    if (player.word.length === 10) {
      winner = player;
      return winner;
    }
    if (player.word.length < winner.word.length) {
      winner = player;
    }
  }
  return winner;
};