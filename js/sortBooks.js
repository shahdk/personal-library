function sortBy(sortTerm) {

    var sortRequest = new XMLHttpRequest();
    
    var url = "php/sortBooks.php?sort-term=" + sortTerm;

    sortRequest.open("GET", url, true);

    sortRequest.onreadystatechange = function () {
        if (sortRequest.readyState == 4 && sortRequest.status == 200) {
            
            displayBooks();
        }
    }

    sortRequest.send();
    
}