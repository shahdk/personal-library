<?php
    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');
    
    $isbn = $_GET['isbn'];
    $bookmark = $_GET['bookmark'];
    $location = $_GET['location'];

    $result = 0;
    if ($isbn){
        $result += $redisClient->hSet("book:".$isbn, 'bookmark', $bookmark);
        $result += $redisClient->hSet("book:".$isbn, 'location', $location);
    }
    
    echo "". $result ."";

?>