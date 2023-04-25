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

function setMainButtonText(text) {
    telegram.MainButton.text = text;
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