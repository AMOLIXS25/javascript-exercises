const repeatString = function(chaineToRepeat, numberOfRepetition) {
    let resultStr = ((numberOfRepetition >= 0) ? '' : 'ERROR');
    for (let i = 0; i < numberOfRepetition; i++) {
        resultStr += chaineToRepeat;
    }
    return resultStr;
};

// Do not edit below this line
module.exports = repeatString;
