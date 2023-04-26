var url = new URL(window.location.href);
// var index = url.searchParams.get("start_param");
var index = url.searchParams.get("tgWebAppStartParam");
question_div.innerText = index;

gameState = new GameState();
telegram.MainButton.onClick(onMainButtonClick);
// debug_button.onclick = onMainButtonClick; // debug
setMainButtonText("Start.");
buttons.forEach(button => {
    button.onclick = function () {
        onAnswerButtonClick(button, gameState);
    };
});

// index = 1; // debug
counter_div.innerText = index;
load_dictionary(index).
    then(dictionary => {
        console.log(dictionary);
        gameState.setDictionary(dictionary);
        telegram.MainButton.show();
    });
