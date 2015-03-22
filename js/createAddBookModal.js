var coverURL = "";


function createAddBookModal() {
    var myDiv = document.getElementById("displayDiv");

    //=================================================================================
    var addBookModalDiv = document.createElement("div");
    setAddBookModalDivAttributes(addBookModalDiv);
    myDiv.appendChild(addBookModalDiv);
    //=================================================================================

    //=================================================================================
    var myModalDiv = document.createElement("div");
    setMyModalDivAttributes(myModalDiv);
    addBookModalDiv.appendChild(myModalDiv);
    //=================================================================================

    //=================================================================================
    var modalWrapperDiv = document.createElement("div");
    setModalWrapperDivAttributes(modalWrapperDiv);
    myModalDiv.appendChild(modalWrapperDiv);
    //=================================================================================

    //=================================================================================
    var linkBoxTopDiv = document.createElement("div");
    setLinkBoxTopDivAttributes(linkBoxTopDiv);
    modalWrapperDiv.appendChild(linkBoxTopDiv);
    //=================================================================================

    //=================================================================================
    var bookHeaderDiv = document.createElement("div");
    setBookHeaderDivAttributes(bookHeaderDiv);
    linkBoxTopDiv.appendChild(bookHeaderDiv);
    //=================================================================================

    //=================================================================================
    var headerOne = document.createElement("h1");
    headerOne.innerHTML = "Add Book";
    bookHeaderDiv.appendChild(headerOne);
    //=================================================================================

    //=================================================================================
    var descriptionBoxDiv = document.createElement("div");
    descriptionBoxDiv.className = "description-box";
    modalWrapperDiv.appendChild(descriptionBoxDiv);
    //=================================================================================

    //=================================================================================
    var isbnTable = document.createElement("table");
    descriptionBoxDiv.appendChild(isbnTable);
    //=================================================================================

    //=================================================================================
    var isbnTr = document.createElement("tr");
    isbnTable.appendChild(isbnTr);
    //=================================================================================

    //=================================================================================
    var isbnTrLabelTd = document.createElement("td");
    setLabelTdAttributes(isbnTrLabelTd, "ISBN Number*: ");
    isbnTr.appendChild(isbnTrLabelTd);
    //=================================================================================

    //=================================================================================
    var isbnTrInputTd = document.createElement("td");
    isbnTr.appendChild(isbnTrInputTd);
    //=================================================================================

    //=================================================================================
    var isbnInput = document.createElement("input");
    isbnInput.className = "editInput";
    
    var inputOnFocusOutAttr = document.createAttribute("onfocusout");
    inputOnFocusOutAttr.value = "searchISBN();";
    isbnInput.setAttributeNode(inputOnFocusOutAttr);
    
    var isbnInputIdAttr = document.createAttribute("id");
    isbnInputIdAttr.value = "addIsbnInput";
    isbnInput.setAttributeNode(isbnInputIdAttr);

    var isbnInputTypeAttr = document.createAttribute("type");
    isbnInputTypeAttr.value = "text";
    isbnInput.setAttributeNode(isbnInputTypeAttr);
    
    isbnTrInputTd.appendChild(isbnInput);
    //=================================================================================

    //=================================================================================
    var emptyDiv = document.createElement("div");
    descriptionBoxDiv.appendChild(emptyDiv);
    //=================================================================================

    //=================================================================================
    var orP = document.createElement("p");
    orP.innerHTML = "or";
    descriptionBoxDiv.appendChild(orP);
    //=================================================================================

    //=================================================================================
    var emptyHeader = document.createElement("hr");
    descriptionBoxDiv.appendChild(emptyHeader);
    //=================================================================================

    //=================================================================================
    descriptionBoxDiv.appendChild(emptyDiv);
    //=================================================================================

    //=================================================================================
    var bookDetailTable = document.createElement("table");
    descriptionBoxDiv.appendChild(bookDetailTable);
    //=================================================================================

    //=================================================================================
    var bookTitleTr = document.createElement("tr");
    bookDetailTable.appendChild(bookTitleTr);
    //=================================================================================

    //=================================================================================
    var bookTitleTrLabelTd = document.createElement("td");
    setLabelTdAttributes(bookTitleTrLabelTd, "Book Title*: ");
    bookTitleTr.appendChild(bookTitleTrLabelTd);
    //=================================================================================

    //=================================================================================
    var bookTitleTrInputTd = document.createElement("td");
    bookTitleTr.appendChild(bookTitleTrInputTd);
    //=================================================================================

    //=================================================================================
    var bookTitleInput = document.createElement("input");
    setInputAttributes(bookTitleInput, "addBookTitleInput");
    bookTitleTrInputTd.appendChild(bookTitleInput);
    //=================================================================================

    //=================================================================================
    var authorNameTr = document.createElement("tr");
    bookDetailTable.appendChild(authorNameTr);
    //=================================================================================

    //=================================================================================
    var authorNameTrLabelTd = document.createElement("td");
    setLabelTdAttributes(authorNameTrLabelTd, "Author Name*: ");
    authorNameTr.appendChild(authorNameTrLabelTd);
    //=================================================================================

    //=================================================================================
    var authorNameTrInputTd = document.createElement("td");
    authorNameTr.appendChild(authorNameTrInputTd);
    //=================================================================================

    //=================================================================================
    var authorNameInput = document.createElement("input");
    setInputAttributes(authorNameInput, "addAuthorNameInput");
    authorNameTrInputTd.appendChild(authorNameInput);
    //=================================================================================

    //=================================================================================
    var publishDateTr = document.createElement("tr");
    bookDetailTable.appendChild(publishDateTr);
    //=================================================================================

    //=================================================================================
    var publishDateTrLabelTd = document.createElement("td");
    setLabelTdAttributes(publishDateTrLabelTd, "Published On*: ");
    publishDateTr.appendChild(publishDateTrLabelTd);
    //=================================================================================

    //=================================================================================
    var publishDateTrInputTd = document.createElement("td");
    publishDateTr.appendChild(publishDateTrInputTd);
    //=================================================================================

    //=================================================================================
    var publishDateInput = document.createElement("input");
    setInputAttributes(publishDateInput, "addPublishedYearInput");
    publishDateTrInputTd.appendChild(publishDateInput);
    //=================================================================================

    //=================================================================================
    var totalPagesTr = document.createElement("tr");
    bookDetailTable.appendChild(totalPagesTr);
    //=================================================================================

    //=================================================================================
    var totalPagesTrLabelTd = document.createElement("td");
    setLabelTdAttributes(totalPagesTrLabelTd, "Total Pages: ");
    totalPagesTr.appendChild(totalPagesTrLabelTd);
    //=================================================================================

    //=================================================================================
    var totalPagesTrInputTd = document.createElement("td");
    totalPagesTr.appendChild(totalPagesTrInputTd);
    //=================================================================================

    //=================================================================================
    var totalPagesInput = document.createElement("input");
    setInputAttributes(totalPagesInput, "addTotalPagesInput");
    totalPagesTrInputTd.appendChild(totalPagesInput);
    //=================================================================================

    //=================================================================================
    descriptionBoxDiv.appendChild(emptyDiv);
    //=================================================================================

    //=================================================================================
    descriptionBoxDiv.appendChild(emptyHeader);
    //=================================================================================

    //=================================================================================
    descriptionBoxDiv.appendChild(emptyDiv);
    //=================================================================================

    //=================================================================================
    var personalDetailTable = document.createElement("table");
    descriptionBoxDiv.appendChild(personalDetailTable);
    //=================================================================================

    //=================================================================================
    var bookmarkTr = document.createElement("tr");
    personalDetailTable.appendChild(bookmarkTr);
    //=================================================================================

    //=================================================================================
    var bookmarkTrLabelTd = document.createElement("td");
    setLabelTdAttributes(bookmarkTrLabelTd, "Last Read Page: ");
    bookmarkTr.appendChild(bookmarkTrLabelTd);
    //=================================================================================

    //=================================================================================
    var bookmarkTrInputTd = document.createElement("td");
    bookmarkTr.appendChild(bookmarkTrInputTd);
    //=================================================================================

    //=================================================================================
    var bookmarkInput = document.createElement("input");
    setInputAttributes(bookmarkInput, "addBookmarkPageInput");
    bookmarkTrInputTd.appendChild(bookmarkInput);
    //=================================================================================

    //=================================================================================
    var locationTr = document.createElement("tr");
    personalDetailTable.appendChild(locationTr);
    //=================================================================================

    //=================================================================================
    var locationTrLabelTd = document.createElement("td");
    setLabelTdAttributes(locationTrLabelTd, "Location: ");
    locationTr.appendChild(locationTrLabelTd);
    //=================================================================================

    //=================================================================================
    var locationTrInputTd = document.createElement("td");
    locationTr.appendChild(locationTrInputTd);
    //=================================================================================

    //=================================================================================
    var locationInput = document.createElement("input");
    setInputAttributes(locationInput, "addLocationInput");
    locationTrInputTd.appendChild(locationInput);
    //=================================================================================

//    //=================================================================================
//    var ratingTr = document.createElement("tr");
//    personalDetailTable.appendChild(ratingTr);
//    //=================================================================================
//
//    //=================================================================================
//    var ratingTrLabelTd = document.createElement("td");
//    setLabelTdAttributes(ratingTrLabelTd, "Rating: ");
//    ratingTr.appendChild(ratingTrLabelTd);
//    //=================================================================================
//
//    //=================================================================================
//    var ratingTrInputTd = document.createElement("td");
//    ratingTr.appendChild(ratingTrInputTd);
//    //=================================================================================
//
//    //=================================================================================
//    var ratingDiv = document.createElement("div");
//    ratingDiv.className = "rating";
//    ratingTrInputTd.appendChild(ratingDiv);
//    //=================================================================================

    //=================================================================================
    var linkBoxDiv = document.createElement("div");
    linkBoxDiv.className = "link-box";
    modalWrapperDiv.appendChild(linkBoxDiv);
    //=================================================================================

    //=================================================================================
    var addLibraryButton = document.createElement("button");
    setAddButtonAttributes(addLibraryButton, "library", "addBook(false);", "Add to Library");
    linkBoxDiv.appendChild(addLibraryButton);
    //=================================================================================

    //=================================================================================
    var addWishlistButton = document.createElement("button");
    setAddButtonAttributes(addWishlistButton, "wishlist", "addBook(true);", "Add to Wishlist");
    linkBoxDiv.appendChild(addWishlistButton);
    //=================================================================================
}

