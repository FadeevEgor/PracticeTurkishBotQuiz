dictionary = [
    ["elma", "apple"],
    ["ben", "i"],
    ["biz", "we"],
    ["sen", "you"],
    ["siz", "вы"]
];
dictionary = _.shuffle(dictionary);
let N_rounds = dictionary.length;


function sampleOptions(dictionary, question, correctAnswer) {
    options = _.sample(dictionary, 4);
    options = options.filter(option => (option[0] != question) && (option[1] != correctAnswer));
    options = options.map(option => option[1]);
    options = options.slice(0, 3);
    options.push(correctAnswer);
    return _.shuffle(options);
}