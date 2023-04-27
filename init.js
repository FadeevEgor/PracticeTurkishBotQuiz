var telegram = window.Telegram.WebApp;
telegram.expand();

var correctColor = new Color("#00CC99");
var incorrectColor = new Color("#FF3333");

theme = telegram.themeParams;
var neutralColor = new Color(theme.button_color);
var backgroundColor = new Color(theme.backgroundColor);
var disabledColor = neutralColor.mix(backgroundColor, .5);
// var disabledColor = correctColor.mix(incorrectColor, .5); // debug
