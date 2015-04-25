<?php

    $m = new MongoClient(); // connect
    $db = $m->selectDB("library");
    $collection = $db->books;
    $spine = $db->spine;

    $isbn = $_GET['isbn'];
    $collection->remove(array('isbn' => $isbn));
    $spine->remove(array('isbn' => $isbn));


//    $redisClient = new Redis();
//    $redisClient->connect( '127.0.0.1');
//    
//    $isbn = $_GET['isbn'];
//
//    $urlArr = $redisClient->zRangeByScore('coverImages', $isbn, $isbn);
//    $url = $urlArr[0];
//
//    $result = 0;
//    if ($isbn){
//        
//        $currentBooksList = $redisClient->zRangeByScore('currentBooks', $isbn, $isbn);
//
//        if (count($currentBooksList)==1){
//            $redisClient->zDelete('currentBooks', $currentBooksList[0]);
//        }
//        
//        $result += $redisClient->lRem('spine', $isbn."|".$url, 0);
//        $result += $redisClient->zRemRangeByScore('bookAuthors', $isbn, $isbn);
//        $result += $redisClient->zRemRangeByScore('bookPubDates', $isbn, $isbn);
//        $result += $redisClient->zRemRangeByScore('bookTitles', $isbn, $isbn);
//        $result += $redisClient->zRemRangeByScore('coverImages', $isbn, $isbn);
//        $result += $redisClient->delete('book:'.$isbn);
//        
//        while($arr_mems = $redisClient->sscan('search', $it)) {
//            foreach($arr_mems as $str_mem) {
//                if (strpos($str_mem, $isbn) !== false){
//                    $redisClient->sRem('search', $str_mem);    
//                }
//            }
//        }
//        
//        while($arr_mems = $redisClient->sscan('isbnSort', $it)) {
//            foreach($arr_mems as $str_mem) {
//                if (strpos($str_mem, $isbn) !== false){
//                    $redisClient->sRem('isbnSort', $str_mem);    
//                }
//            }
//        }
//        
//        while($arr_mems = $redisClient->sscan('titleSort', $it)) {
//            foreach($arr_mems as $str_mem) {
//                if (strpos($str_mem, $isbn) !== false){
//                    $redisClient->sRem('titleSort', $str_mem);    
//                }
//            }
//        }
//        
//        while($arr_mems = $redisClient->sscan('authorSort', $it)) {
//            foreach($arr_mems as $str_mem) {
//                if (strpos($str_mem, $isbn) !== false){
//                    $redisClient->sRem('authorSort', $str_mem);    
//                }
//            }
//        }
//    }
//    
//    echo "". $result ."";

?>