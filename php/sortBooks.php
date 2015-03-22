<?php

    $sortTerm = $_GET['sort-term'];
    $isWishlist = $_GET['isWishlist'];
    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');

    
    $redisClient->delete('spine');
    
    $sortBy = 'isbn';
    $sortedArray = [];


    if ($sortTerm == 'titleAsc') {
        $sortBy = 'title';
        $sortedArray = $redisClient->sort('titleSort', array('sort' => 'asc', 'alpha' => TRUE));
    } else if ($sortTerm == 'titleDesc') {
        $sortBy = 'title';
        $sortedArray = $redisClient->sort('titleSort', array('sort' => 'desc', 'alpha' => TRUE));
    } else if ($sortTerm == 'authorAsc') {
        $sortBy = 'author';
        $sortedArray = $redisClient->sort('authorSort', array('sort' => 'asc', 'alpha' => TRUE));
    } else if ($sortTerm == 'authorDesc') {
        $sortBy = 'author';
        $sortedArray = $redisClient->sort('authorSort', array('sort' => 'desc', 'alpha' => TRUE));
    } else if ($sortTerm == 'isbnAsc') {
        $sortBy = 'isbn';
        $sortedArray = $redisClient->sort('isbnSort', array('sort' => 'asc', 'alpha' => TRUE));
    } else {
        $sortBy = 'isbn';
        $sortedArray = $redisClient->sort('isbnSort', array('sort' => 'desc', 'alpha' => TRUE));
    }

    for($i=0; $i<count($sortedArray); $i++) {
        $sortedString = $sortedArray[$i];
        $details = explode(";", $sortedString);        
        
        if ($sortBy=="title" || $sortBy=="author"){
            $url = trim($details[2]);
            $isbn = trim($details[1]);
            $wishlist = $redisClient->hGet("book:".$isbn, "isWishlist");
        
            if ($isWishlist == $wishlist){
                $redisClient->rPush('spine', $isbn."|".$url);
            }
            
        } else if ($sortBy=='isbn') {
            $url = trim($details[1]);
            $isbn = trim($details[0]);
            $wishlist = $redisClient->hGet("book:".$isbn, "isWishlist");
        
            if ($isWishlist == $wishlist){
                $redisClient->rPush('spine', $isbn."|".$url);
            }
        }
    }
?>


















