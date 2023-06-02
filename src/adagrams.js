
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
  
  totalScore = 0

  letterSet1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  letterSet2 = ["D", "G"];
  letterSet3 = ["B", "C", "M", "P"];
  letterSet4 = ["F", "H", "V", "W", "Y"];
  letterSet5 = ["K"];
  letterSet6 = ["J", "X"];
  letterSet7 = ["Q", "Z"];
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
