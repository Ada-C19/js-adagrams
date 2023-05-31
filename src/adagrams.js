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

const SCORE_CHART = {
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


export const drawLetters = () => {
  let pool = { ...LETTER_POOL};
  let playersHand = [];

  for (let i = 0; i < 10; i++) {
    const letters = Object.keys(pool);
    const randomIndex = Math.floor(Math.random() * letters.length);
    const letter = letters[randomIndex];

    if (pool[letter] > 0) {
      playersHand.push(letter);
      pool[letter] -= 1;
    } else {
      delete pool[letter];
      i--;
    }
  }
  return playersHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let letter = input.toUpperCase();
  
  for (let char of letter) {
    if (!lettersInHand.includes(char)){
    return true;
  } else (input != lettersInHand)
    return false;
  }
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

/*def uses_available_letters(word, letter_bank):
word = word.upper()
for char in word:
    if char in letter_bank and word.count(char) == letter_bank.count(char):
        result = True
    else:
        result = False
return result /*

/*def uses_available_letters(word, letter_bank):

    # use upper to account for lowercase
    word = word.upper()

    # loop; if letter is not in bank or quantity is wrong, return false
    for letter in word:
        if letter not in letter_bank:
            return False
        elif word.count(letter) > letter_bank.count(letter):
            return False
        
    return True*/