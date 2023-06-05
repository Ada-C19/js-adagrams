import { LETTER_POOL, LETTER_COST } from './letter-bank-cost';
/*const m = require('./letter-bank-cost');
const LETTER_COST = m.LETTER_COST;
const LETTER_POOL = m.LETTER_POOL;
*/

const randomLetters = letters => {
  const letterBank = [];
  let indexSet = new Set();
  while (indexSet.size < 10) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    if (!indexSet.has(randomIndex)) {
      indexSet.add(randomIndex);
      letterBank.push(letters[randomIndex]);
    }
  }
  return letterBank;
};

export const drawLetters = () => {
  let letters = '';
  for (let [letter, count] of Object.entries(LETTER_POOL)) {
    letters += letter.repeat(count);
  }
  return randomLetters(letters);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  if (input.length > lettersInHand.length || !/^[A-Za-z]*$/.test(input))
    return false;

  let letterBankDict = {};
  for (let letter of lettersInHand) {
    letterBankDict[letter] = (letterBankDict[letter] || 0) + 1;
  }

  for (let letter of input.toUpperCase().trim()) {
    if (!letterBankDict[letter]) return false;
    letterBankDict[letter] -= 1;
  }
  return true;
};

export const scoreWord = word => {
  let score = 0;
  for (let letter of word.toUpperCase().trim()) {
    if (letter in LETTER_COST) score += LETTER_COST[letter];
  }
  if (word.length >= 7) score += 8;
  return score;
};

const highestWords = words => {
  let winners = [];
  let score = 0;
  for (let word of words) {
    let wordScore = scoreWord(word);
    if (wordScore > score) score = wordScore;
    else if (wordScore === score) winners.push(word);
  }
  return winners, score;
};

export const highestScoreFrom = words => {};
