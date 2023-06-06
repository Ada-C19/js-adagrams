const LETTER_POOL = {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
}

const SCORES = {
  1: 'AEIOULNRST',
  2: 'DG',
  3: 'BCMP',
  4: 'FHVWY',
  5: 'K',
  8: 'JX',
  10: 'Q',
}

export const drawLetters = () => {
  // Implement this method for wave 1
  const hand = []
  while (hand.length < 10) {
    const random = Math.floor(Math.random() * 25)
    const letter = Object.keys(LETTER_POOL)[random]
    const occurance = hand.filter((l) => l === letter).length
    if (occurance < LETTER_POOL[letter]) hand.push(letter)
  }
  return hand
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const map = {}
  const handMap = {}

  for (const letter of input.toUpperCase()) {
    if(map[letter]) map[letter]++; 
    else map[letter] = 1; 
  }

  lettersInHand.forEach((letter) => {
    if(handMap[letter]) handMap[letter]++; 
    else handMap[letter] = 1; 
  })

  for (const key in map) {
    if (!handMap[key] || map[key] > handMap[key]) return false 
  }
  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0
  if (word) {
    const scoreMap = {}
    for (const key in SCORES) {
      for (const letter of SCORES[key]) {
        scoreMap[letter] = Number(key)
      }
    }        
    for (const letter of word.toUpperCase()) {
      score += scoreMap[letter]
    }
    if (6 < word.length && word.length < 11) score += 8
  }
  return score
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
