<?php
    if(isset($_POST["bookISBN"])) {
        
        $bookISBN = $_POST["bookISBN"];
        $bookTitle = $_POST["bookTitle"];
        $authorName = $_POST["authorName"];
        $publishDate = $_POST["publishDate"];
        $totalPages = $_POST["totalPages"];
        $bookmark = $_POST["bookmark"];
        $location = $_POST["location"];
        $rating = $_POST["rating"];
        $url = $_POST["url"];
        
        
        $redisClient = new Redis();
        $redisClient->connect( '127.0.0.1');
        
        $redisClient->hSet("book:".$bookISBN, 'isbn', $bookISBN);
        $redisClient->hSet("book:".$bookISBN, 'title', $bookTitle);
        $redisClient->hSet("book:".$bookISBN, 'authorName', $authorName);
        $redisClient->hSet("book:".$bookISBN, 'publishDate', $publishDate);
        $redisClient->hSet("book:".$bookISBN, 'totalPages', $totalPages);
        $redisClient->hSet("book:".$bookISBN, 'bookmark', $bookmark);
        $redisClient->hSet("book:".$bookISBN, 'location', $location);
        $redisClient->hSet("book:".$bookISBN, 'rating', $rating);
        
        $redisClient->zAdd('spine', $bookISBN, $url);
        
    }

?>