function createBookDetailModal() {
    var books = new Array();

    var httpRequest = new XMLHttpRequest();
    var url = "php/getAllBooks.php";

    httpRequest.open("GET", url, true);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var responseArr = httpRequest.responseText;

            responseArr = responseArr.split(",");

            for (var i = 0; i < responseArr.length; i += 9) {
                var isbn = responseArr[i];
                var title = responseArr[i + 1];
                var authorName = responseArr[i + 2];
                var publishDate = responseArr[i + 3];
                var totalPages = responseArr[i + 4];
                var bookmark = responseArr[i + 5];
                var location = responseArr[i + 6];
                var rating = responseArr[i + 7];
                var coverImage = responseArr[i + 8];
                var book = {};

                coverImage = coverImage.replace("[", "");
                coverImage = coverImage.replace("]", "");

                var find = '"';
                var re = new RegExp(find, "g");
                coverImage = coverImage.replace(re, "");

                find = "#";
                re = new RegExp(find, "g");
                coverImage = coverImage.replace(re, "&");

                if (title && title.length > 0) {
                    book['isbn'] = isbn;
                    book['title'] = title;
                    book['authorName'] = authorName;
                    book['publishDate'] = publishDate;
                    book['totalPages'] = totalPages;
                    book['bookmark'] = bookmark;
                    book['location'] = location;
                    book['rating'] = rating;
                    book['coverImage'] = coverImage;
                    books.push(book);
                }
            }

            displayBookDetailModal(books);
        }
    }

    httpRequest.send();

}

