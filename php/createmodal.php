<?php
    for ($i = 0; $i < $numBooks; $i++) {
        echo "<div class=\"modal fade\" id=\"myModal".$i."\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">";
        
        echo "  <div id=\"myModal\" class=\"popup-modal modal-dialog modal-vertical-centered\">";
        
        echo "      <div id=\"modal-wrapper-div\">";
        
        echo "          <div id=\"link-box-top\">";
        
        echo "              <div id=\"book-cover\"><img src=\"".$coverImages[$i]."\" />";
        echo "              </div>";
        
        echo "              <div id=\"book-header\">";
        echo "                  <h2>Book ".$i."</h2>";
        echo "                  <h4>By Author ".$i."</h4>";
        echo "              </div>";
        echo "          </div>";

        echo "          <div class=\"description-box\">";
        echo "              <table>";
        echo "                  <tr>";
        echo "                      <td>ISBN: </td>";
        echo "                      <td>9876543211234</td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Published In: </td>";
        echo "                      <td>2010</td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Pages: </td>";
        echo "                      <td>150/350</td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Location: </td>";
        echo "                      <td>Upper shelf in bedroom</td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Rating: </td>";
        echo "                      <td>";
        echo "                          <div class=\"rating\">";
        echo "                              <input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" /><label for=\"star5\" title=\"Rocks!\">5 stars</label>";
        
        echo "                              <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label for=\"star4\" title=\"Pretty good\">4 stars</label>";
        
        echo "                              <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label for=\"star3\" title=\"Meh\">3 stars</label>";
        
        echo "                              <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label for=\"star2\" title=\"Kinda bad\">2 stars</label>";
        
        echo "                              <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label for=\"star1\" title=\"Sucks big time\">1 star</label>";
        
        echo "                          </div>";
        echo "                      </td>";
        echo "                  </tr>";
        echo "              </table>";
        echo "          </div>";
        
        echo "          <div class=\"link-box\">";
        echo "              <input type=\"submit\" value=\"Delete Book\" class=\"flat-btn\" />";
        echo "          </div>";
        echo "      </div>";
        echo "  </div>";
        echo "</div>";
    } 
?>

    
    