function initializeSpine(){
    
    var httpRequest = new XMLHttpRequest();
    var url = "php/initializeSpine.php";

    httpRequest.open("GET", url, true);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            //do nothing
        }
    }

    httpRequest.send();
}