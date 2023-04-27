var results_table = document.getElementById("results_table");
var results_table_body = results_table.getElementsByTagName("tbody")[0];
var question_div = document.getElementById("question");
var counter_div = document.getElementById("counter");
var button_A = document.getElementById("button_A");
var button_B = document.getElementById("button_B");
var button_C = document.getElementById("button_C");
var button_D = document.getElementById("button_D");
var buttons = [button_A, button_B, button_C, button_D];
// debug_button = document.getElementById("button_debug");

function updateProgressBar(i, N) {
    percent = i / N * 100;
    progressBar.set(percent);
}

function endProgressBar(newValue, total) {
    progressBar.end();
}

function hideQuestion() {
    question_div.style.visibility = "hidden";
}

function showQuestion() {
    question_div.style.visibility = "visible";
}

function hideMainButton() {
    telegram.MainButton.hide();
    // debug_button.style.visibility = "hidden"; // debug
}

function showMainButton() {
    telegram.MainButton.show();
    // debug_button.style.visibility = "visible"; // debug
}

function setMainButtonText(text) {
    telegram.MainButton.text = text;
    // debug_button.innerText = text; // debug
}

function colorMainButton(color) {
    telegram.MainButton.setParams({ "color": color });
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

function hideAnswerButtons() {
    buttons.forEach(button => button.style.visibility = "hidden");
}

function showAnswerButtons() {
    buttons.forEach(button => button.style.visibility = "visible");
}

function clearAllGameElements() {
    hideAnswerButtons();
    hideQuestion();
    buttons.forEach(button => button.remove());
    question_div.remove();
}

function addTableRow(left, right, isCorrect) {
    var row = results_table_body.insertRow();

    if (isCorrect !== undefined) {
        color = isCorrect ? correctColor : incorrectColor;
        symbol = isCorrect ? "✔" : "✘";
        var correctnessCell = row.insertCell();
        var correctnessText = document.createTextNode(symbol);
        correctnessCell.style.width = "30px";
        correctnessCell.style.color = color;
        // correctnessCell.style.fontSize = "24px";
        correctnessCell.appendChild(correctnessText);
    }

    var leftCell = row.insertCell();
    var leftText = document.createTextNode(left);
    leftCell.style.textAlign = "left";
    leftCell.appendChild(leftText);

    var rightCell = row.insertCell();
    var rightText = document.createTextNode(right);
    rightCell.style.textAlign = "right";
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