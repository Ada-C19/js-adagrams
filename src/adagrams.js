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
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
