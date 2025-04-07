const fibonacci = (numberOfFibonacciSuite) => {
    if (numberOfFibonacciSuite < 0) return "OOPS"; 
    let arrayOfFibonacciNumbers = [0, 1, 1];
    numberOfFibonacciSuite = parseInt(numberOfFibonacciSuite);

    for (let i = 1; i < numberOfFibonacciSuite - 1; i++) {
        let resultTwoPrecedentNumbers = 0;
        for (let j = arrayOfFibonacciNumbers.length - 1; j > arrayOfFibonacciNumbers.length - 3; j--) {
            resultTwoPrecedentNumbers += arrayOfFibonacciNumbers[j];
        }
        arrayOfFibonacciNumbers.push(resultTwoPrecedentNumbers);
    }
    return arrayOfFibonacciNumbers[numberOfFibonacciSuite];
};


// Do not edit below this line
module.exports = fibonacci;
