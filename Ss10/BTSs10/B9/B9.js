"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    constructor(books) {
        this.books = [];
    }
}
let book1 = new Book("Doraemon", "Fujiko F. Fujio");
let book2 = new Book("Harry Potter", "J. K Rowling");
let book3 = new Book("Harry Potter and the Chamber of Secrets", "J. K. Rowling");
let book4 = new Book("Crayon Shin-chan", "Usui Yoshito");
let book5 = new Book("Thám tử lừng danh conan", "Aoyama Gosho");
let bookCase = [book1, book2, book3, book4, book5];
let library = new Library([]);
library.books.push(bookCase);
console.log(library.books);
