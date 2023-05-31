const letterHand = 10
const letterPool = {
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

function generateRandomLetter() {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  return alphabet[Math.floor(Math.random() * alphabet.length)]
}
// turn into function expressions
const countOccurrences =  function (array, element) {
  let count = 0
  for (let i = 0; i < array.length; i++){
    if (array[i] === element) {
      count++;
    }
  }
  return count
}
// turn into function expressions
function checkForValues(object, valueOccurernces, letter) {
  if (object[letter] >= valueOccurernces) {
      return true
  }
  else {
    return false
  }
}

export const drawLetters = () => {
  const handList = []
  while (handList.length < letterHand) {
      const randomLetter = generateRandomLetter();
      handList.push(randomLetter);
      const valueInArray = countOccurrences(handList, randomLetter)   
      const valueEnoughTimes = checkForValues(letterPool, valueInArray, randomLetter)
    
      if (valueEnoughTimes === true) { continue; }
      else {
        handList.pop()
      }
  }
  return handList
};


export const usesAvailableLetters = (input, lettersInHand) => {
  const upperWord = input.toUpperCase()
  for (const letter of upperWord) {
    if (!lettersInHand.includes(letter)) {
      return false
    }
    else if (
      countOccurrences(upperWord, letter) > countOccurrences(lettersInHand, letter)
    ) {
      return false
    }
    else { continue; }
  }
  return true
};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
