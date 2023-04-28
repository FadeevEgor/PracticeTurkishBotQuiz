var PRODUCTION = true;
var DEBUG = !PRODUCTION;

var telegram = window.Telegram.WebApp;
if (PRODUCTION) {
    telegram.expand();
}

var progressBar = progressJs();
progressBar.setOption("theme", "blue");
progressBar.start();
progressBar.set(0);

var correctColor = new Color("#00CC99");
var incorrectColor = new Color("#FF3333");
if (PRODUCTION) {
    theme = telegram.themeParams;
    var enabledColor = new Color(theme.button_color);
    var backgroundColor = new Color(theme.bg_color);
    var disabledColor = enabledColor.mix(backgroundColor, .5);
} else {
    var enabledColor = new Color("#5288c1");
    var backgroundColor = new Color("white");
    var disabledColor = correctColor.mix(enabledColor, .5);
}