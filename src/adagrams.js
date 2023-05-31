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
  // Implement this method for wave 4
};
