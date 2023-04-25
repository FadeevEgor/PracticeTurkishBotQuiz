

var telegram = window.Telegram.WebApp;
telegram.expand();
theme = telegram.themeParams;

setMainButtonText("Start.");

var question_div = document.getElementById("question");
var counter_div = document.getElementById("counter");
var button_A = document.getElementById("button_A");
var button_B = document.getElementById("button_B");
var button_C = document.getElementById("button_C");
var button_D = document.getElementById("button_D");
var buttons = [button_A, button_B, button_C, button_D];
hideAnswerButtons();
// const urlParams = new URLSearchParams(window.location.search);
// const data = urlParams;
question_div.innerText = window.location.href;
counter_div.innerText = "111";

function hideAnswerButtons() {
    buttons.forEach(button => button.style.visibility = "hidden");
}

function showAnswerButtons() {
    buttons.forEach(button => button.style.visibility = "visible");
}

function hideMainButton() {
    telegram.MainButton.hide();
}

function showMainButton() {
    telegram.MainButton.show();
}

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