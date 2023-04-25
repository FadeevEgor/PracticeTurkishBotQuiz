function onButtonClick(buttonClicked) {
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
        onButtonClick(button);
    };
});

function playRound() {
    setCounter(i, N_rounds);
    [question, correctAnswer] = dictionary[i];
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

telegram.MainButton.onClick(function () {
    buttons.forEach(button => button.style.visibility = "visible");
    i++;
    playRound();
});

let i = 0;
telegram.MainButton.show();
