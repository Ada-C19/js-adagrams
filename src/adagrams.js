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
    Z: 1
}

export const drawLetters = () => {
	const playersHand = []
	const letterBag = []

	for (const [key, value] of Object.entries(LETTER_POOL)){
		for (let i = 0; i < value; i++){
			letterBag.push(key);
		}
	}

	while (playersHand.length < 10) {
		let randomNum = Math.floor(Math.random() * letterBag.length);
		let letterForHand = letterBag[randomNum];
		playersHand.push(letterForHand);
		letterBag.splice(randomNum, 1);
	
	}

	console.log(playersHand);
	return playersHand;

};

export const usesAvailableLetters = (input, lettersInHand) => {
	


};

export const scoreWord = (word) => {
	// Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
	// Implement this method for wave 4
};
