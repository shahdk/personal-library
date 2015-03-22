<?php
    if(isset($_POST["bookISBN"])) {
        
        $isWishlist = $_POST["isWishlist"];
        
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
        $redisClient->hSet("book:".$bookISBN, 'coverImage', $url);
        $redisClient->hSet("book:".$bookISBN, 'isWishlist', $isWishlist);
        
        $redisClient->zAdd('coverImages', $bookISBN, $url);
        $redisClient->zAdd('bookTitles', $bookISBN, strtolower($bookTitle));
        $redisClient->zAdd('bookAuthors', $bookISBN, strtolower($authorName));
        $redisClient->zAdd('bookPubDates', $bookISBN, strtolower($publishDate));
        
        if ($bookmark > 0){
            $redisClient->zAdd('currentBooks', $bookISBN, $bookTitle);
        }
        
        $redisClient->rPush('spine', $bookISBN."|".$url);
        
        $searchItem = $bookISBN." ; ".$url." ; ".strtolower($bookTitle)." ; ".strtolower($authorName)." ; ".strtolower($publishDate)." ; ".strtolower($location);
        $redisClient->sAdd('search', $searchItem);
        
        $isbnSort = $bookISBN." ; ".$url." ; ".strtolower($bookTitle)." ; ".strtolower($authorName)." ; ".strtolower($publishDate)." ; ".strtolower($location);
        $redisClient->sAdd('isbnSort', $isbnSort);
        
        $titleSort = strtolower($bookTitle)." ; ".$bookISBN." ; ".$url." ; ".strtolower($authorName)." ; ".strtolower($publishDate)." ; ".strtolower($location);
        $redisClient->sAdd('titleSort', $titleSort);
        
        $authorSort = strtolower($authorName)." ; ".$bookISBN." ; ".$url." ; ".strtolower($bookTitle)." ; ".strtolower($publishDate)." ; ".strtolower($location);
        $redisClient->sAdd('authorSort', $authorSort);
    }

?>