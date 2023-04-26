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
    disableMainButton();
    setMainButtonText("1");
    clearAllGameElements();
    setMainButtonText("2");
    // _.zip(gameState.dictionary, gameState.correctness).forEach(x => {
    //     [entry, isCorrect] = x;
    //     [left, right] = entry;
    //     addTableRow(left, right, isCorrect);
    // });
    // showTable();

    // setMainButtonText("Finish.");
    // telegram.MainButton.onClick(finish);
    // telegram.MainButton.show();
    // debug_button.onclick = finish; // debug
}

function onAnswerButtonClick(buttonClicked) {
    buttons.forEach(button => button.disabled = true);
    buttons.forEach(button => {
        if (gameState.checkAnswer(button.innerText)) {
            colorButtonCorrect(button);
        }
    });
    let pickedAnswer = buttonClicked.innerText;
    if (!gameState.checkAnswer(pickedAnswer)) {
        colorButtonIncorrect(buttonClicked);
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
    buttons.forEach(button => colorButtonNeutral(button));
    question_div.innerText = question;
    for (let i = 0; i < 4; i++) {
        buttons[i].innerText = options[i];
        buttons[i].style.textAlign = "center";
    }
    showAnswerButtons();
    disableMainButton();
}


function onMainButtonClick() {
    setMainButtonText("");
    gameState.nextRound();
    if (gameState.isFinish()) {
        finalScreen();
    } else {
        playRound();
    }
}

function finish() {
    telegram.close();
}
