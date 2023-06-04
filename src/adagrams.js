// export const drawLetters = () => {
//   const letters = [
//   'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
//   'B', 'B',
//   'C', 'C',
//   'D', 'D', 'D', 'D',
//   'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E','E',
//   'F','F',
//   'G', 'G', 'G',
//   'H', 'H',
//   'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 
//   'J',
//   'K',
//   'L', 'L', 'L', 'L',
//   'M', 'M',
//   'N', 'N', 'N', 'N', 'N', 'N',
//   'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
//   'P', 'P',
//   'Q',
//   'R', 'R', 'R', 'R', 'R', 'R',
//   'S', 'S', 'S', 'S',
//   'T', 'T', 'T', 'T', 'T', 'T',
//   'U',  'U', 'U', 'U',
//   'V', 'V',
//   'W', 'W',
//   'X',
//   'Y', 'Y',
//   'Z'
//   ]

  
//   const handOfCards = [] 
  
//   for (let i = 0; i < 10; i ++) {
//     let randomLetter = letters[Math.floor(Math.random()*letters.length)];
//     handOfCards.push(randomLetter);
  
//     let index = letters.indexOf(randomLetter);
//     letters.splice(index, 1);
//   }
  
//   return handOfCards;
// };


// export const usesAvailableLetters = (input, lettersInHand) => {
//     // Implement this method for wave 2
//   for (const letter of input) {
//     const upperLetter = letter.toUpperCase();
//     console.log(upperLetter);

//     if (!(lettersInHand.includes(upperLetter))) {
//       return false;
//     }
//     else {
//       let index = lettersInHand.indexOf(upperLetter);
//       lettersInHand.splice(index, 1);
//     }
//   }return true;
// };


// // const drawn = ["D", "O", "X", "X", "X", "X", "X", "X", "X", "X"];
// // const word = "DOG";

// // console.log(usesAvailableLetters(word, drawn))

// export const scoreWord = (word) => {
//     // Implement this method for wave 3
//   const scoreChart = {
//     'A': 1,
//     'E': 1,
//     'I': 1,
//     'O': 1,
//     'U': 1,
//     'L': 1,
//     'N': 1, 
//     'R': 1,
//     'S': 1,
//     'T': 1,
//     'D': 2,
//     'G': 2,
//     'B': 3,
//     'C': 3,
//     'M': 3, 
//     'P': 3,
//     'F': 4,
//     'H': 4,
//     'V': 4,
//     'W': 4,
//     'Y': 4,
//     'K': 5,
//     'J': 8,
//     'X': 8,
//     'Q': 10,
//     'Z': 10
//   };

//   let score = 0; 

//   if (word.length === 0) {
//     return score;
//   }
  
//   if (word.length >= 7 && word.length <11) {
//     score += 8;
//   }
//   for (const letter of word) {
//     const letterUpper = letter.toUpperCase();
//     score += scoreChart[letterUpper];
//     }

//   return score;
//   };



// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
  






const scoreWord = (word) => {
      // Implement this method for wave 3
    const scoreChart = {
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
    };
  
    let score = 0; 
  
    if (word.length === 0) {
      return score;
    }
    
    if (word.length >= 7 && word.length <11) {
      score += 8;
    }
    for (const letter of word) {
      const letterUpper = letter.toUpperCase();
      score += scoreChart[letterUpper];
      }
  
    return score;
    };




  const highestScoreFrom = (words) => {
    // Implement this method for wave 4
    let winningWord = "";
    let winningScore = 0;
  
    for (const word of words) {
      const score = scoreWord(word);
      if (score > winningScore) {
        winningScore = score;
        console.log(winningScore);
        winningWord = word;

      }else if (score === winningScore) {
        if (word.length === 10 && winningWord.length !== 10) {
          winningWord = word
        }else if (word.length < winningWord.length) {
          winningWord = word
        }
        }
      }
      const winningObject = {};
      winningObject[winningWord]= winningScore;
      
      return winningObject;
    };
   
    // for (const score of scores) {
    //   if (score === maxScore) {
    //     winningWords.push(score);
    //   }
    // }
    // if (winningWords.length === 1) {
    //   const winningWord = winningWords[0]
    // }else {
    //   for (const tieWord in winningWords) {
    //     if (tieWord.length === 10) {
    //       const winningWord = tieWord
    //     }
    //   }
    // }
  

const words = ["AAAA", "AAA", "BBB", "BBBB", "BBBB"]
console.log(highestScoreFrom(words))
