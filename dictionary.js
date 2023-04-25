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
    options = options.filter(option => option != [question, correctAnswer]);
    options = options.map(option => option[1]).slice(0, 3);
    options.push(correctAnswer);
    return _.shuffle(options);
}