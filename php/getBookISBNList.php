<?php
    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');

    $coverImages = [];

    $arr_mems = $redisClient->lRange('spine', 0, -1);
    foreach($arr_mems as $str_mem) {

        echo "Spine: ".$str_mem."";

        $details = explode("|", $str_mem);

        $url = trim($details[1]);
        $isbn = trim($details[0]);

        array_push($coverImages, $isbn);
        array_push($coverImages, $url);

    }
    

    echo "". implode(",", $coverImages) ."";
        
?>