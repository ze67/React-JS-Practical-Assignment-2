$(document).ready(function() {
    const books = [
        { title: "secret", author: "F. Scott Fitzgerald" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger" },
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling" },
        { title: "Pride and Prejudice", author: "Jane Austen" }
    ];

    $('#search-input').on('input', function() {
        let query = $(this).val().trim().toLowerCase();

        if (query.length > 0) {
            let filteredBooks = books.filter(book => 
                book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
            );
            displaySuggestions(filteredBooks);
        } else {
            $('#suggestions').empty().hide();
        }
    });

    function displaySuggestions(books) {
        let suggestionsBox = $('#suggestions');
        suggestionsBox.empty(); 
        if (books.length > 0) {
            books.forEach(function(book) {
                suggestionsBox.append(`<div class="suggestion-item">${book.title} by ${book.author}</div>`);
            });
            suggestionsBox.show(); 
        } else {
            suggestionsBox.hide(); 
        }

        $('.suggestion-item').on('click', function() {
            $('#search-input').val($(this).text()); 
            suggestionsBox.hide(); 
        });
    }
});