export const drawLetters = () => {
  // Implement this method for wave 1
  const letters = [
    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
    'B', 'B',
    'C', 'C',
    'D', 'D', 'D', 'D',
    'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
    'F', 'F',
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
    'U', 'U', 'U', 'U',
    'V', 'V',
    'W', 'W',
    'X',
    'Y', 'Y',
    'Z'
];
  let hand = [];
  let letters2 = [...letters];
  while (hand.length < 10) {
    const randomLetter = letters2[Math.floor(Math.random() * letters2.length)];
    hand.push(randomLetter);
    const index = letters2.indexOf(randomLetter);
    letters2.splice(index, 1);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let inputWord = input.toUpperCase();
  const inputLetters = inputWord.split('');

  const handCounts = {};
  for (let letter of lettersInHand) {
    handCounts[letter] = handCounts[letter] ? handCounts[letter] + 1 : 1;
  }
  const inputCounts = {};
  for (let letter of inputLetters) {
    inputCounts[letter] = inputCounts[letter] ? inputCounts[letter] + 1 : 1;
  }

  for (let letter in inputCounts) {
    if (!(letter in handCounts) || inputCounts[letter] > handCounts[letter]) {
        return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const letterScores = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  };  

  let inputWord = word.toUpperCase();
  const inputLetters = inputWord.split('');
  let score = 0;

  if (inputWord.length > 6) {
    score += 8;
  }

  for (let letter of inputLetters) {
    score += letterScores[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
