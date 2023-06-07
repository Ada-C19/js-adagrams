export const drawLetters = () => {                                                                     
  const letterPool = {
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
};
    let poolList = [];
    let playerHand = [];

    for (const [letter, count] of Object.entries(letterPool)) {
      for (let i = 0; i < count; i++) {
        poolList.push(letter);
      }
    }

    while (playerHand.length < 10){  
        let randomIndex = Math.floor(Math.random() * poolList.length);
        const [selectedLetter] = poolList.splice(randomIndex, 1);
        playerHand.push(selectedLetter);
  } return playerHand;

};


export const usesAvailableLetters = (input, lettersInHand) => {
  const copiedArray = [...lettersInHand];
  input = input.toUpperCase()
  const lettersInHandCount = {}

  for (let i = 0; i < copiedArray.length; i++) {
      const letter = copiedArray[i];
      if (letter in lettersInHandCount){
          lettersInHandCount[letter] += 1;
    }  else {
          lettersInHandCount[letter] = 1;
    } 
  }

  for (let i = 0; i < input.length; i++){
      const letter = input[i];
      if (letter in lettersInHandCount && lettersInHandCount[letter] > 0) {
          lettersInHandCount[letter] -= 1;
        }  else {
          return false;
        }
  }
  return true;
};



export const scoreWord = (word) => {
  const letterValues = {
    'A': 1, 
    'E': 1, 
    'I': 1, 
    'O': 1, 
    'U': 1, 
    'L': 1, 
    'N': 1, 
    'R': 1, 
    'S': 1, 
    'T': 1,
    'D': 2, 
    'G': 2,
    'B': 3, 
    'C': 3, 
    'M': 3, 
    'P': 3,
    'F': 4, 
    'H': 4, 
    'V': 4, 
    'W': 4, 
    'Y': 4,
    'K': 5,
    'J': 8, 
    'X': 8,
    'Q': 10, 
    'Z': 10
}   
    let cleanedWord = ''
    for (let letter of word) {
        if (letter.match(/[a-zA-Z]/)) {
            cleanedWord += letter.toUpperCase()      
          }
        }

    word = cleanedWord;
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
        let points = letterValues[letter]
        score += points 
    }
    if (word.length >= 7) {
        score += 8
    } return score
};

export const highestScoreFrom = (words) => {
  const scoreObj = {} 
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let score = scoreWord(word);
      if (score in scoreObj) {
          scoreObj[score].push(word)
    } else {
          scoreObj[score] = [word]
      } 
    }
  
    let winningScore = Math.max(...Object.keys(scoreObj).map(Number));
    let bestWord = scoreObj[winningScore][0];
  
    for (let word of scoreObj[winningScore]) {
      if (word.length === 10) {
        return {'score': winningScore, 'word': word};
      }
      if (word.length < bestWord.length) {
        bestWord = word
      
      }
    }
  return { 'score': winningScore, 'word': bestWord};
}; 

