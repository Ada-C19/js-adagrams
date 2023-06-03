const letterPool = {'A': 9, 
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
'Z': 1}

export const drawLetters = () => {
  // Implement this method for wave 1
const auxLetterPool = {...letterPool};
const availableLetters = [];

while (availableLetters.length < 10) {
  const numbers = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  const lettersForUser = String.fromCodePoint(numbers);

  if (auxLetterPool[lettersForUser] >1) {
    availableLetters.push(lettersForUser);
    auxLetterPool[lettersForUser] -= 1;
  }
}
  return availableLetters;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  input = input.toUpperCase();

  if (lettersInHand.length < input.length) {
    return false;
  }
  let auxLettersInHand = [...lettersInHand];
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    const letterIndex = auxLettersInHand.indexOf(letter);

    if (letterIndex !== -1) {
      auxLettersInHand.splice(letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
