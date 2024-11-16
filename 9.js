$(document).ready(function() {
    const data = [
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
        "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
        "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"
    ];

    let currentPage = 1;      
    const itemsPerPage = 5;  

    function loadContent(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToLoad = data.slice(startIndex, endIndex);

        itemsToLoad.forEach(function(item) {
            $('#content-list').append(`<li>${item}</li>`);
        });

        if (endIndex >= data.length) {
            $('#load-more-btn').hide();
        }
    }

    loadContent(currentPage);
    $('#load-more-btn').on('click', function() {
        currentPage++;  
        loadContent(currentPage);  
    });
});
