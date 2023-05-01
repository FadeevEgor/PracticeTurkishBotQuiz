var style = getComputedStyle(document.body);

var colorCorrect = new Color(style.getPropertyValue('--color-correct'));
var colorIncorrect = new Color(style.getPropertyValue('--color-incorrect'));
var colorBackground = new Color(style.getPropertyValue("--primary-bg-color"));
var colorSecondaryBackground = new Color(style.getPropertyValue("--secondary-bg-color"));
var colorEnabled = new Color(style.getPropertyValue("--color-enabled"));
var colorDisabled = colorEnabled.mix(colorBackground, .5);
