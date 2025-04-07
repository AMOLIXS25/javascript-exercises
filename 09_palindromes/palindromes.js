const palindromes = (strToVerifIfPalindrome) => {
    let newStrToVerifWithoutSpaceAndPunctuation = strToVerifIfPalindrome;
    [',', '!', '.', '?', ' '].forEach((punctuation) => {
        newStrToVerifWithoutSpaceAndPunctuation = newStrToVerifWithoutSpaceAndPunctuation.replaceAll(punctuation, '') 
    });
    newStrToVerifWithoutSpaceAndPunctuation = newStrToVerifWithoutSpaceAndPunctuation.toLowerCase();
    return newStrToVerifWithoutSpaceAndPunctuation === newStrToVerifWithoutSpaceAndPunctuation.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
