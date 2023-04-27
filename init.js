
var telegram = window.Telegram.WebApp;
telegram.expand();
var progressBar = progressJs();
progressBar.setOption("theme", "blue");
progressBar.start();

var correctColor = new Color("#00CC99");
var incorrectColor = new Color("#FF3333");

theme = telegram.themeParams;
var enabledColor = new Color(theme.button_color);
var backgroundColor = new Color(theme.bg_color);
var disabledColor = enabledColor.mix(backgroundColor, .5);
// var neutralColor = new Color("grey"); // debug
// var backgroundColor = new Color("white"); // debug
// var disabledColor = correctColor.mix(incorrectColor, .5); // debug
