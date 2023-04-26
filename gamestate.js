class GameState {
    constructor() {
        this.dictionary = null;
        this.nRounds = -1;
        this.correctness = [];
        this.currentRoundNumber = 1;
    };

    setDictionary(dictionary) {
        this.dictionary = dictionary;
        this.nRounds = dictionary.length;
    };

    get questionAnswer() {
        return this.dictionary[this.currentRoundNumber - 1];

    };

    get question() {
        return this.questionAnswer[0];
    }

    get answer() {
        return this.questionAnswer[1];
    }

    nextRound() {
        return this.currentRoundNumber++;
    };

    correctAnswer() {
        return this.correctness.push(true);
    };

    incorrectAnswer() {
        return this.correctness.push(false);
    };

    isFinish() {
        return this.currentRoundNumber >= this.nRounds;
    };

    checkAnswer(givenAnswer) {
        return this.answer == givenAnswer;
    };
}
