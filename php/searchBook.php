<?php

    $searchTerm = strtolower($_GET['search-term']);
    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');

    $redisClient->setOption(Redis::OPT_SCAN, Redis::SCAN_RETRY);
    $redisClient->delete('spine');

    $isWishlist = $_GET['isWishlist'];
    

    if($searchTerm==""){
        $it = NULL;
        while($arr_matches = $redisClient->zscan('coverImages', $it)) {
            foreach($arr_matches as $str_mem => $f_score) {
                $wishlist = $redisClient->hGet("book:".$f_score, "isWishlist");
                if ($isWishlist == $wishlist){
                        $redisClient->rPush('spine', $f_score."|".$str_mem);
                    }
                }
        }
        
    } else {
        $it = NULL;
        while($arr_mems = $redisClient->sscan('search', $it, "*".$searchTerm."*")) {
            foreach($arr_mems as $str_mem) {
                $details = explode(";", $str_mem);
                
                $url = trim($details[1]);
                $isbn = trim($details[0]);
                
                $wishlist = $redisClient->hGet("book:".$isbn, "isWishlist");
                if ($isWishlist == $wishlist){
                    $redisClient->rPush('spine', $isbn."|".$url);
                }
            }
        }
    }
    
?>