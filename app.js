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

telegram.MainButton.onClick(playRound);

let i = 1;
telegram.MainButton.show();