function displayBookDetailModal(booksList) {



    for (var i = 0; i < booksList.length; i++) {
        var book = booksList[i];
        var isbn = book['isbn'];
        var title = book['title'];
        var author = book['authorName'];
        var publishDate = book['publishDate'];
        var totalPages = book['totalPages'];

        var bookmark = book['bookmark'];
        if (bookmark.length == 0) {
            bookmark = 200;
        }

        var location = book['location'];
        var rating = book['rating'];
        var coverImage = book['coverImage'];


        var myDiv = document.getElementById("displayDiv");

        //=================================================================================
        var bookDetailModalDiv = document.createElement("div");
        setBookDetailModalDivAttributes(bookDetailModalDiv, isbn);
        myDiv.appendChild(bookDetailModalDiv);
        //=================================================================================

        //=================================================================================
        var myModalDiv = document.createElement("div");
        setMyModalDivAttributesForDetailModal(myModalDiv);
        bookDetailModalDiv.appendChild(myModalDiv);
        //=================================================================================

        //=================================================================================
        var modalWrapperDiv = document.createElement("div");
        setModalWrapperDivAttributesForDetailModal(modalWrapperDiv);
        myModalDiv.appendChild(modalWrapperDiv);
        //=================================================================================

        //=================================================================================
        var linkBoxTopDiv = document.createElement("div");
        setLinkBoxTopDivAttributesForDetailModal(linkBoxTopDiv);
        modalWrapperDiv.appendChild(linkBoxTopDiv);
        //=================================================================================

        //=================================================================================
        var bookCoverDiv = document.createElement("div");
        setBookCoverDivAttributesForDetailModal(bookCoverDiv);
        linkBoxTopDiv.appendChild(bookCoverDiv);
        //=================================================================================

        //=================================================================================
        var bookCoverImage = document.createElement("img");
        setBookCoverImageAttributesForDetailModal(bookCoverImage, coverImage);
        bookCoverDiv.appendChild(bookCoverImage);
        //=================================================================================

        //=================================================================================
        var bookHeaderDiv = document.createElement("div");
        setBookHeaderDivAttributesForDetailModal(bookHeaderDiv);
        linkBoxTopDiv.appendChild(bookHeaderDiv);
        //=================================================================================

        //=================================================================================
        var headerTwo = document.createElement("h2");
        headerTwo.innerHTML = title;
        bookHeaderDiv.appendChild(headerTwo);
        //=================================================================================

        //=================================================================================
        var headerFour = document.createElement("h4");
        headerFour.innerHTML = "By " + author;
        bookHeaderDiv.appendChild(headerFour);
        //=================================================================================

        //=================================================================================
        var descriptionBoxDiv = document.createElement("div");
        descriptionBoxDiv.className = "description-box";
        modalWrapperDiv.appendChild(descriptionBoxDiv);
        //=================================================================================

        //=================================================================================
        var bookInfoTable = document.createElement("table");
        descriptionBoxDiv.appendChild(bookInfoTable);
        //=================================================================================

        //=================================================================================
        var isbnTr = document.createElement("tr");
        bookInfoTable.appendChild(isbnTr);
        //=================================================================================

        //=================================================================================
        var isbnTrLabelTd = document.createElement("td");
        setLabelTdAttributesForDetailModal(isbnTrLabelTd, "ISBN: ");
        isbnTr.appendChild(isbnTrLabelTd);
        //=================================================================================

        //=================================================================================
        var isbnTrInputTd = document.createElement("td");
        isbnTr.appendChild(isbnTrInputTd);
        //=================================================================================

        //=================================================================================
        var isbnInput = document.createElement("input");
        setInputAttributesForDetailModal(isbnInput, "isbnInput_" + isbn, isbn);
        isbnTrInputTd.appendChild(isbnInput);
        //=================================================================================

        //=================================================================================
        var publishDateTr = document.createElement("tr");
        bookInfoTable.appendChild(publishDateTr);
        //=================================================================================

        //=================================================================================
        var publishDateTrLabelTd = document.createElement("td");
        setLabelTdAttributesForDetailModal(publishDateTrLabelTd, "Published In: ");
        publishDateTr.appendChild(publishDateTrLabelTd);
        //=================================================================================

        //=================================================================================
        var publishDateTrInputTd = document.createElement("td");
        publishDateTr.appendChild(publishDateTrInputTd);
        //=================================================================================

        //=================================================================================
        var publishDateInput = document.createElement("input");
        setInputAttributesForDetailModal(publishDateInput, "publishedYearInput_" + isbn, publishDate);
        publishDateTrInputTd.appendChild(publishDateInput);
        //=================================================================================

        //=================================================================================
        var totalPagesTr = document.createElement("tr");
        bookInfoTable.appendChild(totalPagesTr);
        //=================================================================================

        //=================================================================================
        var totalPagesTrLabelTd = document.createElement("td");
        setLabelTdAttributesForDetailModal(totalPagesTrLabelTd, "Total Pages: ");
        totalPagesTr.appendChild(totalPagesTrLabelTd);
        //=================================================================================

        //=================================================================================
        var totalPagesTrInputTd = document.createElement("td");
        totalPagesTr.appendChild(totalPagesTrInputTd);
        //=================================================================================

        //=================================================================================
        var totalPagesInput = document.createElement("input");
        setInputAttributesForDetailModal(totalPagesInput, "totalPagesInput_" + isbn, totalPages);
        totalPagesTrInputTd.appendChild(totalPagesInput);
        //=================================================================================

        //=================================================================================
        var bookmarkTr = document.createElement("tr");
        bookInfoTable.appendChild(bookmarkTr);
        //=================================================================================

        //=================================================================================
        var bookmarkTrLabelTd = document.createElement("td");
        setLabelTdAttributesForDetailModal(bookmarkTrLabelTd, "Bookmarked Page: ");
        bookmarkTr.appendChild(bookmarkTrLabelTd);
        //=================================================================================

        //=================================================================================
        var bookmarkTrInputTd = document.createElement("td");
        bookmarkTr.appendChild(bookmarkTrInputTd);
        //=================================================================================

        //=================================================================================
        var bookmarkInput = document.createElement("input");
        setInputAttributesForDetailModal(bookmarkInput, "bookmarkPageInput_" + isbn, bookmark);
        bookmarkTrInputTd.appendChild(bookmarkInput);
        //=================================================================================

        //=================================================================================
        var locationTr = document.createElement("tr");
        bookInfoTable.appendChild(locationTr);
        //=================================================================================

        //=================================================================================
        var locationTrLabelTd = document.createElement("td");
        setLabelTdAttributesForDetailModal(locationTrLabelTd, "Location: ");
        locationTr.appendChild(locationTrLabelTd);
        //=================================================================================

        //=================================================================================
        var locationTrInputTd = document.createElement("td");
        locationTr.appendChild(locationTrInputTd);
        //=================================================================================

        //=================================================================================
        var locationInput = document.createElement("input");
        setInputAttributesForDetailModal(locationInput, "locationInput_" + isbn, location);
        locationTrInputTd.appendChild(locationInput);
        //=================================================================================

        //        //=================================================================================
        //        var ratingTr = document.createElement("tr");
        //        bookInfoTable.appendChild(ratingTr);
        //        //=================================================================================
        //
        //        //=================================================================================
        //        var ratingTrLabelTd = document.createElement("td");
        //        setLabelTdAttributesForDetailModal(ratingTrLabelTd, "Rating: ");
        //        ratingTr.appendChild(ratingTrLabelTd);
        //        //=================================================================================
        //
        //        //=================================================================================
        //        var ratingTrInputTd = document.createElement("td");
        //        ratingTr.appendChild(ratingTrInputTd);
        //        //=================================================================================
        //
        //        //=================================================================================
        //        var ratingDiv = document.createElement("div");
        //        ratingDiv.className = "rating";
        //        ratingTrInputTd.appendChild(ratingDiv);
        //        //=================================================================================

        //=================================================================================
        var progressDiv = document.createElement("div");
        progressDiv.className = "progress";
        modalWrapperDiv.appendChild(progressDiv);
        //=================================================================================

        //=================================================================================
        var progressBarDiv = document.createElement("div");
        setProgressBarAttributesForDetailModal(progressBarDiv, isbn, (bookmark / totalPages));
        progressDiv.appendChild(progressBarDiv);
        //=================================================================================

        //=================================================================================
        var progressBarTextP = document.createElement("p");
        progressBarTextP.innerHTML = bookmark + " pages read";
        progressBarDiv.appendChild(progressBarTextP);
        //=================================================================================

        //=================================================================================
        var linkBoxDiv = document.createElement("div");
        linkBoxDiv.className = "link-box";
        modalWrapperDiv.appendChild(linkBoxDiv);
        //=================================================================================

        //=================================================================================
        var saveChangesButton = document.createElement("button");
        setSaveButtonAttributesForDetailModal(saveChangesButton, isbn);
        linkBoxDiv.appendChild(saveChangesButton);
        //=================================================================================

        //=================================================================================
        var deleteButton = document.createElement("button");
        setDeleteButtonAttributesForDetailModal(deleteButton, isbn);
        linkBoxDiv.appendChild(deleteButton);
        //=================================================================================
    }
}

