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
    
    console.log(lettersDrawn)
    return lettersDrawn
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // if the letter in input is in lettersInHand pop that letter out else return false
  letter_frequency = [];
  for (letter of lettersInHand){
    letter_frequency.push(letter);
  };
  for (letter of input){
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
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
