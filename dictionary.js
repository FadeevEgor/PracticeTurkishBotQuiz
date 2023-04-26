db_url = "https://dictionariestablefunction-d2ooxt72na-lm.a.run.app/get";

async function load_dictionary(index) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    payload = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ "index": index }),
    };
    const response = await fetch(db_url, payload);
    dictionary = await response.json();
    return _.shuffle(dictionary);
}


function sampleOptions(dictionary, question, correctAnswer) {
    options = _.sample(dictionary, 4);
    options = options.filter(option => (option[0] != question) && (option[1] != correctAnswer));
    options = options.map(option => option[1]);
    options = options.slice(0, 3);
    options.push(correctAnswer);
    return _.shuffle(options);
}