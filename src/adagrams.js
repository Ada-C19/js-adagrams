// helper
const countOccurrences = function (array, element) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      count++;
    }
  }
  return count;
};
// helper
const checkForValues = (object, valueOccurernces, letter) =>
  object[letter] >= valueOccurernces;

export class Adagrams {
  constructor() {
    this.letterhand = 10;
    this.letterPool = {
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
    this.scoreValues = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10,
    };
    this.alphabet = Object.keys(this.scoreValues);
  }

  generateRandomLetter() {
    return this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
  }
  
  drawLetters = () => {
    const handList = [];
    while (handList.length < this.letterhand) {
      const randomLetter = this.generateRandomLetter();
      handList.push(randomLetter);
      const valueInArray = countOccurrences(handList, randomLetter);
      const valueEnoughTimes = checkForValues(
        this.letterPool,
        valueInArray,
        randomLetter
      );

      if (valueEnoughTimes === true) {
        continue;
      } else {
        handList.pop();
      }
    }
    
    return handList;
  };

  usesAvailableLetters = (input, lettersInHand) => {
    const upperWord = input.toUpperCase();
    for (const letter of upperWord) {
      if (!lettersInHand.includes(letter)) {
        return false;
      } else if (
        countOccurrences(upperWord, letter) >
        countOccurrences(lettersInHand, letter)
      ) {
        return false;
      }
    }
    return true;
  };
  scoreWord = (word) => {
    const WordUpper = word.toUpperCase();
    const wordLength = word.length;
    let totalScore = 0;
    for (const letter of WordUpper) {
      if (letter in this.scoreValues) {
        totalScore += this.scoreValues[letter];
      }
    }
    if (wordLength > 6) {
      totalScore += 8;
    }
    return totalScore;
  };

  // helper function -
  // * returns true if list1 ranks higher than list2
  higherThan = (list1, list2) => {
    const scoreWord1 = list1[1];
    const scoreWord2 = list2[1];
    if (scoreWord1 === scoreWord2) {
      const lengthWord1 = list1[0].length;
      const lengthWord2 = list2[0].length;

      if (lengthWord1 === 10 && lengthWord2 !== 10) {
        return true;
      } else if (lengthWord2 === 10 && lengthWord1 !== 10) {
        return false;
      }
      return lengthWord1 < lengthWord2;
    }
    return scoreWord1 > scoreWord2;
  };

  highestScoreFrom = (words) => {
    let bestWord = null;
    for (const word of words) {
      let currentWord = [word, this.scoreWord(word)];
      if (bestWord === null || this.higherThan(currentWord, bestWord)) {
        bestWord = currentWord;
      }
    }
    const correct = {
      word: bestWord[0],
      score: bestWord[1],
    };
    return correct;
  };

}

