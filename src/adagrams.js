// export default Adagrams;
export default class Adagrams{

  constructor(){
    this.letterDict = {A:9, B:2, C:2, D:4, E:12, F:2, G:3, H:2, I:9, J:1, K:1,
      L:4, M:2, N:6, O:8, P:2, Q:1, R:6, S:4, T:6, U:4, V:2, W:2, X:1,
      Y:2,Z:1}
    
    this.letterScores = {A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5,
        L:1, M:3, N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8,
        Y:4,Z:10}
  }

// const
  letterPool = ()=> {
    let letters = [];
    for (let letter in this.letterDict){
      let num = this.letterDict[letter];
      for (let i = 1; i<=num; i++){
        letters.push(letter);
      }
    }
    return letters;
  };



  // export const 
  drawLetters = () => {

    const letters= this.letterPool()
    const lettersForTurn = []

    for (let i=0; i<10 ; i++){
      const randomIndex = [Math.floor(Math.random()*letters.length)];
      lettersForTurn.push(letters[randomIndex]);
      letters.splice(randomIndex,1);
    }
    return lettersForTurn;
  };

  // export const 
  usesAvailableLetters = (input, lettersInHand) => {
    // Implement this method for wave 2
    const hashHandLetters= {}
    for (let letter of lettersInHand) {

      if (letter in hashHandLetters) {
        hashHandLetters[letter] += 1;
      } else {
        hashHandLetters[letter] = 1;
      }
    }
    for (let letter of input){

      if (letter in hashHandLetters){
        hashHandLetters[letter]-=1;
        if (hashHandLetters[letter]===0){
          delete hashHandLetters[letter];
        }
      }else{
        return false;
      }
    }
    return true;
  };


  // export const 
  scoreWord = (word) => {
    // Implement this method for wave 3
    let score = 0;
    if (!word){
      return score
    }
    // const WORD = word.toUpperCase();
    for (let letter of word){
      letter = letter.toUpperCase();
      score += this.letterScores[letter];
    }

    if (word.length>=7){
      score +=8;
    }
    return score ;
  };

  // export const 
  highestScoreFrom = (words) => {
    // Implement this method for wave 4
    const winningWord = {word:" " , score:0};
    for (let word of words){
      let score = this.scoreWord(word);
      let len = word.length
      let winnerLen = winningWord.word.length

      if (score >winningWord.score){
        winningWord.score= score;
        winningWord.word = word;

      }else if (score===winningWord.score){

        if (len===10 && winnerLen<10){
          winningWord.score= score;
          winningWord.word = word;

        }else if (len<winningWord.word.length && winnerLen<10){
          winningWord.score= score;
          winningWord.word = word;
        }
      }
    }
    return winningWord;
  };
}
