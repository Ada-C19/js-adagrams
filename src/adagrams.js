export const drawLetters = () => {
  const letters = [
  'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
  'B', 'B',
  'C', 'C',
  'D', 'D', 'D', 'D',
  'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E','E',
  'F','F',
  'G', 'G', 'G',
  'H', 'H',
  'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 
  'J',
  'K',
  'L', 'L', 'L', 'L',
  'M', 'M',
  'N', 'N', 'N', 'N', 'N', 'N',
  'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
  'P', 'P',
  'Q',
  'R', 'R', 'R', 'R', 'R', 'R',
  'S', 'S', 'S', 'S',
  'T', 'T', 'T', 'T', 'T', 'T',
  'U',  'U', 'U', 'U',
  'V', 'V',
  'W', 'W',
  'X',
  'Y', 'Y',
  'Z'
  ]

  
  const handOfCards = [] 
  
  for (let i = 0; i < 10; i ++) {
    let randomLetter = letters[Math.floor(Math.random()*letters.length)];
    handOfCards.push(randomLetter);
  
    let index = letters.indexOf(randomLetter);
    letters.splice(index, 1);
  }
  
  return handOfCards;
};

// export const usesAvailableLetters = (input, lettersInHand) => {
//   // Implement this method for wave 2
//   for (letter of lettersInHand) {
//     if (!(letter in input)) {
//       // return false;
//       console.log('hello');
//     } else if (letter in lettersInHand) {
//       let index = lettersInHand.indexOf(letter);
//       lettersInHand.splice(index, 1);
//     }
//   }
// };


// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