function setBookDetailModalDivAttributes(bookDetailModalDiv, isbn) {
    bookDetailModalDiv.className = "modal fade";

    var addBookIDAttr = document.createAttribute("id");
    addBookIDAttr.value = "myModal_" + isbn;
    bookDetailModalDiv.setAttributeNode(addBookIDAttr);

    var tabIndexAttr = document.createAttribute("tabindex");
    tabIndexAttr.value = "-1";
    bookDetailModalDiv.setAttributeNode(tabIndexAttr);

    var roleAttr = document.createAttribute("role");
    roleAttr.value = "dialog";
    bookDetailModalDiv.setAttributeNode(roleAttr);

    var ariaLabelAttr = document.createAttribute("aria-labelledby");
    ariaLabelAttr.value = "myModalLabel";
    bookDetailModalDiv.setAttributeNode(ariaLabelAttr);

    var ariaHiddenAttr = document.createAttribute("aria-hidden");
    ariaLabelAttr.value = "true";
    bookDetailModalDiv.setAttributeNode(ariaLabelAttr);
}

function setMyModalDivAttributesForDetailModal(myModalDiv) {
    myModalDiv.className = "popup-modal modal-dialog modal-vertical-centered";
}

function setModalWrapperDivAttributesForDetailModal(modalWrapperDiv) {
    var modalWrapperIdAttr = document.createAttribute("id");
    modalWrapperIdAttr.value = "modal-wrapper-div";
    modalWrapperDiv.setAttributeNode(modalWrapperIdAttr);
}

function setLinkBoxTopDivAttributesForDetailModal(linkBoxTopDiv) {
    var linkBoxTopIdAttr = document.createAttribute("id");
    linkBoxTopIdAttr.value = "link-box-top";
    linkBoxTopDiv.setAttributeNode(linkBoxTopIdAttr);
}

function setBookCoverDivAttributesForDetailModal(bookCoverDiv) {
    var bookCoverIdAttr = document.createAttribute("id");
    bookCoverIdAttr.value = "book-cover";
    bookCoverDiv.setAttributeNode(bookCoverIdAttr);
}

function setBookCoverImageAttributesForDetailModal(bookCoverImage, url) {
    var bookCoverImgAttr = document.createAttribute("src");
    bookCoverImgAttr.value = url;
    bookCoverImage.setAttributeNode(bookCoverImgAttr);
}

function setBookHeaderDivAttributesForDetailModal(bookHeaderDiv) {
    var bookheaderIdAttr = document.createAttribute("id");
    bookheaderIdAttr.value = "book-header";
    bookHeaderDiv.setAttributeNode(bookheaderIdAttr);
}

function setLabelTdAttributesForDetailModal(labelTd, innerText) {
    labelTd.innerHTML = innerText;
}

