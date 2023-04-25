function onAnswerButtonClick(buttonClicked) {
    buttons.forEach(button => button.disabled = true);
    buttons.forEach(button => {
        if (button.innerText == correctAnswer) {
            colorButtonCorrect(button);
        }
    });
    let pickedAnswer = buttonClicked.innerText;
    if (pickedAnswer != correctAnswer) {
        colorButtonIncorrect(buttonClicked);
    }
    setMainButtonText(i < N_rounds ? "Continue." : "Finish.");
    telegram.MainButton.show();
}

function sampleOptions(dictionary, question, correctAnswer) {
    options = _.sample(dictionary, 5);
    options = options.filter(option => option != [question, correctAnswer]);
    options = options.map(option => option[1]);
    return options.slice(0, 4);
}

buttons.forEach(button => {
    button.onclick = function () {
        onAnswerButtonClick(button);
    };
});

function playRound() {
    setCounter(roundNumber, N_rounds);
    [question, correctAnswer] = dictionary[roundNumber - 1];
    options = sampleOptions(dictionary, question, correctAnswer);
    displayQuestion(question, options);
}

function displayQuestion(question, options) {
    buttons.forEach(button => button.disabled = false);
    buttons.forEach(button => colorButtonNeutral(button));
    question_div.innerText = question;
    for (let i = 0; i < 4; i++) {
        buttons[i].innerText = options[i];
        buttons[i].style.textAlign = "center";
    }
    telegram.MainButton.hide();
}

function finish() {
    telegram.close();
}

function onMainButtonClick() {
    roundNumber++;
    if (roundNumber > N_rounds) {
        setCounter("finished", ":(");
        finish();
    } else {
        buttons.forEach(button => button.style.visibility = "visible");
        playRound();
    }
}


let roundNumber = 0;
telegram.MainButton.onClick(onMainButtonClick);
telegram.MainButton.show();
