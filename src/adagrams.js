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
    let randPiece = Math.floor(Math.random() * count+1);
    let key = weighted(letters, randPiece);
    pieces.push(key);
    
    letters[key] -=1;
    if (letters[key] == 0){
        delete letters[key];
    }
    count -= 1;
  }
  return pieces;
};

const weighted = (dict, randomPiece) => {
  for (let [key, value] of Object.entries(dict)){
    randomPiece -= value;
    if (randomPiece <= 0){
        return key;
    }
  }
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let newLetterBank = [];
  for(const letter of lettersInHand){
    newLetterBank.push(letter);
  }
  for(const letter of input){
    if(newLetterBank.includes(letter)){
      newLetterBank.splice(newLetterBank.indexOf(letter), 1);
    } else{
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const values = {'A':1, 'E':1, 'I':1, 'O':1, 'U':1, 'L':1, 'N':1, 'R':1, 'S':1, 'T':1,
  'D':2, 'G':2,
  'B':3, 'C':3, 'M':3, 'P':3,
  'F':4, 'H':4, 'V':4, 'W':4, 'Y':4,
  'K': 5,
  'J':8, 'X':	8,  
  'Q':10, 'Z':	10};

  let sum = 0;
  if (word.length == 0){
    return 0;
  }
  if(word.length >= 7){
    sum += 8;
  }
  for(const letter of word){  
    if(values[letter.toUpperCase()]){
      sum += values[letter.toUpperCase()];
    }
  }
  return sum;
};

export const highestScoreFrom = (words) => {
  let maxVal = 0;
  let tempScore = 0;
  let maxWord = "";

  for(const word of words){
    tempScore = scoreWord(word)
    if(maxVal < tempScore){
        maxVal = tempScore;
        maxWord = word;
    }
      else if(maxVal == tempScore){
        if(word.length == 10 && maxWord.length != 10){
          maxWord = word;
        } 
        else if(word.length < maxWord.length && maxWord.length != 10){
          maxWord = word;
        }
      }
  };    
  return {"word": maxWord, "score": maxVal};
};