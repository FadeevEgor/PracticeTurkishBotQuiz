var mainButton = telegram.MainButton;

var page_preview = document.getElementById("page_preview");
var table_preview = document.getElementById("table_preview");
var tbody_preview = table_preview.getElementsByTagName("tbody")[0];

var page_game = document.getElementById("page_game");
var question_div = document.getElementById("question");
var buttons_div = document.getElementById("buttons_div");
var button_A = document.getElementById("button_A");
var button_B = document.getElementById("button_B");
var button_C = document.getElementById("button_C");
var button_D = document.getElementById("button_D");
var answerButtons = [button_A, button_B, button_C, button_D];

var page_results = document.getElementById("page_results");
var stats_div = document.getElementById("stats");
var table_results = document.getElementById("table_results");
var tbody_results = table_results.getElementsByTagName("tbody")[0];

if (DEBUG) {
    var button_debug = document.createElement("button");
}

function hidePage(page) {
    page.style.display = "none";
}

function showPage(page) {
    page.style.display = "block";
    if (DEBUG) { page.appendChild(button_debug); }
}

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

function showQuestion(question) {
    question_div.innerText = question;
    question_div.style.visibility = "visible";
}

function hideMainButton() {
    mainButton.hide();
    if (DEBUG) { button_debug.style.visibility = "hidden"; }
}

function showMainButton() {
    mainButton.show();
    if (DEBUG) { button_debug.style.visibility = "visible"; }
}

function setMainButtonText(text) {
    mainButton.text = text;
    if (DEBUG) { button_debug.innerText = text; }
}

function colorMainButton(color) {
    colorCode = color.to("srgb").toString({ format: "hex" });
    mainButton.color = colorCode;
    if (DEBUG) { button_debug.style.backgroundColor = colorCode; }
}

function hideProgressMainButton() {
    mainButton.hideProgress();
}

function showProgressMainButton() {
    mainButton.showProgress();
}

function disableMainButton() {
    mainButton.disable();
    if (DEBUG) { button_debug.disabled = true; }
}

function enableMainButton() {
    mainButton.enable();
    if (DEBUG) { button_debug.disabled = false; }
}

function setMainButtonAction(action) {
    mainButton.onClick(action);
    if (DEBUG) { button_debug.onclick = action; }
}


function colorAnswerButton(button, color) {
    button.style.backgroundColor = color;
}

function hideAnswerButtons() {
    answerButtons.forEach(button => button.style.visibility = "hidden");
}

function showAnswerButtons() {
    answerButtons.forEach(button => button.style.visibility = "visible");
}

function clearAllGameElements() {
    hideAnswerButtons();
    hideQuestion();
    answerButtons.forEach(button => button.remove());
    question_div.remove();
}

function addTableRow(table, left, right, isCorrect) {
    var row = table.insertRow();

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
    var leftText = document.createTextNode(" " + left);
    leftCell.style.textAlign = "left";
    leftCell.appendChild(leftText);

    var rightCell = row.insertCell();
    var rightText = document.createTextNode(right + " ");
    rightCell.style.textAlign = "right";
    rightCell.appendChild(rightText);

}

function hideTable(table) {
    table.style.visibility = "hidden";
}

function showTable(table) {
    table.style.visibility = "visible";
}

function showStats(correctness) {
    total = correctness.length;
    nCorrect = correctness.reduce((a, b) => a + b, 0);
    nIncorrect = total - nCorrect;
    percentCorrect = nCorrect / total * 100;
    percentIncorrect = nIncorrect / total * 100;
    stats_div.innerHTML = `${percentCorrect}% (${nCorrect}/${total})<br>${percentIncorrect}% (${nIncorrect}/${total})`;
}
