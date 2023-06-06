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
    const letterScores = {
        A: 1,
        B: 3,
        C: 3,
        D: 2,
        E: 1,
        F: 4,
        G: 2,
        H: 4,
        I: 1,
        J: 8,
        K: 5,
        L: 1,
        M: 3,
        N: 1,
        O: 1,
        P: 3,
        Q: 10,
        R: 1,
        S: 1,
        T: 1,
        U: 1,
        V: 4,
        W: 4,
        X: 8,
        Y: 4,
        Z: 10,
    };

    if (!word || word === '') {
        return 0;
    }

    let points = 0;
    word = word.toUpperCase();

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) in letterScores) {
            points += letterScores[word.charAt(i)];
        }
    }

    if (word.length > 6) {
        points += 8;
    }

    return points
};

export const highestScoreFrom = (words) => {
    if (!words) {
        return 0;
    }

    let bestWord = '';
    let bestScore = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let score = scoreWord(word);

        if (score > bestScore) {
            bestWord = word;
            bestScore = score;
        } else if (score == bestScore) {
            if (bestWord.length !== 10 && word.length === 10) {
                bestWord = word;
                bestScore = score;
            } else if (word.length < bestWord.length && bestWord.length !== 10) {
                bestWord = word;
                bestScore = score;
            }
        }
    }

    return {'word': bestWord, 'score': bestScore};
};
