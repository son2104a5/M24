let book:Object = {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    price: 200000
}

function printBook (book:Object) {
    return book
}

console.log(printBook(book))

function updateBook(book:Object) {
    book = {
        title: "Doraemon",
        author: "Fujiko F. Fujio",
        price: 200000
    }
    return printBook(book)
}

console.log(updateBook(book));
