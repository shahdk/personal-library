document.onload = displayBooks();

function displayBooks() {

    var bookDivElement = document.getElementById("book-div");
    if (bookDivElement) {
        while (bookDivElement.firstChild) {
            bookDivElement.removeChild(bookDivElement.firstChild);
        }
    }
    
    var httpRequest = new XMLHttpRequest();
    var url = "php/getBookList.php";
    var file_array = new Array();

    httpRequest.open("GET", url, true);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var response = httpRequest.responseText;
            response = response.replace("[", "");
            response = response.replace("]", "");

            var find = '"';
            var re = new RegExp(find, "g");
            response = response.replace(re, "");

            find = "#";
            re = new RegExp(find, "g");
            response = response.replace(re, "&");

            file_array = response.split(",");
            createBookDivs(file_array);
        }
    }

    httpRequest.send();
}

function createBookDivs(file_array) {

    var myDiv = document.getElementById("displayDiv");

    var containerDiv = document.getElementById("book-div");
    if (!containerDiv) {
        containerDiv = document.createElement("div");
        var containerDivAttr = document.createAttribute("id");
        containerDivAttr.value = "book-div";
        containerDiv.setAttributeNode(containerDivAttr);
        myDiv.appendChild(containerDiv);
    }
    
    for (var i = 0; i < file_array.length; i++) {

        var bookDiv = document.createElement("div");
        bookDiv.className = "col-lg-3 col-md-4 col-xs-6 thumb tooltip_link";

        var dataToggleAttr = document.createAttribute("data-toggle");
        dataToggleAttr.value = "tooltip";
        bookDiv.setAttributeNode(dataToggleAttr);

        var dataOriginalTitleAttr = document.createAttribute("data-original-title");
        dataOriginalTitleAttr.value = "Book " + i;
        bookDiv.setAttributeNode(dataOriginalTitleAttr);

        //=================================================================================
        var thumbnailA = document.createElement("a");
        thumbnailA.className = "thumbnail";

        var dataToggleAttrA = document.createAttribute("data-toggle");
        dataToggleAttrA.value = "modal";
        thumbnailA.setAttributeNode(dataToggleAttrA);

        var dataTarget = document.createAttribute("data-target");
        dataTarget.value = "#myModal" + i;
        thumbnailA.setAttributeNode(dataTarget);

        bookDiv.appendChild(thumbnailA);
        //=================================================================================

        //=================================================================================
        var coverImg = document.createElement("img");
        coverImg.className = "img-responsive";

        var imgSrc = document.createAttribute("src");
        imgSrc.value = file_array[i];
        coverImg.setAttributeNode(imgSrc);


        var idElement = document.createAttribute("id");
        idElement.value = "coverImage" + i;
        coverImg.setAttributeNode(idElement);

        thumbnailA.appendChild(coverImg);
        //=================================================================================

        containerDiv.appendChild(bookDiv);
    }
}