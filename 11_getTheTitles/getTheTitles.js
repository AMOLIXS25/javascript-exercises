const getTheTitles = (books) => {
    let titleArray = [];
    books.forEach((book) => {
        titleArray.push(book.title);
    });
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
