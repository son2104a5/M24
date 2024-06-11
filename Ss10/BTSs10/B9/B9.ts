class Book {
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    books: string[];
    constructor(books: string[]) {
        this.books = [];
    }
}

let book1 = new Book("Doraemon", "Fujiko F. Fujio");

let book2 = new Book("Harry Potter", "J. K Rowling");

let book3 = new Book("Harry Potter and the Chamber of Secrets", "J. K. Rowling");

let book4 = new Book("Crayon Shin-chan", "Usui Yoshito");

let book5 = new Book("Thám tử lừng danh conan", "Aoyama Gosho");

let bookCase:object = [book1, book2, book3, book4, book5]

let library = new Library([])

library.books.push(bookCase)

console.log(library.books);
