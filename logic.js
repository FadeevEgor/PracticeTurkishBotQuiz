function startScreen() {
    gameState.dictionary.forEach(entry => {
        [left, right] = entry;
        addTableRow(table_preview, left, right);
    });
    showTable(table_preview);

    setMainButtonAction(actionNextRound);
    hideProgressMainButton();
    enableMainButton();
    colorMainButton(buttonColorEnabled);
    hidePage(page_loading);
    showPage(page_preview);
}

function actionNextRound() {
    console.log("actionNext");
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
    console.log("startGame");
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
    console.log("playRound");
    updateProgressBar(gameState.currentRoundNumber - 1, gameState.nRounds);

    [question, correctAnswer] = gameState.questionAnswer;
    options = sampleOptions(gameState.dictionary, question, correctAnswer);
    displayQuestion(question, options);
}

function displayQuestion(question, options) {
    console.log("displayQuestion");
    showQuestion(question);
    for (let i = 0; i < 4; i++) {
        option = options[i];
        button = answerButtons[3 - i];
        if (option !== undefined) {
            button.innerText = option;
            button.disabled = false;
            colorAnswerButton(button, buttonColorEnabled);
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
            colorAnswerButton(button, buttonColorCorrect);
        } else {
            colorAnswerButton(button, disabledColor);
        }
    });

    let pickedAnswer = buttonClicked.innerText;
    if (gameState.checkAnswer(pickedAnswer)) {
        gameState.correctAnswer();
    } else {
        colorAnswerButton(buttonClicked, buttonColorIncorrect);
        gameState.incorrectAnswer();
    }
    enableMainButton();
    colorMainButton(buttonColorEnabled);
}

