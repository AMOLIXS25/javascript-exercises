const removeFromArray = function(baseArray, ...elementsToRemove) {
    elementsToRemove.forEach((elementToRemove) => {
        let numberOfOccurence = 0;
        baseArray.forEach((element) => {
            if (elementToRemove == element) {
                numberOfOccurence++;
            }
        })
        baseArray.splice(baseArray.indexOf(elementToRemove), numberOfOccurence);
    })
    return baseArray;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2));

// Do not edit below this line
module.exports = removeFromArray;
