function searchBook() {

    var searchBar = document.getElementById("srch-term");

    var searchRequest = new XMLHttpRequest();

    var url = "php/searchBook.php?search-term=" + searchBar.value;

    searchRequest.open("GET", url, true);

    searchRequest.onreadystatechange = function () {
        if (searchRequest.readyState == 4 && searchRequest.status == 200) {
            var response = searchRequest.responseText;
            displayBooks();
        }
    }

    searchRequest.send();

}