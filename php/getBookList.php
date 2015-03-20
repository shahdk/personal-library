<?php


    
    $redisClient = new Redis();
    $redisClient->connect( '127.0.0.1');
    
    $spineList = $redisClient->zRange('spine', 0, -1, true);
    $coverImages = [];
    foreach ($spineList as $coverURL => $bookISBN) {
        array_push($coverImages, $coverURL);
    }

//            $redisClient->hGetAll('h');
//            $redisClient->set('key', 'it works!!!');
//            $val = $redisClient->get('key');

//            $dir="images/bookcovers" ; 
//            $files=scandir($dir); 
//            $numBooks=0;
//            
//            foreach($files as $file){
//                if (strpos($file,'.jpg') !== false) {
//            
//                    $src = $dir."/".$file;
//                    array_push($coverImages, $src);
//                    $numBooks++;
//                }
//            }
    echo "". implode(",", $coverImages) ."";
?>