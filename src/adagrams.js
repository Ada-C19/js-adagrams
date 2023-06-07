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
  Z: 1,
};
export const drawLetters = () => {
let lettersList = [];
let letterPool = { ...LETTER_POOL };

while (lettersList.length < 10) {

const weightedLetters = [];
for (const [letter, count] of Object.entries(letterPool)) {
for (let i = 0; i < count; i++) {
        weightedLetters.push(letter)
      }
    }
const selectedLetter = weightedLetters[Math.floor(Math.random() * weightedLetters.length)];
    letterPool[selectedLetter] -= 1

if (letterPool[selectedLetter] == 0) {
delete letterPool[selectedLetter]
    }
    lettersList.push(selectedLetter)
  }
  return lettersList
};



export const usesAvailableLetters = (word, letterBank) => {

let bankCopy = letterBank.slice();
let wordUpper = word.toUpperCase();

  for (let i = 0; i < wordUpper.length; i++) {
  let letter = wordUpper[i];
  if (!bankCopy.includes(letter) || bankCopy.indexOf(letter) === -1) {
  return false;
          } else {
            bankCopy.splice(bankCopy.indexOf(letter), 1);
          }
        }
  return true;
      };

      export const scoreWord = (word) => {
let points = 0;
let uppercaseWord = word.toUpperCase();

for (let i = 0; i < uppercaseWord.length; i++) {
let letter = uppercaseWord[i];
if (['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].includes(letter)) {
        points += 1;
      } else if (['D', 'G'].includes(letter)) {
        points += 2;
      } else if (['B', 'C', 'M', 'P'].includes(letter)) {
        points += 3;
      } else if (['F', 'H', 'V', 'W', 'Y'].includes(letter)) {
        points += 4;
      } else if (letter === 'K') {
        points += 5;
      } else if (['J', 'X'].includes(letter)) {
        points += 8;
      } else if (['Q', 'Z'].includes(letter)) {
        points += 10;
      }
    }

if ([7, 8, 9, 10].includes(word.length)) {
      points += 8;
    }

return points;
  };

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let highScoringWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordScore = scoreWord(word);

    if (wordScore > highestScore) {
      highestScore = wordScore;
      highScoringWords = [word];
    } else if (highestScore === wordScore) {
      highScoringWords.push(word);
    }
  }
  if (highScoringWords.length === 1) {
    return { word: highScoringWords[0], score: highestScore };
}

let tenLetterWords = highScoringWords.filter(word => word.length === 10);

if  (tenLetterWords.length === 1) {
  return { word: tenLetterWords[0], score: highestScore };

} else if (tenLetterWords.length > 1) {
  tenLetterWords.sort((a, b) => a.length - b.length);
  return { word: tenLetterWords[0], score: highestScore };
}

highScoringWords.sort((a, b) => a.length - b.length);
return { word: highScoringWords[0], score: highestScore }
};