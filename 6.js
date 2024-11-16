document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById("book-list");

    const books = [ 
        { title: "Gitanjali", author: "Rabindranath Tagore", year: 1910 }, 
        { title: "The White Tiger", author: "Aravind Adiga", year: 2008 }, 
        { title: "The God of Small Things", author: "Arundhati Roy", year: 1997 } 
    ]; 

    setTimeout(() => {
        displayBooks(books);
    }, 1000); 

    function displayBooks(books) {
        let output = '';
        books.forEach(book => {
            output += `
                <div class="book">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">by ${book.author}</div>
                    <div class="book-year">Published: ${book.year}</div>
                </div>
            `;
        });
        bookList.innerHTML = output;
    }
});