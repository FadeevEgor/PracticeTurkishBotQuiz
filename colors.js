var style = getComputedStyle(document.body);

var buttonColorCorrect = new Color(style.getPropertyValue('--button-color-correct'));
var buttonColorIncorrect = new Color(style.getPropertyValue('--button-color-incorrect'));
var buttonColorEnabled = new Color(style.getPropertyValue("--button-color-enabled"));
var backgroundColor = new Color(style.getPropertyValue("--primary-bg-color"));
var secondaryBackgroundColor = new Color(style.getPropertyValue("--secondary-bg-color"));
var invertedBackgroundColor = new Color(backgroundColor);
_.range(3).forEach(i => invertedBackgroundColor.srgb[i] = 1 - invertedBackgroundColor.srgb[i]);
var disabledColor = buttonColorEnabled.mix(backgroundColor, .5);
var correctTextColor = buttonColorCorrect.mix(invertedBackgroundColor, .25);
var incorrectTextColor = buttonColorIncorrect.mix(invertedBackgroundColor, .25)
