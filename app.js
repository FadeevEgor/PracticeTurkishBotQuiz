var url = new URL(window.location.href);
// var index = url.searchParams.get("start_param");
var index1 = parseInt(url.searchParams.get("tgWebAppStartParam"));
var index2 = parseInt(telegram.initDataUnsafe.start_param);
setCounter(index1, index2);

gameState = new GameState();
telegram.MainButton.onClick(onMainButtonClick);
// debug_button.onclick = onMainButtonClick; // debug
setMainButtonText("Start.");
buttons.forEach(button => {
    button.onclick = function () {
        onAnswerButtonClick(button, gameState);
    };
});

load_dictionary(index2).
    then(dictionary => {
        console.log(dictionary);
        gameState.setDictionary(dictionary);
        telegram.MainButton.show();
    });
