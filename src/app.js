var gameState = new GameState();
disableMainButton();
setMainButtonText("Start.");
showMainButton();
showProgressMainButton();

load_dictionary(index).
    then(dictionary => {
        gameState.setDictionary(dictionary);
        startScreen();
    });
