
var telegram = window.Telegram.WebApp;
var PRODUCTION = !(telegram.platform == "unknown");
var DEBUG = !PRODUCTION;
const default_dictionary = 21;

if (PRODUCTION) {
    telegram.expand();
    var url = new URL(window.location.href);
}
var index = parseInt(telegram.initDataUnsafe.start_param ?? default_dictionary);

var progressBar = progressJs();
progressBar.setOptions({ "theme": "blue", overlayMode: false });
progressBar.start();
progressBar.set(0);
