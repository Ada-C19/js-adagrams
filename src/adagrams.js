export const drawLetters = () => {
  // Implement this method for wave 1
    let lettersDrawn = [];
    const LETTER_POOL = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];


    // if letter.count < letter.count {add letter to lettersDrawn}
    while (lettersDrawn.length < 10) {
      let letter = LETTER_POOL[Math.floor(Math.random()*LETTER_POOL.length)];
      lettersDrawn.push(letter);
      LETTER_POOL.pop(letter);
    };
    
    return lettersDrawn
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // if the letter in input is in lettersInHand pop that letter out else return false
  let letter_frequency = [];
  for (let letter of lettersInHand){
    letter_frequency.push(letter);
  };
  for (let letter of input){
    if (letter_frequency.includes(letter)){
      letter_frequency.pop(letter);
    } else {
      return false;
    };
  };

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;

  if (word === false){
    return score;
  }

  if (word.length >= 7) {
    score += 8;
  };
  for (let letter of word.toUpperCase()) {
    switch (letter) {
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
      case "L":
      case "N":
      case "R":
      case "S":
      case "T":
        score += 1
        break;
      case "D":
      case "G":
        score += 2
        break;
      case "B":
      case "C":
      case "M":
      case "P":
        score += 3
        break;
      case "F":
      case "H":
      case "V":
      case "W":
      case "Y":
        score += 4
        break;
      case "K":
        score += 5
        break;
      case "J":
      case "X":
        score += 8
        break;
      case "Q":
      case "Z":
        score += 10
        break;
    };
  };
  return score
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  //
};
