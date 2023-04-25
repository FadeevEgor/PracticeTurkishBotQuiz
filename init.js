let telegram = window.Telegram.WebApp;
telegram.expand();
theme = telegram.themeParams;

telegram.MainButton.text = "Continue";

var question_div = document.getElementById("question");
var counter_div = document.getElementById("counter");
var button_A = document.getElementById("button_A");
var button_B = document.getElementById("button_B");
var button_C = document.getElementById("button_C");
var button_D = document.getElementById("button_D");
var buttons = [button_A, button_B, button_C, button_D];

dictionary = [
    ["elma", "apple"],
    ["ben", "i"],
    ["biz", "we"],
    ["sen", "you"],
];
dictionary = _.shuffle(dictionary);
let N_rounds = dictionary.length;