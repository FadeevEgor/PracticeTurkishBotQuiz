let telegram = window.Telegram.WebApp;
telegram.expand();
telegram.MainButton.text = "Start!";
telegram.MainButton.show();
theme = telegram.themeParams;

button = document.createElement("button");
button.innerHTML = "Click me!";
document.body.appendChild(button);