function setInputAttributesForDetailModal(inputElement, id, value) {
    inputElement.className = "editableInput";

    var inputIdAttr = document.createAttribute("id");
    inputIdAttr.value = id;
    inputElement.setAttributeNode(inputIdAttr);

    var inputTypeAttr = document.createAttribute("type");
    inputTypeAttr.value = "text";
    inputElement.setAttributeNode(inputTypeAttr);

    var inputValueAttr = document.createAttribute("value");
    inputValueAttr.value = value;
    inputElement.setAttributeNode(inputValueAttr);
}

function setProgressBarAttributesForDetailModal(progressBarDiv, isbn, val) {
    val = val * 100;
    progressBarDiv.className = "progress-bar";

    var progressBarIdAttr = document.createAttribute("id");
    progressBarIdAttr.value = "progress-bar-" + isbn;
    progressBarDiv.setAttributeNode(progressBarIdAttr);

    var roleAttr = document.createAttribute("role");
    roleAttr.value = "progressbar";
    progressBarDiv.setAttributeNode(roleAttr);

    var valNowAttr = document.createAttribute("aria-valuenow");
    valNowAttr.value = val;
    progressBarDiv.setAttributeNode(valNowAttr);

    var valMinAttr = document.createAttribute("aria-valuemin");
    valMinAttr.value = 0;
    progressBarDiv.setAttributeNode(valMinAttr);

    var valMaxAttr = document.createAttribute("aria-valuemax");
    valMaxAttr.value = 100;
    progressBarDiv.setAttributeNode(valMaxAttr);

    var percent = val;
    var spread = 100;
    var ratio = percent / spread;
    var red = 0;
    var green = 0;
    var blue = 0;

    if (ratio < 0.25) {
        red = 1;
        blue = 4 * ratio;
    } else if (ratio < 0.5) {
        blue = 1;
        red = 1 + (4 * (0 - percent + 0.25 * spread) / spread);
    } else if (ratio < 0.75) {
        blue = 1;
        green = 4 * (percent - 0 - 0.5 * spread) / spread;
    } else {
        green = 1;
        blue = 1 + 4 * (0 - percent + 0.75 * spread) / spread;
    }

    var widthAttr = document.createAttribute("style");
    widthAttr.value = "width: " + val + "%; background-color:rgb(" + Math.floor(red * 255) + "," + Math.floor(green * 255) + "," + Math.floor(blue * 255) + "); color:#000;";
    progressBarDiv.setAttributeNode(widthAttr);
}

function setSaveButtonAttributesForDetailModal(buttonElement, isbn) {
    buttonElement.className = "save-flat-btn";
    buttonElement.innerHTML = "Save Changes";

    var buttonDataDismissAttr = document.createAttribute("data-dismiss");
    buttonDataDismissAttr.value = "modal";
    buttonElement.setAttributeNode(buttonDataDismissAttr);

    var buttonTypeAttr = document.createAttribute("type");
    buttonTypeAttr.value = "button";
    buttonElement.setAttributeNode(buttonTypeAttr);

    var buttonNameAttr = document.createAttribute("id");
    buttonNameAttr.value = "save_" + isbn;
    buttonElement.setAttributeNode(buttonNameAttr);

    var buttonOnClickAttr = document.createAttribute("onclick");
    buttonOnClickAttr.value = "saveChanges(" + isbn + ");";
    buttonElement.setAttributeNode(buttonOnClickAttr);
}

function setDeleteButtonAttributesForDetailModal(buttonElement, isbn) {
    buttonElement.className = "delete-flat-btn";
    buttonElement.innerHTML = "Delete Book";

    var buttonDataDismissAttr = document.createAttribute("data-dismiss");
    buttonDataDismissAttr.value = "modal";
    buttonElement.setAttributeNode(buttonDataDismissAttr);

    var buttonTypeAttr = document.createAttribute("type");
    buttonTypeAttr.value = "button";
    buttonElement.setAttributeNode(buttonTypeAttr);

    var buttonNameAttr = document.createAttribute("id");
    buttonNameAttr.value = "delete_" + isbn;
    buttonElement.setAttributeNode(buttonNameAttr);

    var buttonOnClickAttr = document.createAttribute("onclick");
    buttonOnClickAttr.value = "deleteBook(" + isbn + ");";
    buttonElement.setAttributeNode(buttonOnClickAttr);
}

function saveChanges(isbn) {}

function deleteBook(isbn) {
    var deleteRequest = new XMLHttpRequest();

    var url = "php/deleteBook.php?isbn=" + isbn;

    deleteRequest.open("GET", url, true);

    deleteRequest.onreadystatechange = function () {
        if (deleteRequest.readyState == 4 && deleteRequest.status == 200) {
            var response = deleteRequest.responseText;

            if (response == 5){
                displayBooks();
            } else {
                alert('Could not delete book');
            }

        }
    }

    deleteRequest.send();
}