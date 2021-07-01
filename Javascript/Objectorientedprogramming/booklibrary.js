class BookLibrary {

    getBookdetails() {
        let books = {
            "alchimist": { book_name: "alchimist", author: "rowling", price: 200, no_of_copies: 100, sold: 59 },
            "The Shadow of the Wind": { book_name: "The Shadow of the Wind", author: "Carlos Ruiz Zafon", price: 400, no_of_copies: 500, sold: 499 },
            "The Lord of the Rings": { book_name: "The Lord of the Rings", author: "", price: 600, no_of_copies: 400, sold: 200 },
            "The Cloud Atlas": { book_name: "The Cloud Atlas", author: "David Mitchell", price: 560, no_of_copies: 400, sold: 360 }
        }
        return books;
    }
    //find a book
    findBook(book_name) {
        let data = this.getBookdetails()
        if (book_name in data) {
            console.log("Book is present");
        }
        else {
            console.log("Book not present");
        }
    }
}

    
   

    //sort with respect to cost


var obj = new BookLibrary()
obj.findBook("The Cloud Atlas");
