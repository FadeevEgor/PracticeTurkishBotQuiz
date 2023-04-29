function startScreen() {
    gameState.dictionary.forEach(entry => {
        [left, right] = entry;
        addTableRow(table_preview, left, right);
    });
    showTable(table_preview);
    // setHorizontalSwipeAction(function () {
    //     mirrorDictionary(gameState.dictionary);
    //     mirrorPreviewTable();
    // });
    // setDoubleTapAction(function () {
    //     permutation = _.shuffle(_.range(gameState.nRounds));
    //     permuteDictionary(permutation);
    //     permutePreviewTable(permutation);
    // });

    setMainButtonAction(actionNextRound);
    hideProgressMainButton();
    enableMainButton();
    colorMainButton(enabledColor);
    hidePage(page_loading);
    showPage(page_preview);
}

function actionNextRound() {
    if (gameState.isNotStarted()) {
        startGame();
    } else {
        gameState.nextRound();
        if (gameState.isFinish()) {
            finalScreen();
        } else {
            playRound();
        }
    }
}

function startGame() {
    disableMainButton();
    setMainButtonText("Next.");

    answerButtons.forEach(button => {
        button.onclick = function () {
            answerPicked(button);
        };
    });
    hidePage(page_preview);
    showPage(page_game);
    gameState.nextRound();
    playRound();
}

function playRound() {
    updateProgressBar(gameState.currentRoundNumber - 1, gameState.nRounds);

    [question, correctAnswer] = gameState.questionAnswer;
    options = sampleOptions(gameState.dictionary, question, correctAnswer);
    displayQuestion(question, options);
}

function displayQuestion(question, options) {
    showQuestion(question);
    for (let i = 0; i < 4; i++) {
        option = options[i];
        button = answerButtons[3 - i];
        if (option !== undefined) {
            button.innerText = option;
            button.disabled = false;
            colorAnswerButton(button, enabledColor);
        } else {
            colorAnswerButton(button, disabledColor);
            button.disabled = true;
        }
    }
    disableMainButton();
    colorMainButton(disabledColor);
}

function finalScreen() {
    hideMainButton();
    endProgressBar();
    hidePage(page_game);
    showPage(page_results);
    showStats(gameState.correctness);
    _.zip(gameState.dictionary, gameState.correctness).forEach(x => {
        [entry, isCorrect] = x;
        [left, right] = entry;
        addTableRow(table_results, left, right, isCorrect);
    });
    showTable(table_results);
}

function answerPicked(buttonClicked) {
    answerButtons.forEach(button => {
        button.disabled = true;
        if (gameState.checkAnswer(button.innerText)) {
            colorAnswerButton(button, correctButtonColor);
        } else {
            colorAnswerButton(button, disabledColor);
        }
    });

    let pickedAnswer = buttonClicked.innerText;
    if (gameState.checkAnswer(pickedAnswer)) {
        gameState.correctAnswer();
    } else {
        colorAnswerButton(buttonClicked, incorrectButtonColor);
        gameState.incorrectAnswer();
    }
    enableMainButton();
    colorMainButton(enabledColor);
}

