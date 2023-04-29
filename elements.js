var mainButton = telegram.MainButton;

var page_loading = document.getElementById("page_loading");

var page_preview = document.getElementById("page_preview");
var table_preview = document.getElementById("table_preview");
var tbody_preview = table_preview.getElementsByTagName("tbody")[0];
var gesture_region = new ZingTouch.Region(document.body);
var swipe_gesture = new ZingTouch.Swipe();
var double_tap_gesture = new ZingTouch.Tap({ numInputs: 2, tolerance: 100 });
function setHorizontalSwipeAction(action) {
    gesture_region.bind(table_preview, swipe_gesture, function (e) {
        d = e.detail.data[0].currentDirection;
        if ((d <= 45) || (d >= 315) || ((d >= 135) && (d <= 225))) {
            console.log("↔");
            action();
        }
    }, false);
}
function setDoubleTapAction(action) {
    gesture_region.bind(table_preview, double_tap_gesture, function (e) {
        console.log("↕");
        action();
    }, false);
}

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

if (DEBUG) {
    var button_debug = document.createElement("button");
    button_debug.style.height = "50px";
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
        color = isCorrect ? correctTextColor : incorrectTextColor;
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

function mirrorPreviewTable() {
    rows = tbody_preview.getElementsByTagName("tr");
    for (let row of rows) {
        [left, right] = row.cells;
        [left.innerText, right.innerText] = [right.innerText, left.innerText];
    }
}

function permutePreviewTable(permutation) {
    rows = tbody_preview.rows;
    htmls = _.map(rows, row => row.innerHTML);
    for (const [i, j] of permutation.entries()) {
        rows[i].innerHTML = htmls[j];
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
    stats_correct_div.style.color = correctTextColor;
    stats_correct_div.style.fontWeight = "bold";
    stats_correct_div.style.fontFamily = "monospace";
    stats_mistakes_div.innerText = `${percentIncorrect}% [${nIncorrect_str}/${total}]`
    stats_mistakes_div.style.color = incorrectTextColor;
    stats_mistakes_div.style.fontWeight = "bold";
    stats_mistakes_div.style.fontFamily = "monospace";
}


