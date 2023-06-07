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

// drawLetters();
export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  let handCopy = lettersInHand;

  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    // console.log(`letter is {letter}`);

    if (handCopy.includes(letter)) {
      let index = handCopy.indexOf(letter);
      handCopy.splice(index, 1);
    } else {
      return false;
    }

    console.log(`handCopy is now ${handCopy}`);
  }

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
