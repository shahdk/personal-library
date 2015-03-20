<?php


    
    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');
    
    $spineList = $redisClient->zRange('spine', 0, -1, true);

    $coverImages = [];
    foreach ($spineList as $coverURL => $bookISBN) {
        array_push($coverImages, $bookISBN);
        array_push($coverImages, $coverURL);
    }

    echo "". implode(",", $coverImages) ."";
        
?>