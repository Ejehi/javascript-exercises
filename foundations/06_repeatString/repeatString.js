const repeatString = function(word, timesToRepeat) {
    let repeatedString = '';
    if(timesToRepeat < 0) return 'ERROR';
    for (let i = 0; i < timesToRepeat; i++) {
        repeatedString += word;
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