function setAddBookModalDivAttributes(addBookModalDiv) {
    addBookModalDiv.className = "modal fade";

    var addBookIDAttr = document.createAttribute("id");
    addBookIDAttr.value = "addBookModal";
    addBookModalDiv.setAttributeNode(addBookIDAttr);

    var tabIndexAttr = document.createAttribute("tabindex");
    tabIndexAttr.value = "-1";
    addBookModalDiv.setAttributeNode(tabIndexAttr);

    var roleAttr = document.createAttribute("role");
    roleAttr.value = "dialog";
    addBookModalDiv.setAttributeNode(roleAttr);

    var ariaLabelAttr = document.createAttribute("aria-labelledby");
    ariaLabelAttr.value = "myModalLabel";
    addBookModalDiv.setAttributeNode(ariaLabelAttr);

    var ariaHiddenAttr = document.createAttribute("aria-hidden");
    ariaLabelAttr.value = "true";
    addBookModalDiv.setAttributeNode(ariaLabelAttr);
}

function setMyModalDivAttributes(myModalDiv) {
    myModalDiv.className = "popup-modal modal-dialog modal-vertical-centered";
}

function setModalWrapperDivAttributes(modalWrapperDiv) {
    var modalWrapperIdAttr = document.createAttribute("id");
    modalWrapperIdAttr.value = "modal-wrapper-div";
    modalWrapperDiv.setAttributeNode(modalWrapperIdAttr);
}

