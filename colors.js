var correctButtonColor = new Color("#00CC99");
var incorrectButtonColor = new Color("#FF3333");
if (PRODUCTION) {
    theme = telegram.themeParams;
    var enabledColor = new Color(theme.button_color);
    var backgroundColor = new Color(theme.bg_color);
    var secondaryBackgroundColor = new Color(theme.secondary_bg_color);
} else {
    var enabledColor = new Color("#5288c1");
    var backgroundColor = new Color("black");
    var secondaryBackgroundColor = new Color("grey");
}
var disabledColor = enabledColor.mix(backgroundColor, .5);
var invertedBackgroundColor = new Color(backgroundColor);
_.range(3).forEach(i => invertedBackgroundColor.srgb[i] = 1 - invertedBackgroundColor.srgb[i]);
var correctTextColor = correctButtonColor.mix(invertedBackgroundColor, .25);
var incorrectTextColor = incorrectButtonColor.mix(invertedBackgroundColor, .25)
