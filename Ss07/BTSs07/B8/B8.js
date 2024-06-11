"use strict";
let book = {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    price: 200000
};
function printBook(book) {
    return book;
}
console.log(printBook(book));
function updateBook(book) {
    book = {
        title: "Doraemon",
        author: "Fujiko F. Fujio",
        price: 200000
    };
    return printBook(book);
}
console.log(updateBook(book));
