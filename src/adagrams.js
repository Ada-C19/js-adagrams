export const drawLetters = () => {
    // build arrays of letters and their weights
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const weights = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 
    1, 6, 4, 6, 4, 2, 2, 1, 2, 1]

    // initialize letter pool
    const letterPool = []

    // initialize empty array to hold hand
    const hand = []

    // loop thru letters and weights arrays to add all available weighted letters
    // to letterPool array
    for (let i = 0; i < letters.length; i++) {
      for (let j = 1; j <= weights[i]; j++) {
        letterPool.push(letters[i])
      }
    } 
    
    // build hand of 10 letters per specs
    while (hand.length < 10) {
      const randomIndex = Math.floor(Math.random() * letterPool.length);
      const randomLetter = letterPool[randomIndex]
      hand.push(randomLetter)
      letterPool.splice(randomIndex, 1)
    }

    // return hand of 10 letters
    return hand; 
}; 

export const usesAvailableLetters = (input, lettersInHand) => {
  // turn input into all uppercase
  let inputUpperCase = input.toUpperCase();
  // console.log(inputUpperCase)

  // loop thru each character of input string
  for (let char of inputUpperCase){
    // calculate count of each char in input vs. in hand
    let inputLetterCount = [...inputUpperCase].filter(x => x === char).length;
    let handLetterCount = lettersInHand.filter(y => y === char).length;
    // return false if count of any char in input > in hand
    if (inputLetterCount > handLetterCount) {
      return false;
    }
  }

  // if after for-loop, no char count in input > in hand, return true
  return true;
};

export const scoreWord = (word) => {
  // initialize variable score to hold word's score
  let score = 0

  // turn input into all uppercase
  const wordUpperCase = word.toUpperCase();

  // build arrays of letters and points
  const letters = [["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"], 
  ["D", "G"], ["B", "C", "M", "P"], ["F", "H", "V", "W", "Y"], ["K"],
  ["J", "X"], ["Q", "Z"]]
  const points = [1, 2, 3, 4, 5, 8, 10]

  // loop thru letters array and wordUpperCase
  // add points to word's score accordingly
  for (let i = 0; i < letters.length; i++) {
    for (let char of wordUpperCase) {
      if (letters[i].includes(char)) {
        score += points[i]
      }
    }
  }
  
  // add extra 8 points if wordUpperCase is at least 7 char long
  if (wordUpperCase.length >= 7) {
    score += 8;
  }

  // console.log(score)
  // return updated score
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
