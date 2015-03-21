document.onload = displayBooks();

function displayBooks() {

    var bookDivElement = document.getElementById("book-div");
    if (bookDivElement) {
        while (bookDivElement.firstChild) {
            bookDivElement.removeChild(bookDivElement.firstChild);
        }
    }

    var httpRequest = new XMLHttpRequest();
    var url = "php/getBookISBNList.php";
    var url_array = {};
    var isbn_array = new Array();

    httpRequest.open("GET", url, true);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var responseArr = httpRequest.responseText;
            
            responseArr = responseArr.split(",");
            
            for (var i = 0; i < responseArr.length; i += 2) {
                var isbn = responseArr[i];
                var response = responseArr[i + 1];

                if (!response) {
                    return;
                }

                response = response.replace("[", "");
                response = response.replace("]", "");

                var find = '"';
                var re = new RegExp(find, "g");
                response = response.replace(re, "");

                find = "#";
                re = new RegExp(find, "g");
                response = response.replace(re, "&");

                if (response && response.length > 0) {
                    url_array[isbn] = response;
                    isbn_array.push(isbn);
                }
            }

            getBookTitlesList(url_array, isbn_array);
        }
    }

    httpRequest.send();
}

function getBookTitlesList(url_array, isbn_array) {
    var httpRequest = new XMLHttpRequest();
    var url = "php/getBookTitlesList.php";
    var titles_array = {};
    httpRequest.open("GET", url, true);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var responseArr = httpRequest.responseText;
            responseArr = responseArr.split(",");

            for (var i = 0; i < responseArr.length; i += 2) {
                var isbn = responseArr[i];
                var response = responseArr[i + 1];

                if (response && response.length > 0) {
                    titles_array[isbn] = response;
                }
            }

            if (url_array) {
                createBookDivs(url_array, isbn_array, titles_array);
            }
        }
    }

    httpRequest.send();
}

function createBookDivs(url_array, isbn_array, titles_array) {

    var myDiv = document.getElementById("displayDiv");

    var containerDiv = document.getElementById("book-div");
    if (!containerDiv) {
        containerDiv = document.createElement("div");
        var containerDivAttr = document.createAttribute("id");
        containerDivAttr.value = "book-div";
        containerDiv.setAttributeNode(containerDivAttr);
        myDiv.appendChild(containerDiv);
    }

    for (var i = 0; i < isbn_array.length; i++) {

        var isbn = isbn_array[i];

        var bookDiv = document.createElement("div");
        bookDiv.className = "col-lg-3 col-md-4 col-xs-6 thumb tooltip_link";

        var dataToggleAttr = document.createAttribute("data-toggle");
        dataToggleAttr.value = "tooltip";
        bookDiv.setAttributeNode(dataToggleAttr);

        var dataOriginalTitleAttr = document.createAttribute("data-original-title");
        dataOriginalTitleAttr.value = titles_array[isbn];
        bookDiv.setAttributeNode(dataOriginalTitleAttr);

        //=================================================================================
        var thumbnailA = document.createElement("a");
        thumbnailA.className = "thumbnail";

        var dataToggleAttrA = document.createAttribute("data-toggle");
        dataToggleAttrA.value = "modal";
        thumbnailA.setAttributeNode(dataToggleAttrA);

        var dataTarget = document.createAttribute("data-target");
        dataTarget.value = "#myModal_" + isbn;
        thumbnailA.setAttributeNode(dataTarget);

        bookDiv.appendChild(thumbnailA);
        //=================================================================================

        //=================================================================================
        var coverImg = document.createElement("img");
        coverImg.className = "img-responsive";

        var imgSrc = document.createAttribute("src");
        imgSrc.value = url_array[isbn];
        coverImg.setAttributeNode(imgSrc);


        var idElement = document.createAttribute("id");
        idElement.value = "coverImage_" + isbn;
        coverImg.setAttributeNode(idElement);

        thumbnailA.appendChild(coverImg);
        //=================================================================================

        containerDiv.appendChild(bookDiv);
    }
    
    createBookDetailModal();
}