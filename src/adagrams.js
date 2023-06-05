
const LETTER_POOL = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 };

export const drawLetters = () => {

  // randomly choose a letter based on their weight
  function randomChooseLetter(LETTER_POOL) {
    const letters = Object.keys(LETTER_POOL);
    const weights = Object.values(LETTER_POOL);

    const totalWeights = weights.reduce((sum, weight) => sum + weight, 0);
    // generate a random weight between 0 to totalWeights
    const randomWeight = Math.random() * totalWeights;

    let weightSum = 0;
    // in the original weights array, find where the randomWeight fall between
    // and return the letter based on the index
    for (let i = 0; i < weights.length; i++) {
      weightSum += weights[i];
      if (randomWeight < weightSum) {
        return letters[i];
      }
    }
  }

  // check if not drawing too many letter
  // then append letter to the player's letter pool
  const randomLetters = [];
  for (let i = 0; randomLetters.length < 10; i++) {
    const randomChar = randomChooseLetter(LETTER_POOL);
    const charCount = randomLetters.filter((char) => (char === randomChar)).length;
    if (charCount < LETTER_POOL[randomChar]) {
      randomLetters.push(randomChar);
    }
  }

  return randomLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {

  for (let char of input) {
    // return false if input string has a letter is not present in lettersInHand
    if (!lettersInHand.includes(char)) {      
      return false;
    } else {
      // make sure all letters from the input string have the right qty
      lettersInHand.splice(lettersInHand.indexOf(char), 1);
    }
  }
  return true;
};

const scoreChart = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};
export const scoreWord = (word) => {
  let totalScore = 0;
  // if the word length is 7,8,9, or 10, gets an additional 8 points
  if (word.length > 6 && word.length < 11) {
    totalScore += 8;
  }
  for (let i = 0; i < word.length; i++) {
    for (const [score, letters] of Object.entries(scoreChart)) {
      if (letters.includes(word[i].toUpperCase())) {
        totalScore += parseInt(score);
      }
    }
  }
  return totalScore;

};

export const highestScoreFrom = (words) => {
  let highestScore = -1;
  let highestWords = [];
  let result = {};
  let shortestWord = "";
  for (const word of words) {
    // calculate and store highest score and append its word into array
    if (scoreWord(word) >= highestScore) {
      highestScore = (scoreWord(word));
      highestWords.push(word);
    }
    if (highestWords.length === 1) {
      result['score'] = highestScore;
      result['word'] = highestWords[0]
      return result;
    }
    const lengthTen = highestWords.filter((n) => n.length === 10);
    if (lengthTen.length > 0) {
      result['score'] = highestScore;
      result['word'] = lengthTen[0];
    } else {
      shortestWord = highestWords.reduce(function(a, b){
        return a.length <= b.length ? a : b;
      }, "");
      result['score'] = highestScore;
      result['word'] = shortestWord;
    }
  }
  return result;
};
