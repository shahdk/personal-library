<?php
    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');
    
    $isbn = $_GET['isbn'];
    $result = 0;
    if ($isbn){
        $result += $redisClient->zRemRangeByScore('spine', $isbn, $isbn);
        $result += $redisClient->zRemRangeByScore('bookAuthors', $isbn, $isbn);
        $result += $redisClient->zRemRangeByScore('bookPubDates', $isbn, $isbn);
        $result += $redisClient->zRemRangeByScore('bookTitles', $isbn, $isbn);
        $result += $redisClient->delete('book:'.$isbn);
    }
    
    echo "". $result ."";

?>