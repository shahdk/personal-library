<?php

    $searchTerm = strtolower($_GET['search-term']);
    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');

    $redisClient->setOption(Redis::OPT_SCAN, Redis::SCAN_RETRY);
    $redisClient->delete('spine');
    
    if($searchTerm==""){
        $it = NULL;
        while($arr_matches = $redisClient->zscan('coverImages', $it)) {
            foreach($arr_matches as $str_mem => $f_score) {
                $redisClient->zAdd('spine', $f_score, $str_mem);
            }
        }
        echo "".$searchTerm."";
    } else {
        $it = NULL;
        while($arr_mems = $redisClient->sscan('search', $it, "*".$searchTerm."*")) {
            foreach($arr_mems as $str_mem) {
                $details = explode(";", $str_mem);
                
                $url = trim($details[1]);
                $isbn = trim($details[0]);
                
                $redisClient->zAdd('spine', $isbn, $url);
            }
        }
    }
    
?>