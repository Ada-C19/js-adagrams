export const drawLetters = () => {
  var letters = {
    'A':9, 'B':2, 'C':2, 'D':4, 'E':12, 'F':2, 'G':3, 'H':2,
    'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 
    'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 
    'Y': 2, 'Z': 1
  };
  let pieces = [];
  let count = 98;

  for(let i = 0; i < 10; i++){
    let rand_piece = Math.floor(Math.random() * count+1);
    let key = weighted(letters, rand_piece);
    pieces.push(key);
    
    letters[key] -=1;
    if (letters[key] == 0){
        delete letters[key];
    }
    count -= 1
  }
  return pieces
};
const weighted = (dict, random_piece) => {
  for (let [key, value] of Object.entries(dict)){
    random_piece -= value;
    if (random_piece <= 0){
        return key;
    }
  }
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let new_letter_bank = [];
  for(let i = 0; i < lettersInHand.length; i++){
    new_letter_bank.push(lettersInHand[i]);
  }
  for(const letter of input){
    if(new_letter_bank.includes(letter)){
      new_letter_bank.splice(new_letter_bank.indexOf(letter), 1);
    } else{
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
}

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
