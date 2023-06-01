export const drawLetters = () => {
  // Implement this method for wave 1
  const letters= []
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
    Z: 1
  }
  while (letters.length <10){
    const keys = Object.keys(letterPool);
    const len = keys.length;
    const rnd = Math.floor(Math.random() * len);
    const key = keys[rnd];

    if (letterPool[key] > 0){
      letterPool[key]-=1;
    }else{
      continue;
    }
  

    letters.push(key);

  }
  return letters;


};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandCopy = [...lettersInHand];
  for (const letter in input){
    if (lettersInHandCopy.includes(letter){
      const index = lettersInHandCopy.indexOf(key);
      if (index > -1){
        lettersInHandCopy.splice(index,1)
      }
    }
    return lettersInHandCopy
  }
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
