const LETTER_POOL = {
  A: 9,B: 2,C: 2,D: 4,E: 12,F: 2,G: 3,H: 2,I: 9,J: 1,K: 1,L: 4,
  M: 2,N: 6,O: 8,P: 2,Q: 1,R: 6,S: 4,T: 6,U: 4,V: 2,W: 2,X: 1,
  Y: 2,Z: 1,
};
const LETTER_SCORE = {
  A: 1,B: 3,C: 3,D: 2,E: 1,F: 4,G: 2,H: 4,I: 1,J: 8,K: 5,L: 1,
  M: 3,N: 1,O: 1,P: 3,Q: 10,R: 1,S: 1,T: 1,U: 1,V: 4,W: 4,X: 8,
  Y: 4,Z: 10,
};


export const drawLetters = () => {
  let newList = []
  for(let key in LETTER_POOL) {
    newList = newList.concat(Array(LETTER_POOL[key]).fill(key))
  }
  let result = []
  for (let i = 0; i<10; i++){
    let randomIndex = Math.floor(Math.random()*newList.length);
    result.push(newList[randomIndex])
    newList.splice(randomIndex, 1)
  }
  return result;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let correctLetters = true;
  for(let char of input){
    let charIndex = lettersInHand.indexOf(char) ;
    if(charIndex !== -1){
      lettersInHand.splice(charIndex, 1)
    }
    else{
      correctLetters = false;
  }
  }
  return correctLetters;
};

export const scoreWord = (word) => {
  let sum = 0;
  word = word.toUpperCase();
  for(let char of word){
    sum += LETTER_SCORE[char];

  }
  if(word.length >6){
    sum += 8;
  }
  return sum;
};

export const highestScoreFrom = (words) => {
  let scoreList = []
  for(let word of words){
    let score = scoreWord(word);
    scoreList.push(score);
  }
  const higestScore = Math.max(scoreList);
  let highestWord;
  for(let word of words){
    if(scoreWord(word)=== higestScore && word.length === 10){
        highestWord = word;
    }
    else{
      let sortedWords = words.sort((x,y) => x.length-y.length)
      for (let word of sortedWords){
        if(scoreWord(word)=== higestScore){
          highestWord = word;
          break;
        }
      }
    }
  }
  let maxWordObj = {}
  maxWordObj[highestWord] = higestScore;
  return maxWordObj;
};
