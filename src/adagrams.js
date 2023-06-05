
export const drawLetters = () => {
  const letter_bag = {
    "A": 9,
    "B": 2,
    "C": 2,
    "D": 4,
    "E": 12,
    "F": 2,
    "G": 3,
    "H": 2,
    "I": 9,
    "J": 1,
    "K": 1,
    "L": 4,
    "M": 2,
    "N": 6,
    "O": 8,
    "P": 2,
    "Q": 1,
    "R": 6,
    "S": 4,
    "T": 6,
    "U": 4,
    "V": 2,
    "W": 2,
    "X": 1,
    "Y": 2,
    "Z": 1,
  }
  let letter_list = new Array()
  let total_letter = 0
  for (const [key, value] of Object.entries(letter_bag)) {
    for (let i = 0; i < value; i++) {
      letter_list.push(key);
    }
    total_letter += value
  }
  let final_letter_choice = new Array()
  for (let i = 0; i < 10; i++) {
    let random_index = Math.floor(Math.random() * (total_letter) + 1)
    final_letter_choice.push(letter_list[random_index - 1])
    letter_list.splice(random_index, 1)
    total_letter = total_letter - 1
  }
  return final_letter_choice
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

const letters = drawLetters()
console.log(letters)