function setLinkBoxTopDivAttributes(linkBoxTopDiv) {
    var linkBoxTopIdAttr = document.createAttribute("id");
    linkBoxTopIdAttr.value = "link-box-top";
    linkBoxTopDiv.setAttributeNode(linkBoxTopIdAttr);
}

function setBookHeaderDivAttributes(bookHeaderDiv) {
    var bookheaderIdAttr = document.createAttribute("id");
    bookheaderIdAttr.value = "book-header";
    bookHeaderDiv.setAttributeNode(bookheaderIdAttr);
}

function setLabelTdAttributes(labelTd, innerText) {
    labelTd.innerHTML = innerText;
}

function setInputAttributes(inputElement, id) {
    inputElement.className = "editInput";

    var inputIdAttr = document.createAttribute("id");
    inputIdAttr.value = id;
    inputElement.setAttributeNode(inputIdAttr);

    var inputTypeAttr = document.createAttribute("type");
    inputTypeAttr.value = "text";
    inputElement.setAttributeNode(inputTypeAttr);
}

function setAddButtonAttributes(buttonElement, buttonName, onClickFunc, innerText) {
    buttonElement.className = "add-book-flat-btn";
    buttonElement.innerHTML = innerText;

    var buttonDataDismissAttr = document.createAttribute("data-dismiss");
    buttonDataDismissAttr.value = "modal";
    buttonElement.setAttributeNode(buttonDataDismissAttr);

    var buttonTypeAttr = document.createAttribute("type");
    buttonTypeAttr.value = "button";
    buttonElement.setAttributeNode(buttonTypeAttr);

    var buttonNameAttr = document.createAttribute("name");
    buttonNameAttr.value = buttonName;
    buttonElement.setAttributeNode(buttonNameAttr);

    var buttonOnClickAttr = document.createAttribute("onclick");
    buttonOnClickAttr.value = onClickFunc;
    buttonElement.setAttributeNode(buttonOnClickAttr);
}

