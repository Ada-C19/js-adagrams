export const drawLetters = () => {
    const letterPool = {
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

    let letters = [];
    const keys = Object.keys(letterPool);
    while (letters.length < 10) {
        let letter = keys[Math.floor(Math.random() * keys.length)];
        if (letterPool[letter] > 0) {
            letters.push(letter);
            letterPool[letter]--;
        }
    }

    return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
    let letterBank = {};
    input = input.toUpperCase();

    for (let i = 0; i < lettersInHand.length; i++) {
        if (!(lettersInHand[i] in letterBank)) {
            letterBank[lettersInHand[i]] = 1;
        } else {
            letterBank[lettersInHand[i]]++;
        }
    }

    for (let i = 0; i < input.length; i++) {
        if (!(input.charAt(i) in letterBank) || letterBank[input.charAt(i)] == 0) {
            return false;
        }

        letterBank[input.charAt(i)]--;
    }

    return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
