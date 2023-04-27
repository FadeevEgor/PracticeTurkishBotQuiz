function startScreen() {
    hideAnswerButtons();
    hideQuestion();
    gameState.dictionary.forEach(entry => {
        [left, right] = entry;
        addTableRow(left, right);
    });
    showTable();
}

function finalScreen() {
    hideMainButton();
    clearAllGameElements();
    _.zip(gameState.dictionary, gameState.correctness).forEach(x => {
        [entry, isCorrect] = x;
        [left, right] = entry;
        addTableRow(left, right, isCorrect);
    });
    showTable();
}

function onAnswerButtonClick(buttonClicked) {
    buttons.forEach(button => {
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
    setMainButtonText("Next.");
    enableMainButton();
}

function playRound() {
    setCounter(gameState.currentRoundNumber, gameState.nRounds);

    [question, correctAnswer] = gameState.questionAnswer;
    options = sampleOptions(dictionary, question, correctAnswer);
    displayQuestion(question, options);
}

function displayQuestion(question, options) {
    hideTable();
    clearTable();
    showQuestion();
    buttons.forEach(button => button.disabled = false);
    buttons.forEach(button => colorAnswerButton(button, neutralColor));
    question_div.innerText = question;
    for (let i = 0; i < 4; i++) {
        buttons[i].innerText = options[i];
        buttons[i].style.textAlign = "center";
    }
    showAnswerButtons();
    disableMainButton();
}


function onMainButtonClick() {
    setMainButtonText("Next.");
    gameState.nextRound();
    if (gameState.isFinish()) {
        finalScreen();
    } else {
        playRound();
    }
}
