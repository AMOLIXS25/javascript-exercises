const leapYears = function(yearToVerifIfLeap) {
    if (yearToVerifIfLeap % 100 === 0 && yearToVerifIfLeap % 400 !== 0) {
        return false;
    }else if (yearToVerifIfLeap % 100 === 0 && yearToVerifIfLeap % 400 === 0) {
        return true;
    } else if (yearToVerifIfLeap % 4 === 0) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
