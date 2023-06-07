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

  const letterPool = [];
  // letterPool.length = 0;

  // fill letterPool array with all the letters
  for (const [key, value] of Object.entries(letterFreqs)) {
    for (let i = 1; i < value + 1; i++) {
      letterPool.push(key);
    }
  }

  let hand = [];

  // let len = letterPool.length;

  // draw letters
  for (let i = 0; i < 10; i++) {
    let selector = Math.random() * letterPool.length;

    let letter = letterPool.splice(selector, 1)[0];

    console.log(
      `letter spliced: ${letter}. resulting letterPool: ${letterPool}. letterPool length is now ${letterPool.length}`
    );

    hand.push(letter);
  }
  // console.log(letterPool);
  // console.log(hand);
  console.log(hand);
  return hand;
};

// drawLetters();
export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
