if (PRODUCTION) {
    var url = new URL(window.location.href);
    var index1 = parseInt(url.searchParams.get("tgWebAppStartParam"));
    var index2 = parseInt(telegram.initDataUnsafe.start_param);
    var index = index2;
}
else {
    var index = 1;
}


gameState = new GameState();
setMainButtonText("Start.");
showMainButton();
showProgressMainButton();



load_dictionary(index).
    then(dictionary => {
        console.log(dictionary);
        gameState.setDictionary(dictionary);
        startScreen();
        hideProgressMainButton();
        enableMainButton();
    });
