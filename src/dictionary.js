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
    dictionary = await response.json()
    return dictionary.sort(sorting_func);
}

function sorting_func(entry_A, entry_B) {
    [a, other] = entry_A;
    [b, other] = entry_B;
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
}


function sampleOptions(dictionary, question, correctAnswer) {
    options = _.sample(dictionary, 4);
    options = options.filter(option => (option[0] != question) && (option[1] != correctAnswer));
    options = options.map(option => option[1]);
    options = options.slice(0, 3);
    options.push(correctAnswer);
    return _.shuffle(options);
}

function mirrorDictionary() {
    for (const i of _.range(gameState.nRounds)) {
        [left, right] = gameState.dictionary[i];
        gameState.dictionary[i] = [right, left];
    }
}

function permuteDictionary(permutation) {
    dictionary = gameState.dictionary;
    copy = structuredClone(dictionary);
    for (const [i, j] of permutation.entries()) {
        dictionary[i] = copy[j];
    }
}