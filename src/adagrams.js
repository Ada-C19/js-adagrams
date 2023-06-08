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
  for (const letter of input){
    if (!lettersInHandCopy.includes(letter)){
      return false;
    } const index = lettersInHandCopy.indexOf(letter);
    let temp = lettersInHandCopy[lettersInHandCopy.length - 1]  
    lettersInHandCopy[lettersInHandCopy.length - 1] = lettersInHandCopy[index];
    lettersInHandCopy[index]=temp;
    lettersInHandCopy.pop();

  }return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  
  const points =[]
  const scoreChart = {
    A : 1, 
    B : 3, 
    C : 3, 
    D : 2, 
    E : 1, 
    F : 4, 
    G : 2, 
    H : 4, 
    I : 1, 
    J : 8, 
    K : 5, 
    L : 1, 
    M : 3, 
    N : 1, 
    O : 1, 
    P : 3, 
    Q : 10, 
    R : 1, 
    S : 1, 
    T : 1, 
    U : 1, 
    V : 4, 
    W : 4, 
    X : 8, 
    Y : 4, 
    Z : 10
}

if (!word){
   points.push(0)
}

let newWord = word.toUpperCase();

for (const letter of newWord){
  if (letter in scoreChart){
    points.push(scoreChart[letter])
  } 
};
  console.log(points)
let total = points.reduce((sum, num) => sum + num);
console.log(total);
if (word.length >= 7){
  (total += 8);
  }

  return total;
}

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
