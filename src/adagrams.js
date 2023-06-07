export const drawLetters = () => {
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
      };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const hand = [];
    let letterPool = JSON.parse(JSON.stringify(LETTER_POOL));
    
    while(hand.length < 10) {
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (letterPool[randomLetter] > 0) {
            letterPool[randomLetter] -= 1;
            hand.push(randomLetter);
        }
    }

    return hand;
};


export const usesAvailableLetters = (input, lettersInHand) => {
    // Implement this method for wave 2
        for (let i in input) {
            if (!(lettersInHand.includes(input[i]))) {
                return false;
            } else {
                let index = lettersInHand.indexOf(input[i]);
                lettersInHand.splice(index, 1);
            }
        }
      return true;
  };

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const LETTER_POINTS = {
    'A': 1, 
    'B': 3, 
    'C': 3, 
    'D': 2, 
    'E': 1, 
    'F': 4, 
    'G': 2, 
    'H': 4, 
    'I': 1, 
    'J': 8, 
    'K': 5, 
    'L': 1, 
    'M': 3, 
    'N': 1, 
    'O': 1, 
    'P': 3, 
    'Q': 10, 
    'R': 1, 
    'S': 1, 
    'T': 1, 
    'U': 1, 
    'V': 4, 
    'W': 4, 
    'X': 8, 
    'Y': 4, 
    'Z': 10
    }

    word = word.toUpperCase()
    let score = 0;
    for (let i in word) {
        score += LETTER_POINTS[word[i]];
    }
    if (word.length > 6) {
        score += 8;
    }
    return score;
};


export const highestScoreFrom = (words) => {
    // Implement this method for wave 4
    let wordScores = [];
    let highScorers = [];
    let highScore = 0;
    let shortestWord = 'xxxxxxxxxx';

    for (let i in words) {
        let wordScore = scoreWord(words[i]);
        wordScores.push({word: words[i], score: wordScore});
        if (wordScore > highScore) {
            highScore = wordScore;
        }
    }   

    for (let i in wordScores) {
        if (wordScores[i]['score'] === highScore) {
            highScorers.push(wordScores[i])
        }
    }

    for (let i in highScorers) {
        if (highScorers[i]['word'].length === 10) {
            return wordScores[i];
        } else if (highScorers[i]['word'].length < shortestWord.length) {
            shortestWord = highScorers[i]['word'];
        }
    }
    
    return {word: shortestWord, score: highScore}
  };
