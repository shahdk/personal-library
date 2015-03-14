<?php 
    $dir="images/bookcovers" ; 
    $files=scandir($dir); 
    $numBooks=0;
    $coverImages = [];
    foreach($files as $file){
        if (strpos($file,'.jpg') !== false) {
            
            $src = $dir."/".$file;
            array_push($coverImages, $src);
            echo "<div class=\"col-lg-3 col-md-4 col-xs-6 thumb tooltip_link\" data-toggle=\"tooltip\" data-original-title=\"Book ".$numBooks."\">";
            echo "  <a class=\"thumbnail\" data-toggle=\"modal\" data-target=\"#myModal".$numBooks."\">";
            echo "      <img id=\"coverImage".$numBooks."\" class=\"img-responsive\" src=\"".$src."\" alt=\"\" />";
            echo "  </a>";
            echo "</div>";
            
            $numBooks++;
        }
    }
?>