function searchISBN() {
    var isbnVal = (document.getElementById("addIsbnInput").value).replace("-", "");

    var isbn = ISBN.parse(isbnVal);
    if (isbn && (isbn.isIsbn10() || isbn.isIsbn13())) {
        isbn = isbn.asIsbn13();
        var googleURL = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
        $.getJSON(googleURL, function (data) {
            
            if(data.items){
                var str = JSON.stringify(data, undefined, 4);
                document.getElementById("addBookTitleInput").value = data.items[0].volumeInfo.title;
                document.getElementById("addAuthorNameInput").value = data.items[0].volumeInfo.authors.toString();
                document.getElementById("addPublishedYearInput").value = data.items[0].volumeInfo.publishedDate;
                document.getElementById("addTotalPagesInput").value = data.items[0].volumeInfo.pageCount;
                coverURL = data.items[0].volumeInfo.imageLinks.thumbnail;
            } else {
                document.getElementById("addBookTitleInput").value = "Sorry book info unavailable";
                document.getElementById("addAuthorNameInput").value = "Sorry book info unavailable";
                document.getElementById("addPublishedYearInput").value = "Sorry book info unavailable";
                document.getElementById("addTotalPagesInput").value = "Sorry book info unavailable";
            }
        });
    } else {
        document.getElementById("addBookTitleInput").value = "";
        document.getElementById("addAuthorNameInput").value = "";
        document.getElementById("addPublishedYearInput").value = "";
        document.getElementById("addTotalPagesInput").value = "";
    }
}

function addBook(isWishlist) {

    var httpRequest2 = new XMLHttpRequest();
    var url = "php/addBook.php";

    var isbnVal = (document.getElementById("addIsbnInput").value).replace("-", "");
    var isbn = ISBN.parse(isbnVal);
    var bookISBN = isbn.asIsbn13();
    
    var bookTitle = document.getElementById("addBookTitleInput").value;
    var authorName = document.getElementById("addAuthorNameInput").value;
    var publishDate = document.getElementById("addPublishedYearInput").value;
    var totalPages = document.getElementById("addTotalPagesInput").value;
    var bookmark = document.getElementById("addBookmarkPageInput").value;
    var location = document.getElementById("addLocationInput").value;
    var rating = 0;

    if (!validInputs(bookISBN, bookTitle)) {
        return;
    }
    
    var find = "&";
    var re = new RegExp(find, "g");
    coverURL = coverURL.replace(re, "#");

    var vars = "bookISBN=" + bookISBN + "&bookTitle=" + bookTitle + "&authorName=" + authorName + "&publishDate=" + publishDate + "&totalPages=" + totalPages + "&bookmark=" + bookmark + "&location=" + location + "&rating=" + rating + "&url=" + coverURL + "&isWishlist=" + isWishlist;

    httpRequest2.open("POST", url, true);
    httpRequest2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    httpRequest2.onreadystatechange = function () {
        if (httpRequest2.readyState == 4 && httpRequest2.status == 200) {
            document.getElementById("addIsbnInput").value = "";
            document.getElementById("addBookTitleInput").value = "";
            document.getElementById("addAuthorNameInput").value = "";
            document.getElementById("addPublishedYearInput").value = "";
            document.getElementById("addTotalPagesInput").value = "";
            displayCurrentBooks();
            displayBooks($('#wishlistSwitch').bootstrapSwitch('state'));
        }
    }

    httpRequest2.send(vars);
}

function validInputs(isbn, title) {
    
    if (isbn.length == 0 || title.length == 0 || coverURL.length == 0){
        return false;
    }
    
    if (title == "Sorry book info unavailable") {
        return false;
    }
    
    return true;
}