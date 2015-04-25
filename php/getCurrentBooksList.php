<?php

    $m = new MongoClient(); // connect
    $db = $m->selectDB("library");
    $collection = $db->books;

    $wishlishQuery = array("bookmark" => array('$gt'=>0));
    $cursor = $collection->find();
    $coverImages = [];

    foreach ($cursor as $document) {
        array_push($coverImages, $document["isbn"]);
        array_push($coverImages, $document["title"]);
    }

     echo "". implode(",", $coverImages) ."";
//    $redisClient = new Redis();
//    $redisClient->connect( '127.0.0.1');
//
//    $currentBookList = [];
//
//    $currentBooks = $redisClient->zRange('currentBooks', 0, -1, true);
//    foreach($currentBooks as $title => $isbn) {
//        array_push($currentBookList, $isbn);
//        array_push($currentBookList, $title);
//    }
//    
//    echo "". implode(",", $currentBookList) ."";
        
?>