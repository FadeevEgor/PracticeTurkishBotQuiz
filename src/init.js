
var telegram = window.Telegram.WebApp;
var PRODUCTION = !(telegram.platform == "unknown");
var DEBUG = !PRODUCTION;


if (PRODUCTION) {
    telegram.expand();
    var url = new URL(window.location.href);
    var index1 = parseInt(url.searchParams.get("tgWebAppStartParam"));
    var index2 = parseInt(telegram.initDataUnsafe.start_param);
    var index = index2;
}
index ??= 21;

var progressBar = progressJs();
progressBar.setOptions({ "theme": "blue", overlayMode: false });
progressBar.start();
progressBar.set(0);
