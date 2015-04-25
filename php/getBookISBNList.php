<?php

    $m = new MongoClient(); // connect
    $db = $m->selectDB("library");
    $collection = $db->books;
    $isWishlist = $_GET["isWishlist"];

    $wishlishQuery = array('isWishlist' => $isWishlist);
    $cursor = $collection->find($wishlishQuery);
    $coverImages = [];

    foreach ($cursor as $document) {
        array_push($coverImages, $document["isbn"]);
        array_push($coverImages, $document["coverImage"]);
    }

//    $redisClient = new Redis();
//    $redisClient->connect( '127.0.0.1');
//
//    $coverImages = [];
//
//    $isWishlist = $_GET["isWishlist"];
//
//    $arr_mems = $redisClient->lRange('spine', 0, -1);
//    foreach($arr_mems as $str_mem) {
//
//        $details = explode("|", $str_mem);
//
//        $url = trim($details[1]);
//        $isbn = trim($details[0]);
//        
//        
//        $wishlist = $redisClient->hGet("book:".$isbn, "isWishlist");
//        
//        if ($isWishlist == $wishlist){
//            array_push($coverImages, $isbn);
//            array_push($coverImages, $url);
//        }
//    }
//    
    echo "". implode(",", $coverImages) ."";
        
?>