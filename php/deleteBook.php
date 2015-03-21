<?php
    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');
    
    $isbn = $_GET['isbn'];

    $urlArr = $redisClient->zRangeByScore('coverImages', $isbn, $isbn);
    $url = $urlArr[0];

    $result = 0;
    if ($isbn){
        $result += $redisClient->lRem('spine', $isbn."|".$url, 0);
        $result += $redisClient->zRemRangeByScore('bookAuthors', $isbn, $isbn);
        $result += $redisClient->zRemRangeByScore('bookPubDates', $isbn, $isbn);
        $result += $redisClient->zRemRangeByScore('bookTitles', $isbn, $isbn);
        $result += $redisClient->zRemRangeByScore('coverImages', $isbn, $isbn);
        $result += $redisClient->delete('book:'.$isbn);
    }
    
    echo "". $result ."";

?>