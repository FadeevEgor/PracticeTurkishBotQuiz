var PRODUCTION = true;
var DEBUG = !PRODUCTION;

var telegram = window.Telegram.WebApp;
if (telegram.platform == "unknown") {
    var PRODUCTION = false;
    var DEBUG = true;
}


if (PRODUCTION) {
    telegram.expand();
    var url = new URL(window.location.href);
    var index1 = parseInt(url.searchParams.get("tgWebAppStartParam"));
    var index2 = parseInt(telegram.initDataUnsafe.start_param);
    var index = index2;
} else {
    var index = 1;
}

var progressBar = progressJs();
progressBar.setOption("theme", "blue");
progressBar.start();
progressBar.set(0);
