function startScreen() {
    gameState.dictionary.forEach(entry => {
        [left, right] = entry;
        addTableRow(table_preview, left, right);
    });
    showTable(table_preview);

    setMainButtonAction(actionStartGame);
    hideProgressMainButton();
    enableMainButton();
    colorMainButton(enabledColor);
}

function actionStartGame() {
    disableMainButton();
    setMainButtonText("Next.");
    setMainButtonAction(actionContinue);

    answerButtons.forEach(button => {
        button.onclick = function () {
            answerPicked(button);
        };
    });

    hidePage(page_preview);
    showPage(page_game);

    actionContinue();
    playRound();
}

function actionContinue() {
    gameState.nextRound();
    if (gameState.isFinish()) {
        finalScreen();
    } else {
        playRound();
    }
}

function playRound() {
    updateProgressBar(gameState.currentRoundNumber - 1, gameState.nRounds);

    [question, correctAnswer] = gameState.questionAnswer;
    options = sampleOptions(dictionary, question, correctAnswer);
    displayQuestion(question, options);
}

function displayQuestion(question, options) {
    showQuestion(question);
    for (let i = 0; i < 4; i++) {
        answerButtons[i].innerText = options[i];
        answerButtons[i].style.textAlign = "center";
    }
    answerButtons.forEach(button => button.disabled = false);
    answerButtons.forEach(button => colorAnswerButton(button, enabledColor));
    disableMainButton();
    colorMainButton(disabledColor);
}

function finalScreen() {
    hideMainButton();
    endProgressBar();
    hidePage(page_game);
    showPage(page_results);
    // nCorrect = [true, true, true].reduce((a, b) => a + b, 0);
    // nIncorrect = gameState.nRounds - nCorrect;
    // drawResultsDiagram(nCorrect, nIncorrect);

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
            colorAnswerButton(button, correctColor);
        } else {
            colorAnswerButton(button, disabledColor);
        }
    });

    let pickedAnswer = buttonClicked.innerText;
    if (!gameState.checkAnswer(pickedAnswer)) {
        colorAnswerButton(buttonClicked, incorrectColor);
        gameState.incorrectAnswer();
    } else {
        gameState.correctAnswer();
    }
    enableMainButton();
    colorMainButton(enabledColor);
}








