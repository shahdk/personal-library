function displayCurrentBooks(){
        
    var currentBookElement = document.getElementById("current-books");
    if (currentBookElement) {
        while (currentBookElement.firstChild) {
            currentBookElement.removeChild(currentBookElement.firstChild);
        }
    }
    
    var httpRequest = new XMLHttpRequest();
    var url = "php/getCurrentBooksList.php";
    
    var title_array = {};
    var isbn_array = new Array();

    httpRequest.open("GET", url, true);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var responseArr = httpRequest.responseText;
            
            responseArr = responseArr.split(",");
            
            for (var i = 0; i < responseArr.length; i += 2) {
                var isbn = responseArr[i];
                var title = responseArr[i + 1];

                if (title && title.length > 0) {
                    title_array[isbn] = title;
                    isbn_array.push(isbn);
                }
            }

            displayCurrentlyReadingBooks(title_array, isbn_array);
        }
    }

    httpRequest.send();
    
}


function displayCurrentlyReadingBooks(title_array, isbn_array){
    
    for (var i = 0; i < isbn_array.length; i++) {
        var isbn = isbn_array[i];
        var title = title_array[isbn];
        
        var dropdown = document.getElementById("current-books");
        
        var listItem = document.createElement("li");
        dropdown.appendChild(listItem);
        
        var linkA = document.createElement("a");
        linkA.innerHTML = title;
        
        var dataToggleAttrA = document.createAttribute("data-toggle");
        dataToggleAttrA.value = "modal";
        linkA.setAttributeNode(dataToggleAttrA);

        var dataTarget = document.createAttribute("data-target");
        dataTarget.value = "#myModal_" + isbn;
        linkA.setAttributeNode(dataTarget);
        
        listItem.appendChild(linkA);
    }
}