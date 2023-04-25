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

function hideAnswerButtons() {
    buttons.forEach(button => button.style.visibility = "hidden");
}

function showAnswerButtons() {
    buttons.forEach(button => button.style.visibility = "visible");
}

function disableMainButton() {
    telegram.MainButton.disable();
}

function enableMainButton() {
    telegram.MainButton.enable();
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


dictionary = [
    ["elma", "apple"],
    ["ben", "i"],
    ["biz", "we"],
    ["sen", "you"],
    ["siz", "вы"]
];
dictionary = _.shuffle(dictionary);
let N_rounds = dictionary.length;


function sampleOptions(dictionary, question, correctAnswer) {
    options = _.sample(dictionary, 4);
    options = options.filter(option => option != [question, correctAnswer]);
    options = options.map(option => option[1]).slice(0, 3);
    options.push(correctAnswer);
    return _.shuffle(options);
}