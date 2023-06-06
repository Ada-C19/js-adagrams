const LETTER_POOL = {
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
};

const POINTS = {
  1:['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2:['D','G'],
  3:['B', 'C', 'M', 'P'],
  4:['F', 'H', 'V', 'W', 'Y' ],
  5:['K'],
  8:['J','X'],
  10:['Q','Z'],
}

const ADD_EIGHT_IF_LENGHT = [7, 8, 9, 10]

const buildPileOfLetters = (dictionary) => {
  //   pile = []
  //   if dictionary == []:
  //       return None
  //   for x,y in dictionary.items():
  //       for i in range(0,y):
  //           pile.append(x)
  //   return pile
  let pile = [];
  if (Object.keys(dictionary)===0) {
    return null;
  }
  for (let [x, y] of Object.entries(dictionary)) {
    for (let i = 0; i < y; i++) {
      pile.push(x);
    }
  }

};

export const drawLetters = () => {
  // Implement this method for wave 1
  let hand = _.sample(buildPileOfLetters(LETTER_POOL), 10);
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
