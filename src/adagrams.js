export const drawLetters = () => {
  // initialize object to hold letter frequency table
  const letterFreqs = {
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

  // fill letterPool array with all the letters
  const letterPool = [];

  for (const [key, value] of Object.entries(letterFreqs)) {
    for (let i = 1; i < value + 1; i++) {
      letterPool.push(key);
    }
  }

  // draw letters into hand array
  let hand = [];

  for (let i = 0; i < 10; i++) {
    let selector = Math.random() * letterPool.length;

    let letter = letterPool.splice(selector, 1)[0];

    hand.push(letter);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let handCopy = lettersInHand;

  for (let i = 0; i < input.length; i++) {
    let letter = input[i];

    if (handCopy.includes(letter)) {
      let index = handCopy.indexOf(letter);
      handCopy.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (!word) {
    return 0;
  }

  const scoreChart = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  };

  let score = 0;

  if (word.length >= 7) {
    score += 8;
  }

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    for (const [key, value] of Object.entries(scoreChart)) {
      if (value.includes(letter.toUpperCase())) {
        score += parseInt(key);
        console.log(score);
      }
    }
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave
  // initialize variable largestWord = ""
  // initialize variable largestWordScore = 0
  // for word in words:
  //    wordScore = scoreWord(word)
  //    if wordScore > largestWordScore:
  //        largestWord = word
  //        largestWordScore = wordScore
  //    elif wordScore == largestWordScore:
  //        if len(largestWord) == 10:
  //            largestWord = largestWord;
  //        elif len(word) == 10:
  //            largestWord = word;
  //        elif len(word) < len(largestWord):
  //            largestWord = word;
  //        elif len(largestWord) < len(word):
  //            largestWord = largestWord;
};
