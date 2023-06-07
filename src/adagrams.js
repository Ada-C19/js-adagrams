const letterPool = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
  N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
};

export const drawLetters = () => {
  const letterPoolCopy = JSON.parse(JSON.stringify(letterPool));
  let drawn = [];
  let keyList = Object.keys(letterPoolCopy)
  
  while (drawn.length < 10) {
    const getLetter = keyList[Math.floor(Math.random() * keyList.length)];
    if (letterPoolCopy[getLetter] > 0) {
      drawn.push(getLetter);
      letterPoolCopy[getLetter] -= 1;
    }
  }
  return drawn
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const copyLettersInHand = [...lettersInHand];
  const wordPlayed = input.toUpperCase();
  for (const letter of wordPlayed) {
    if (!(copyLettersInHand.includes(letter))) {
      return false;
    } else { 
      copyLettersInHand.splice(wordPlayed[letter], 1);
    }
  } 
  return true
};

export const scoreWord = (word) => {
  word = word.toUpperCase();
  let score = 0;
  const scoreChart = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1,
    'N': 1, 'R': 1, 'S': 1, 'T': 1, 'D': 2, 'G': 2, 
    'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4, 'V': 4, 
    'W': 4, 'Y': 4, 'K': 5, 'J': 8, 'X': 8, 'Q': 10, 'Z': 10
  };
  for (let letter of word) {
    let letterValue = scoreChart[letter];
    score += letterValue;
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score
};

export const highestScoreFrom = (words) => {
  let highestWordScore = 0;
  let bestWord = '';
  for (let word of words) {
    let score = scoreWord(word)
    if (score > highestWordScore) {
      bestWord = word;
      highestWordScore = score;
    } else if (score === highestWordScore) {
      if (highestWordScore.length > word.length) {
        if (bestWord.length !== 10) {
          bestWord = word;
        }
      } else if (bestWord.length < word.length) {
        if (word.length === 10) {
          bestWord = word;
        }
      }
    }
  }
  return { score: highestWordScore, word: bestWord };
};
