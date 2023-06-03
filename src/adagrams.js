export const drawLetters = () => {
  // Implement this method for wave 1
  let weightedPool = [];
  let numberOfLetters = 0;
  let handOfLetters = [];

  const letterPool = {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3,
    H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6,
    O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4,
    V: 2, W: 2, X: 1, Y: 2, Z: 1
  }

  for (let key in letterPool) {
    for (let i = 0; i <= letterPool[key] - 1; i++) {
      weightedPool.push(key);
    }
  }

  while (numberOfLetters < 10) {
    const index = Math.floor(Math.random() * weightedPool.length)
    const letter = weightedPool[index]
    handOfLetters.push(letter);
    numberOfLetters++;
    weightedPool.splice(weightedPool.indexOf(letter), 1)
  }
  return handOfLetters
}



// export const usesAvailableLetters = (input, lettersInHand) => {
//   // Implement this method for wave 2
// };

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };

/*
def draw_letters():
  import random
  
  
  hand_of_letters = []
  

def uses_available_letters(word, letter_bank):
  word_upper = word.upper()

  for letter in list(word_upper):
      if word_upper.count(letter) == letter_bank.count(letter):
          result = True
      else:
          result = False
  return result


def score_word(word):
  total_score = 0
  score_chart = {
      'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1,
      'N': 1, 'R': 1, 'S': 1, 'T': 1, 'D': 2, 'G': 2,
      'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4,
      'V': 4, 'W': 4, 'Y': 4, 'K': 5, 'J': 8, 'X': 8,
      'Q': 10, 'Z': 10

  }
  for str in word:
      str = str.upper()
      total_score += score_chart[str]
  if len(word) >= 7:
      total_score += 8
  return total_score


def get_highest_word_score(word_list):
  highest_word_score = 0
  counter = 0
  best_word = word_list[counter]

  for word in word_list:
      score = score_word(word_list[counter])

      if score > highest_word_score:
          highest_word_score = score
          best_word = word

      elif score == highest_word_score:
          if len(word) == 10 and len(best_word) != 10:
              best_word = word
          elif len(word) < len(best_word) and len(best_word) != 10:
              best_word = word

      counter += 1

  return (best_word, highest_word_score)
  */
