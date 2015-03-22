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

    $currentBooksList = $redisClient->zRangeByScore('currentBooks', $isbn, $isbn);
    $title = $redisClient->hGet("book:".$isbn, "title");
    $totalPage = $redisClient->hGet("book:".$isbn, "totalPages");
    if ($bookmark > 0 && count($currentBooksList)==0){
        $redisClient->zAdd('currentBooks', $isbn, $title);
    } else if ($bookmark == $totalPage && count($currentBooksList)==1){
        $redisClient->zDelete('currentBooks', $title);
    }

    while($arr_mems = $redisClient->sscan('search', $it)) {
        foreach($arr_mems as $str_mem) {
            if (strpos($str_mem, $isbn) !== false){
                $redisClient->sRem('search', $str_mem);
                
                $details = explode(";", $str_mem);
                $details[5] = $location;
                $newSearchValue = $details[0].";".$details[1].";".$details[2].";".$details[3].";".$details[4]."; ".$location;
                $redisClient->sAdd('search', $newSearchValue);
            }
        }
    }
    
    echo "". $result ."";

?>