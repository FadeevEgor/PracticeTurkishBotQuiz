var url = new URL(window.location.href);
// var index = url.searchParams.get("start_param");
var index1 = url.searchParams.get("tgWebAppStartParam");
var index2 = telegram.initDataUnsafe.start_param;
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

index = parseInt(index2);
load_dictionary(index).
    then(dictionary => {
        console.log(dictionary);
        gameState.setDictionary(dictionary);
        telegram.MainButton.show();
    });
