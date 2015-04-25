<?php

    $m = new MongoClient(); // connect
    $db = $m->selectDB("library");
    $collection = $db->books;
    $cursor = $collection->find();
    $books = [];
    foreach ($cursor as $book) {
        array_push($books, $book["isbn"]);
        array_push($books, $book["title"]);
        array_push($books, $book["authorName"]);
        array_push($books, $book["publishDate"]);
        array_push($books, $book["totalPages"]);
        array_push($books, $book["bookmark"]);
        array_push($books, $book["location"]);
        array_push($books, $book["rating"]);
        array_push($books, $book["coverImage"]);
    }

//    $redisClient = new Redis();
//    $redisClient->connect( '127.0.0.1');
//    
//    $spineList = $redisClient->zRange('coverImages', 0, -1, true);
//
//    $books = [];
//    foreach ($spineList as $coverURL => $bookISBN) {
//        $book = $redisClient->hGetAll('book:'.$bookISBN);
//        array_push($books, $book['isbn']);
//        array_push($books, $book['title']);
//        array_push($books, $book['authorName']);
//        array_push($books, $book['publishDate']);
//        array_push($books, $book['totalPages']);
//        array_push($books, $book['bookmark']);
//        array_push($books, $book['location']);
//        array_push($books, $book['rating']);
//        array_push($books, $book['coverImage']);
//        
//    }
//    
    echo "". implode(",", $books) ."";



?>