const letterPool = {
  "A": 9,
  "B": 2,
  "C": 2,
  "D": 2,
  "E": 12,
  "F": 2,
  "G": 3,
  "H": 2,
  "I": 9,
  "J": 1,
  "K": 1,
  "L": 4,
  "M": 2,
  "N": 6,
  "O": 8,
  "P": 2,
  "Q": 1,
  "R": 6,
  "S": 4,
  "T": 6,
  "U": 4,
  "V": 2,
  "W": 2,
  "X": 1,
  "Y": 2,
  "Z": 1
}

export const drawLetters = () => {
  const generatedPool = generatePool();
  const hand = []

  function generatePool() {
    const newArr = [];
    Object.entries(letterPool).forEach(([key, value]) => {
      newArr.push(repeatElement(key, value));
    });
    return newArr.flat();
  }

  function repeatElement(element, count) {
    return Array(count).fill(element).flat();
  }

  function drawLetter() {
    let randomNumber = Math.floor(Math.random() * generatedPool.length)
    hand.push(generatedPool[randomNumber])
    generatedPool.splice(randomNumber, 1)
  }

  while (hand.length < 10) {
    drawLetter()
  }
  
  return hand
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
