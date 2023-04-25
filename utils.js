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

