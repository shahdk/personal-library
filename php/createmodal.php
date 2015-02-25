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
        echo "                      <td><input typw=\"text\" class=\"editableInput\" id=\"isbnInput".$i."\" value=\"9876543211234\"></input></td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Published In: </td>";
        echo "                      <td><input typw=\"text\" class=\"editableInput\" id=\"publishedYearInput".$i."\" value=\"2010\"></input></td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Total Pages: </td>";
        echo "                      <td><input typw=\"text\" class=\"editableInput\" id=\"totalPagesInput".$i."\" value=\"350\"></input></td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Bookmarked Page: </td>";
        echo "                      <td><input typw=\"text\" class=\"editableInput\" id=\"bookmarkPageInput".$i."\" value=\"150\"></input></td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Location: </td>";
        echo "                      <td><input typw=\"text\" class=\"editableInput\" id=\"locationInput".$i."\" value=\"Upper shelf in bedroom\"></input></td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Rating: </td>";
        echo "                      <td>";
        echo "                          <div class=\"rating\">";
        echo "                          </div>";
        echo "                      </td>";
        echo "                  </tr>";
        echo "              </table>";
        echo "          </div>";
        echo "          <div class=\"progress\">";
        
        $val = 45;
        if ($i % 2 == 0){
            $val = 100;
        }
        
        echo "              <div class=\"progress-bar\" id=\"progress-bar-".$i."\" role=\"progressbar\" aria-valuenow=\"".$val."\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:".$val."%\">";
        echo "                  <p>150 pages read</p>";
        echo "              </div>";
        echo "          </div>";
        echo "          <div class=\"link-box\">";
        echo "              <input type=\"submit\" value=\"Save Changes\" class=\"save-flat-btn\" />";
        echo "              <input type=\"submit\" value=\"Delete Book\" class=\"delete-flat-btn\" />";
        echo "          </div>";
        echo "      </div>";
        echo "  </div>";
        echo "</div>";
    } 
?>

    
    