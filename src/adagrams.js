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
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
