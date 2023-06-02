const letterPool = {
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

//helper function
const randomSelectedLetter = () =>{
    const lettersAlphabet = Object.keys(letterPool);
    const randomIndex = Math.floor(Math.random()*lettersAlphabet.length-1);
    const randomLetter = lettersAlphabet[randomIndex];
    return randomLetter;
}
export const drawLetters = () => {
  // Implement this method for wave 1
    let hand= [];
    let randomLetter = '';

    while (hand.length < 10){
        randomLetter = randomSelectedLetter();
        const countLetter= hand.filter(i => i === randomLetter).length;
        if(countLetter < letterPool[randomLetter]){
            hand.push(randomLetter);
        }
    }
    return hand;
};

//helper function
const wordLetterDictObject=(dataToConvert)=>{
  const dictObjectConvert = {}

  for(let elem of dataToConvert){
      if(elem in dictObjectConvert){
          dictObjectConvert[elem] += 1;
      }else{
          dictObjectConvert[elem] = 1;
      }
  }
  return dictObjectConvert;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
    let valid = true;
    const wordUpper = input.toUpperCase();
    const dictWord = wordLetterDictObject(wordUpper);
    const dictLettersInHand = wordLetterDictObject(lettersInHand);

    for(let elem in dictWord){
        if(!(elem in dictLettersInHand) || dictWord[elem] > dictLettersInHand[elem]){
            valid = false;
            break;
        }
    }
    return valid;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const dictScore = {
    A:1,
    B:3,
    C:3,
    D:2,
    E:1,
    F:4,
    G:2,
    H:4,
    I:1,
    J:8,
    K:5,
    L:1,
    M:3,
    N:1,
    O:1,
    P:3,
    Q:10,
    R:1,
    S:1,
    T:1,
    U:1,
    V:4,
    W:4,
    X:8,
    Y:4,
    Z:10
  }

  //score variable to store the points earned
  let result = 0;

  //wordUpper variable converts word variable into uppercase letters
  const wordUpper = word.toUpperCase();

  for(let letter of wordUpper){
      for(let[letters, score] of Object.entries(dictScore)){
          if(letters.includes(letter)){
              result += score;
          }
      }
  }

  if(word.length >= 7 && word.length <=10){
      result += 8;
  }

  return result;
};

export const highestScoreFrom = (words) => {
// Implement this method for wave 4
  let highestScoreResult= {};
  const scoreWordsDict = {};
  let score = 0;

  for(let word of words){
      score = scoreWord(word);
      scoreWordsDict[word]=score;
  }

  //get the highest value
  let highestValue = Object.values(scoreWordsDict)[0];
  for(const score of Object.values(scoreWordsDict)){
      if(score > highestValue){
          highestValue = score;
      }
  }
  //get an array of highest words
  let listHighestWords = []
  for(const[word, score] of Object.entries(scoreWordsDict)){
      if(score === highestValue){
          listHighestWords.push(word);
      }
  }

  //get the best word from the list of highest words
  let bestWord = listHighestWords[0];
  for(let word of listHighestWords){
      if(word.length === 10){
          bestWord = word;
          break;
      }else if(word.length < bestWord.length){
          bestWord = word;
      }
  }
  highestScoreResult = {word:bestWord, score: highestValue};
  return highestScoreResult;
};
