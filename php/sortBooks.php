<?php

    $sortTerm = $_GET['sort-term'];
    $isWishlist = $_GET['isWishlist'];

    $m = new MongoClient(); // connect
    $db = $m->selectDB("library");
    $collection = $db->books;
    
    $cursor = $collection->find();


//    $redisClient = new Redis();
//    $redisClient->connect( '127.0.0.1');
//
//    
//    $redisClient->delete('spine');
//    


//    $sortBy = 'isbn';
//    $sortedOrder = 1;


//
//
    if ($sortTerm == 'titleAsc') {
        $sortBy = 'title';
        $sortedOrder = 1;
    } else if ($sortTerm == 'titleDesc') {
        $sortBy = 'title';
        $sortedOrder = -1;
    } else if ($sortTerm == 'authorAsc') {
        $sortBy = 'authorName';
        $sortedOrder = 1;
    } else if ($sortTerm == 'authorDesc') {
        $sortBy = 'authorName';
        $sortedOrder = -1;
    } else if ($sortTerm == 'isbnAsc') {
        $sortBy = 'isbn';
        $sortedOrder = 1;
    } else {
        $sortBy = 'isbn';
        $sortedOrder = -1;
    }
//
//    $collection->drop();

    $cursor->sort(array($sortBy => $sortedOrder));

    foreach ($cursor as $book) {
        $isbn = $book["isbn"];
        $collection->remove(array('isbn' => $isbn));
        echo "".print_r($book)."";
        $collection->insert($book);
    }
//
//    echo "".print_r($cursor)."";


//
//    $collection = $db->books;
//    $collection->batchInsert($cursor);
//
//    for($i=0; $i<count($sortedArray); $i++) {
//        $sortedString = $sortedArray[$i];
//        $details = explode(";", $sortedString);        
//        
//        if ($sortBy=="title" || $sortBy=="author"){
//            $url = trim($details[2]);
//            $isbn = trim($details[1]);
//            $wishlist = $redisClient->hGet("book:".$isbn, "isWishlist");
//        
//            if ($isWishlist == $wishlist){
//                $redisClient->rPush('spine', $isbn."|".$url);
//            }
//            
//        } else if ($sortBy=='isbn') {
//            $url = trim($details[1]);
//            $isbn = trim($details[0]);
//            $wishlist = $redisClient->hGet("book:".$isbn, "isWishlist");
//        
//            if ($isWishlist == $wishlist){
//                $redisClient->rPush('spine', $isbn."|".$url);
//            }
//        }
//    }
?>


















