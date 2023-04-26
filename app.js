var url = new URL(window.location.href);
// var index = url.searchParams.get("start_param");
var index1 = parseInt(url.searchParams.get("tgWebAppStartParam"));
var index2 = parseInt(telegram.initDataUnsafe.start_param);
counter_div.innerText = index2;


gameState = new GameState();
telegram.MainButton.onClick(onMainButtonClick);
setMainButtonText("Start.");
showMainButton();
showProgressMainButton();

// debug_button.onclick = onMainButtonClick; // debug
buttons.forEach(button => {
    button.onclick = function () {
        onAnswerButtonClick(button, gameState);
    };
});

// index2 = 1; // debug
load_dictionary(index2).
    then(dictionary => {
        console.log(dictionary);
        gameState.setDictionary(dictionary);
        startScreen();
        hideProgressMainButton();
        enableMainButton();
    });
