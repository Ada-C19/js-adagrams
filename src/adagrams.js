export const drawLetters = () => {
    const letterPool = {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
      N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
    };
  
    const hand = [];
  
    for (let i = 0; i < 10; i++) {
      // Create a list from the keys of our letter pool
      let lettersArr = Object.keys(letterPool)
      
      // as long as there are letters
    
      if (lettersArr.length > 0) {
        // Create a random index
        let randomIndex = Math.floor(Math.random() * Object.keys(letterPool).length);
        // Create a random letter from the list of letters
        // using the random index
        let selectedLetter = lettersArr[randomIndex];

        // take the randomly selected letter and add to our hand 
        if (letterPool[selectedLetter] > 0) {
          hand.push(selectedLetter);
          // subtract the letter from our letter pool, decreasing count of letters
          letterPool[selectedLetter] -= 1
        } else if (letterPool[selectedLetter] === 0) {
          delete letterPool[selectedLetter]
        }
      }



  
      // for (const letter in letterPool) {
      //   randomIndex -= letterPool[letter];
      //   if (randomIndex <= 0) {
      //     selectedLetter = letter;
      //     break;
      //   }
      // } 
  
      // hand.push(selectedLetter);
    }
  
    return hand;
  
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
