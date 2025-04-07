const sumAll = function(rangeFirstNumber, rangeSecondNumber) {
    if (rangeFirstNumber < 0 || rangeSecondNumber < 0) return 'ERROR';
    if (!Number.isInteger(rangeFirstNumber) || !Number.isInteger(rangeSecondNumber)) return 'ERROR';
    let result = 0;
    for (let i = ((rangeFirstNumber < rangeSecondNumber) ? 
            rangeFirstNumber : rangeSecondNumber); 
            i <= ((rangeFirstNumber < rangeSecondNumber) ? 
            rangeSecondNumber : rangeFirstNumber); i++
        ) {
            result += i;
    }
    return result;
}; 

console.log(sumAll(2, 4));

// Do not edit below this line
module.exports = sumAll;
