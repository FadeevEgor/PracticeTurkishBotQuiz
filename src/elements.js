var mainButton = telegram.MainButton;

var page_loading = document.getElementById("page_loading");

var page_preview = document.getElementById("page_preview");
var table_preview = document.getElementById("table_preview");
var tbody_preview = table_preview.getElementsByTagName("tbody")[0];
var button_shuffle = document.getElementById("shuffle_button");
var button_mirror = document.getElementById("mirror_button");

var page_game = document.getElementById("page_game");
var question_div = document.getElementById("question");
var buttons_div = document.getElementById("buttons_div");
var button_A = document.getElementById("button_A");
var button_B = document.getElementById("button_B");
var button_C = document.getElementById("button_C");
var button_D = document.getElementById("button_D");
var answerButtons = [button_A, button_B, button_C, button_D];

var page_results = document.getElementById("page_results");
var stats_correct_div = document.getElementById("stats_correct");
var stats_mistakes_div = document.getElementById("stats_mistakes");
var table_results = document.getElementById("table_results");
var tbody_results = table_results.getElementsByTagName("tbody")[0];
var explicit_main_button = document.getElementById("explicit_main_button");

function hidePage(page) {
    page.style.display = "none";
}

function showPage(page) {
    page.style.display = "block";
    if (DEBUG) { page.appendChild(explicit_main_button); }
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
    if (DEBUG) { explicit_main_button.style.display = "none"; }
}

function showMainButton() {
    mainButton.show();
    if (DEBUG) { explicit_main_button.style.display = "block"; }
}

function setMainButtonText(text) {
    mainButton.text = text;
    if (DEBUG) { explicit_main_button.innerText = text; }
}

function colorMainButton(color) {
    colorCode = color.to("srgb").toString({ format: "hex" });
    mainButton.color = colorCode;
    if (DEBUG) { explicit_main_button.style.backgroundColor = colorCode; }
}

function hideProgressMainButton() {
    mainButton.hideProgress();
}

function showProgressMainButton() {
    mainButton.showProgress();
}

function disableMainButton() {
    mainButton.disable();
    if (DEBUG) { explicit_main_button.disabled = true; }
}

function enableMainButton() {
    mainButton.enable();
    if (DEBUG) { explicit_main_button.disabled = false; }
}

function setMainButtonAction(action) {
    mainButton.onClick(action);
    if (DEBUG) { explicit_main_button.onclick = action; }
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
        color = isCorrect ? colorCorrect : colorIncorrect;
        symbol = isCorrect ? "✔" : "✘";
        var correctnessCell = row.insertCell();
        var correctnessText = document.createTextNode(symbol);
        correctnessCell.style.width = "30px";
        correctnessCell.style.color = color;
        correctnessCell.style.textAlign = "center";
        correctnessCell.style.fontWeight = "bold";
        correctnessCell.appendChild(correctnessText);
    }

    var leftCell = row.insertCell();
    var leftText = document.createTextNode(left);
    leftCell.className = "left";
    leftCell.appendChild(leftText);

    var rightCell = row.insertCell();
    var rightText = document.createTextNode(right);
    rightCell.className = "right";
    rightCell.appendChild(rightText);
}

function refillTable(table, dictionary) {
    rows = table.getElementsByTagName("tr");
    for (let [row, entry] of _.zip(rows, dictionary)) {
        [left, right] = row.cells;
        [left.innerText, right.innerText] = entry;
    }
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
    percentCorrect = Math.round(nCorrect / total * 100);
    percentIncorrect = 100 - percentCorrect;

    nSymbols = total.toString().length;
    nCorrect_str = nCorrect.toString().padStart(nSymbols, " ");
    nIncorrect_str = nIncorrect.toString().padStart(nSymbols, " ");

    stats_correct_div.innerText = `${percentCorrect}% [${nCorrect_str}/${total}]`
    stats_mistakes_div.innerText = `${percentIncorrect}% [${nIncorrect_str}/${total}]`

    progressBar.setColors(colorCorrect, colorIncorrect);
    progressBar.setHeight("5px");
    progressBar.set(0);
    progressBar.set(percentCorrect);
}


