function colorButtonCorrect(button) {
    button.style.backgroundColor = "green";
}

function colorButtonIncorrect(button) {
    button.style.backgroundColor = "red";
}

function colorButtonNeutral(button) {
    button.style.backgroundColor = theme.button_color;
}

function setCounter(counter, total) {
    counter_div.innerText = `${counter}/${total}`;
}

function displayQuestion(question, options) {
    i++;
    buttons.forEach(button => button.disabled = false);
    buttons.forEach(button => colorButtonNeutral(button));
    question_div.innerText = question;
    for (let i = 0; i < 4; i++) {
        buttons[i].innerText = options[i];
        buttons[i].style.textAlign = "center";
    }
}

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
let i = 0;
playRound();

