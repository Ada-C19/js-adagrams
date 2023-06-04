
const letters = {
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



export const drawLetters = () => {

  //holds letters to draw
  let letterBox = [];


  for (let letter in letters) {
    let freq = letters[letter];
    for (let index = 0; index < freq; index++) {
      letterBox.push(letter);
    }
  }

  //holds the 10 letters
  let letterList = [];

  //loop through letters using the random function and adds elem to the list and removes the elem from the letter_box
  for (let index = 0; index < 10; index++) {
    const random = Math.floor(Math.random() * letterBox.length);
    const element = letterBox[random];
    letterList.push(element);
    letterBox.splice(random, 1);
    
  }
  return letterList;
  
};

export const usesAvailableLetters = (input, lettersInHand) => {

  const letterFrequency = {};

  for (let index = 0; index < lettersInHand.length; index++) {
    const element = lettersInHand[index].toLowerCase();
    //gets the current value, if doesnt exist, return 0, if it exists add 1 to the current value
    letterFrequency[element] = (letterFrequency[element] || 0) + 1;
  }


  for (let index = 0; index < input.length; index++) {
    const element = input[index].toLowerCase();
    if (!letterFrequency[element]) {
      return false;
      
    }
    //keep track of available letters
    else {
      letterFrequency[element] -= 1;
    }
    
  }
  
  return true;
  
};

export const scoreWord = (word) => {
  
  let wordScore = 0

  const letterSet1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  const letterSet2 = ["D", "G"];
  const letterSet3 = ["B", "C", "M", "P"];
  const letterSet4 = ["F", "H", "V", "W", "Y"];
  const letterSet5 = ["K"];
  const letterSet6 = ["J", "X"];
  const letterSet7 = ["Q", "Z"];

  const casedWord = word.toUpperCase();
  //loop through the word and check if any of the letters are in sets and update the score

  if (word === "") {
    return 0;
  }

  for (let letter of casedWord) {
    if (letterSet1.includes(letter)) {
      wordScore += 1;
    }
    if (letterSet2.includes(letter)) {
      wordScore += 2;
    }
    if (letterSet3.includes(letter)) {
      wordScore += 3;
    }
    if (letterSet4.includes(letter)) {
      wordScore += 4;
    }
    if (letterSet5.includes(letter)) {
      wordScore += 5;
    }
    if (letterSet6.includes(letter)) {
      wordScore += 8;
    }
    if (letterSet7.includes(letter)) {
      wordScore += 10;
    }
  }

  if (casedWord.length >= 7) {
    wordScore += 8;
  }
  return wordScore;

};

  

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
