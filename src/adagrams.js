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

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
