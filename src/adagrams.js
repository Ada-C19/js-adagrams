export const drawLetters = () => {
  // Implement this method for wave 1
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let weights = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1];

  let cumulativeWeight = 98;

  let hand = [];

  // Repeat loop until hand is 10
  while (hand.length < 10) {
    // Generate a random n between 0 and total amount of available tiles
    let randomNumber = Math.floor(Math.random() * cumulativeWeight);
    // Iterate through letters' length
    for (let i = 0; i < letters.length; i++) {
      // Continously subtract current weight from cumulative weight
      randomNumber -= weights[i];
      // When weight reaches 0, remove letter from pool
      if (weights[i] === 0) {
        delete letters[i];
      }
      // When random n goes below 0, use current i to access the letter at that index, add letter to hand
      if (randomNumber < 0) {
        hand.push(letters[i]);  
        // Subtract that tile from that letter's weight and stop subtracting
        weights[i] -= 1;
        break;
      }
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const word = input.toUpperCase();

  for (const letter of word) {
    // Count each letter amount in lettersInHand, if it exists in word
    const letterCount = lettersInHand.filter(x => x == letter).length;

    // Regex to count each letter amount in word
    const re = new RegExp(letter, 'g');
    const count = word.match(re).length;

    // if letter in word does not exist or
    // letter exists but not enough in bank to make word, return false
    if (!lettersInHand.includes(letter) || letterCount < count) {
      return false;
    } 
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const letterScore = {
    A: 1, 
    E: 1, 
    I: 1, 
    O: 1, 
    U: 1, 
    L: 1, 
    N: 1, 
    R: 1, 
    S: 1, 
    T: 1,
    D: 2,
    G: 2,
    B: 3,  
    C: 3, 
    M: 3, 
    P: 3,  
    F: 4,  
    H: 4, 
    V: 4, 
    W: 4, 
    Y: 4, 
    K: 5,    
    J: 8,  
    X: 8,
    Q: 10, 
    Z: 10             
  };
  let score = 0;

  if (word.length === 0) {
    return score;
  } else {
    const upperCaseWord = word.toUpperCase();
    for (const char of upperCaseWord) {
      score += letterScore[char];
    }
    if (word.length >= 7) {
      score += 8;
    }
    return score;
  }
};


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highScore = 0;
  let winningWord = '';
  let ties = [];

  for (const word of words) {
    // Get score for each word
    const score = scoreWord(word);
    // If this word's score is higher than highScore, update highScore and winning word 
    if (score > highScore) {
      highScore = score
      winningWord = word
      ties.push(winningWord)
    } else if (score === highScore) {
        ties.push(word)
    }
  }

  let longestWord = ''
  for (const word of ties) {
    if (word.length > longestWord.length) {
      longestWord = word;
    } else {
      winningWord = word;
    }
    if (longestWord.length === 10) {
      winningWord = longestWord;
    }
  }

  return {'score': highScore, 'word': winningWord}

};