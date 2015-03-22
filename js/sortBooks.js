function sortBy(sortTerm, isWishlist) {

    setSelectedColor(sortTerm);

    var sortRequest = new XMLHttpRequest();

    var url = "php/sortBooks.php?sort-term=" + sortTerm + "&isWishlist=" + isWishlist;

    sortRequest.open("GET", url, true);

    sortRequest.onreadystatechange = function () {
        if (sortRequest.readyState == 4 && sortRequest.status == 200) {

            displayBooks($('#wishlistSwitch').bootstrapSwitch('state'));
        }
    }

    sortRequest.send();

}

function setSelectedColor(sortTerm) {

    if (sortTerm == 'titleAsc') {
        document.getElementById("tAsc").style.color = "#e28f8f";
        document.getElementById("tDesc").style.color = "#FFFFFF";
        document.getElementById("aAsc").style.color = "#FFFFFF";
        document.getElementById("aDesc").style.color = "#FFFFFF";
        document.getElementById("iAsc").style.color = "#FFFFFF";
        document.getElementById("iDesc").style.color = "#FFFFFF";
    } else if (sortTerm == 'titleDesc') {
        document.getElementById("tAsc").style.color = "#FFFFFF";
        document.getElementById("tDesc").style.color = "#e28f8f";
        document.getElementById("aAsc").style.color = "#FFFFFF";
        document.getElementById("aDesc").style.color = "#FFFFFF";
        document.getElementById("iAsc").style.color = "#FFFFFF";
        document.getElementById("iDesc").style.color = "#FFFFFF";
    } else if (sortTerm == 'authorAsc') {
        document.getElementById("tAsc").style.color = "#FFFFFF";
        document.getElementById("tDesc").style.color = "#FFFFFF";
        document.getElementById("aAsc").style.color = "#e28f8f";
        document.getElementById("aDesc").style.color = "#FFFFFF";
        document.getElementById("iAsc").style.color = "#FFFFFF";
        document.getElementById("iDesc").style.color = "#FFFFFF";
    } else if (sortTerm == 'authorDesc') {
        document.getElementById("tAsc").style.color = "#FFFFFF";
        document.getElementById("tDesc").style.color = "#FFFFFF";
        document.getElementById("aAsc").style.color = "#FFFFFF";
        document.getElementById("aDesc").style.color = "#e28f8f";
        document.getElementById("iAsc").style.color = "#FFFFFF";
        document.getElementById("iDesc").style.color = "#FFFFFF";
    } else if (sortTerm == 'isbnAsc') {
        document.getElementById("tAsc").style.color = "#FFFFFF";
        document.getElementById("tDesc").style.color = "#FFFFFF";
        document.getElementById("aAsc").style.color = "#FFFFFF";
        document.getElementById("aDesc").style.color = "#FFFFFF";
        document.getElementById("iAsc").style.color = "#e28f8f";
        document.getElementById("iDesc").style.color = "#FFFFFF";
    } else {
        document.getElementById("tAsc").style.color = "#FFFFFF";
        document.getElementById("tDesc").style.color = "#FFFFFF";
        document.getElementById("aAsc").style.color = "#FFFFFF";
        document.getElementById("aDesc").style.color = "#FFFFFF";
        document.getElementById("iAsc").style.color = "#FFFFFF";
        document.getElementById("iDesc").style.color = "#e28f8f";
    }

}