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
// Need to make LETTER_POOL iterable

// const letterPoolArray = Object.entries(LETTER_POOL);

// export const drawLetters = () => {
//   const bigList = [];
//   for (let [letter, quantity] of letterPoolArray) {
//     let letterAndQuantity = letter.repeat(quantity);

//     for (let singleChar of letterAndQuantity) {
//       bigList.push(singleChar);
//     }
//   }

//   let drawOf10Letters = [];
//   let counter = 0;

//   while (counter < 10) {
//     const randomIndex = Math.floor(Math.random() * bigList.length);
//     const randomLetter = bigList[randomIndex];
//     drawOf10Letters.push(randomLetter);
//   }
// };

// drawLetters();
// draw_of_10_letters = []

// while len(draw_of_10_letters) < 10:
//     random_letter = random.choice(big_list)
//     draw_of_10_letters.append(random_letter)
//     big_list.remove(random_letter)
// return draw_of_10_letters
// draw_letters()

// for letter, quantity in LETTER_POOL.items():
//     letter_and_quantity = letter * quantity
//     for single_char in letter_and_quantity:
//         big_list.append(single_char)

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  const LETTER_SCORE = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };

  word = word.toUpperCase();
  let totalScore = 0;
  for (let letter of word) {
    if (word === '') {
      return false;
    } else {
      let letterScore = LETTER_SCORE[letter];
      totalScore += letterScore;
    }
  }

  if (7 <= word.length) {
    totalScore += 8;
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
