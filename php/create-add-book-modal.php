<?php
        echo "<div class=\"modal fade\" id=\"addBookModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">";
        
        echo "  <div id=\"myModal\" class=\"popup-modal modal-dialog modal-vertical-centered\">";
        
        echo "      <div id=\"modal-wrapper-div\">";
        echo "          <div id=\"link-box-top\">";
        
        echo "              <div id=\"book-header\">";
        echo "                  <h1>Add Book</h1>";
        echo "              </div>";
        echo "          </div>";
        echo "          <div class=\"description-box\">";
        echo "              <table>";
        echo "                  <tr>";
        echo "                      <td>ISBN Number*: </td>";
        echo "                      <td><input type=\"text\" class=\"editInput\" onfocusout=\"searchISBN();\" id=\"addIsbnInput\" value=\"\"></input></td>";
        echo "                  </tr>";
        echo "              </table>";
        echo "              <div></div>";
        echo "              <hr />";
        echo "              <p>or</p>";
        echo "              <hr />";
        echo "              <div></div>";
        echo "              <table>";
        echo "                  <tr>";
        echo "                      <td>Book Title*: </td>";
        echo "                      <td><input type=\"text\" class=\"editInput\" id=\"addBookTitleInput\" value=\"\"></input></td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Author Name*: </td>";
        echo "                      <td><input type=\"text\" class=\"editInput\" id=\"addAuthorNameInput\" value=\"\"></input></td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Published In: </td>";
        echo "                      <td><input type=\"text\" class=\"editInput\" id=\"addPublishedYearInput\" value=\"\"></input></td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Total Pages: </td>";
        echo "                      <td><input type=\"text\" class=\"editInput\" id=\"addTotalPagesInput\" value=\"\"></input></td>";
        echo "                  </tr>";
        echo "              </table>";
        echo "              <div></div>";
        echo "              <hr />";
        echo "              <div></div>";
        echo "              <table>";
        echo "                  <tr>";
        echo "                      <td>Last Read Page: </td>";
        echo "                      <td><input type=\"text\" class=\"editInput\" id=\"addBookmarkPageInput\" value=\"0\"></input></td>";
        echo "                  </tr>";
        echo "                  <tr>";
        echo "                      <td>Location: </td>";
        echo "                      <td><input type=\"text\" class=\"editInput\" id=\"addLocationInput\" value=\"\"></input></td>";
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
        echo "          <div class=\"link-box\">";
        echo "              <input type=\"submit\" name=\"library\" value=\"Add to Library\" class=\"add-book-flat-btn\" />";
        echo "              <input type=\"submit\" name=\"wishlist\" value=\"Add to Wishlist\" class=\"add-book-flat-btn\" />";
        echo "          </div>";
        echo "      </div>";
        echo "  </div>";
        echo "</div>";
?>

<script>
   function searchISBN() {
        var isbn = document.getElementById("addIsbnInput").value;
        var googleURL = "https://www.googleapis.com/books/v1/volumes?q=isbn:"+isbn;
        $.getJSON(googleURL,function(data) {
            var str = JSON.stringify(data, undefined, 4);
            
            document.getElementById("addBookTitleInput").value = data.items[0].volumeInfo.title;
            document.getElementById("addAuthorNameInput").value = data.items[0].volumeInfo.authors.toString();
            document.getElementById("addPublishedYearInput").value = data.items[0].volumeInfo.publishedDate;
            document.getElementById("addTotalPagesInput").value = data.items[0].volumeInfo.pageCount;
            
            document.getElementById("coverImage0").src = data.items[0].volumeInfo.imageLinks.smallThumbnail;
            console.log(data.items[0].volumeInfo.imageLinks.smallThumbnail);
            console.log(data.items[0].volumeInfo.imageLinks.thumbnail);
        }); 
   }

</script>