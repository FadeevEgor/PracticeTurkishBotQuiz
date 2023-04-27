var results_table = document.getElementById("results_table");
var results_table_body = results_table.getElementsByTagName("tbody")[0];
var question_div = document.getElementById("question");
var counter_div = document.getElementById("counter");
var button_A = document.getElementById("button_A");
var button_B = document.getElementById("button_B");
var button_C = document.getElementById("button_C");
var button_D = document.getElementById("button_D");
var buttons = [button_A, button_B, button_C, button_D];


function hideAnswerButtons() {
    buttons.forEach(button => button.style.visibility = "hidden");
}

function showAnswerButtons() {
    buttons.forEach(button => button.style.visibility = "visible");
}

function hideQuestion() {
    question_div.style.visibility = "hidden";
}

function showQuestion() {
    question_div.style.visibility = "visible";
}

function hideMainButton() {
    telegram.MainButton.hide();
}

function showMainButton() {
    telegram.MainButton.show();
}

function hideProgressMainButton() {
    telegram.MainButton.hideProgress();
}

function showProgressMainButton() {
    telegram.MainButton.showProgress();
}

function disableMainButton() {
    telegram.MainButton.disable();
}

function enableMainButton() {
    telegram.MainButton.enable();
}

function colorAnswerButton(button, color) {
    button.style.backgroundColor = color;
}

function setCounter(counter, total) {
    counter_div.innerText = `${counter}/${total}`;
}

function setMainButtonText(text) {
    telegram.MainButton.text = text;
}

function clearAllGameElements() {
    hideAnswerButtons();
    hideQuestion();
    buttons.forEach(button => button.remove());
    question_div.remove();
    counter_div.remove();
}

function addTableRow(left, right, isCorrect) {
    var row = results_table_body.insertRow();
    if (isCorrect !== undefined) {
        color = isCorrect ? correct : incorrect;
        row.style.backgroundColor = color;
    }

    var leftCell = row.insertCell();
    var rightCell = row.insertCell();
    leftCell.style.textAlign = "left";
    rightCell.style.textAlign = "right";


    var leftText = document.createTextNode(left);
    var rightText = document.createTextNode(right);
    leftCell.appendChild(leftText);
    rightCell.appendChild(rightText);
}

function clearTable() {
    var new_tbody = document.createElement('tbody');
    results_table_body.parentNode.replaceChild(new_tbody, results_table_body);
    results_table_body = new_tbody;
}

function hideTable() {
    results_table.style.visibility = "hidden";
}

function showTable() {
    results_table.style.visibility = "visible";
}