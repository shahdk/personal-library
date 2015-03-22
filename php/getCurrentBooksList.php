<?php
    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');

    $currentBookList = [];

    $currentBooks = $redisClient->zRange('currentBooks', 0, -1, true);
    foreach($currentBooks as $title => $isbn) {
        array_push($currentBookList, $isbn);
        array_push($currentBookList, $title);
    }
    
    echo "". implode(",", $currentBookList) ."";
        
?>