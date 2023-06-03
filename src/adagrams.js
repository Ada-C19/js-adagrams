export const drawLetters = () => {
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
  let hand = [];
  let randomLetter = "";
  while (hand.length < 10) {
    randomLetter = getRandomLetter(letterPool);
    if (letterPool[randomLetter] > 0)  {
      letterPool[randomLetter] -= 1;
            hand.push(randomLetter.toUpperCase());
    }
  } 
  return hand;
};

function getRandomLetter() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const bank = [...lettersInHand];
  const inputLetters = input.toUpperCase().split('');

  for (let i = 0; i < inputLetters.length; i++) {
    const letter = inputLetters[i];
    const index = bank.indexOf(letter);

    if (index !== -1) {
      bank.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
    const chart = {
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
    };
  
    let score = 0;
    word = word.toUpperCase();
  
    for (let letter of word) {
      score += chart[letter.toUpperCase()];
    }
  
    if (word.length >= 7 && word.length <= 10) {
      score += 8;
    }
  
    return score;
};

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
