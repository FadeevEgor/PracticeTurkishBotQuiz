let telegram = window.Telegram.WebApp;
telegram.expand();
telegram.MainButton.text = "Start!";
telegram.MainButton.show();
theme = telegram.themeParams;

button = document.createElement("button");
button.innerHTML = "Click me!";
// button.style.backgroundColor = theme.button_color;
document.body.appendChild(button);