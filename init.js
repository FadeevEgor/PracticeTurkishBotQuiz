var telegram = window.Telegram.WebApp;
theme = telegram.themeParams;

correct = "#00CC99";
incorrect = "#FF3333";
neutral = theme.button_color;

telegram.expand();
fullScreenHeight = telegram.viewportHeight;
questionHeight = 150;
counterHeight = 24;
buttonTotalHeight = (fullScreenHeight - questionHeight - counterHeight) / 4;
buttonHeight = 0.9 * buttonTotalHeight;
buttonUpperMargin = 0.1 * buttonTotalHeight;