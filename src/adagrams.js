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
	Z: 1,
};

const SCORE_CHART = {
	AEIOULNRST: 1,
	DG: 2,
	BCMP: 3,
	FHVWY: 4,
	K: 5,
	JX: 8,
	QZ: 10,
};

export const drawLetters = () => {
	// Implement this method for wave 1
	const LETTER_POOL_COPY = {
		...LETTER_POOL,
	};
	// Creates array to hold 10 letters
	let handArray = [];
	// letterKeys will hold an array of all of the available letters
	let letterKeys = Object.keys(LETTER_POOL_COPY);

	for (let i = 0; i < 10; i++) {
		// Get random letter from letterKeys array and add to handArray
		let randomIndex = Math.floor(Math.random() * letterKeys.length);
		let randomLetter = letterKeys[randomIndex];
		handArray.push(randomLetter);

		// Decrease the count of letter from hash map LETTER_POOL_COPY
		LETTER_POOL_COPY[randomLetter]--;

		// Checks if letter count is 0
		if (LETTER_POOL_COPY[randomLetter] === 0) {
			// Delete letter key from hash map and remove letter from letterKeys
			delete LETTER_POOL_COPY[randomLetter];
			letterKeys.splice(randomIndex, 1);
		}
	}
	return handArray;
};

export const usesAvailableLetters = (input, lettersInHand) => {
	// Implement this method for wave 2

	// Makes a copy array of lettersInHand
	let lettersInHandCOPY = [...lettersInHand];

	// Iterates over the input string
	for (const letter of input) {
		// Checks if each letter is valid against the draw letters
		if (lettersInHandCOPY.includes(letter)) {
			let letterIndex = lettersInHandCOPY.indexOf(letter);
			lettersInHandCOPY.splice(letterIndex, 1);
		} else {
			return false;
		}
	}
	return true;
};

export const scoreWord = (word) => {
	let score = 0;

	// Iterating through word and SCORE_CHART, calculates score
	for (const letter of word.toUpperCase()) {
		for (const [keys, value] of Object.entries(SCORE_CHART)) {
			if (keys.includes(letter)) {
				score += value;
			}
		}
	}
	// Checks if the length of the word is between 7-10, adding 8 bonus points
	const wordLength = word.length;
	if (wordLength >= 7 && wordLength <= 10) {
		score += 8;
	}

	return score;
};

export const highestScoreFrom = (words) => {
	// Implement this method for wave 4
	let bestWord = '';
	let highestScore = 0;

	for (let i = 0; i < words.length; i++) {
		const currentWord = words[i];
		const currentWordScore = scoreWord(currentWord);

		if (currentWordScore > highestScore) {
			bestWord = currentWord;
			highestScore = currentWordScore;
		} else if (currentWordScore === highestScore) {
			if (currentWord.length === 10 && bestWord.length === 10) {
				bestWord = bestWord;
				highestScore = highestScore;
			} else if (currentWord.length === 10 && bestWord.length !== 10) {
				bestWord = currentWord;
				highestScore = currentWordScore;
			} else if (currentWord.length !== 10 && bestWord.length === 10) {
				bestWord = bestWord;
				highestScore = highestScore;
			} else if (currentWord.length > bestWord.length) {
				bestWord = bestWord;
				highestScore = highestScore;
			} else if (currentWord.length < bestWord.length) {
				bestWord = currentWord;
				highestScore = currentWordScore;
			}
		}
	}

	return { word: bestWord, score: highestScore };
};
