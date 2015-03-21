<?php

    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');

    $redisClient->setOption(Redis::OPT_SCAN, Redis::SCAN_RETRY);
    
    $it = NULL;
    while($arr_matches = $redisClient->zscan('coverImages', $it)) {
        foreach($arr_matches as $str_mem => $f_score) {
            $redisClient->zAdd('spine', $f_score, $str_mem);
        }
    }
?>