<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Personal Library Catalog</title>

    <link rel="icon" type="image/png" href="images/pinwheel.png">

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="css/styles.css" rel="stylesheet">
    <link href="css/thumbnail-gallery.css" rel="stylesheet">
    <link href='font-awesome/fertigopro/stylesheet.css' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap-switch.css" rel="stylesheet" type="text/css" />

    <script src="js/jquery.js"></script>
    <script type="text/javascript" src="js/isbn.js"></script>
    <script type="text/javascript" src="js/isbn-groups.js"></script>
    <script type="text/javascript" src="js/bootstrap-switch.js"></script>
    <script src="js/jquery.raty.js"></script>
    <script src="js/searchBook.js"></script>
    <script src="js/sortBooks.js"></script>
    <script src="js/initializeSpine.js"></script>
</head>

<body>
    <!-- Navigation -->
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">

        <div class="collapse navbar-collapse">

            <div class="navbar-brand">
                <img src="images/pinwheel.png" alt="#" />
            </div>
            <div class="col-sm-3 col-md-3 pull-left">
                <div class="navbar-text">My Library Catalog</div>
                <form class="navbar-form" role="search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term" oninput="searchBook($('#wishlistSwitch').bootstrapSwitch('state'));">
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <ul class="nav navbar-nav pull-left">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Sort By <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="#" id="tAsc" onclick="sortBy('titleAsc', $('#wishlistSwitch').bootstrapSwitch('state'));" style="color:#e28f8f;">Book Title A-Z</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#" id="tDesc" onclick="sortBy('titleDesc', $('#wishlistSwitch').bootstrapSwitch('state'));">Book Title Z-A</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#" id="aAsc" onclick="sortBy('authorAsc', $('#wishlistSwitch').bootstrapSwitch('state'));">Author A-Z</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#" id="aDesc" onclick="sortBy('authorDesc', $('#wishlistSwitch').bootstrapSwitch('state'));">Author Z-A</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#" id="iAsc" onclick="sortBy('isbnAsc', $('#wishlistSwitch').bootstrapSwitch('state'));">ISBN Number 0-9</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#" id="iDesc" onclick="sortBy('isbnDesc', $('#wishlistSwitch').bootstrapSwitch('state'));">ISBN Number 9-0</a>
                        </li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Currently Reading<b class="caret"></b></a>
                    <ul class="dropdown-menu" id="current-books">
                        <script src="js/displayCurrentBooks.js"></script>
                        <script>
                            displayCurrentBooks();
                        </script>
                    </ul>
                </li>
                <li class="navbar-btn" data-toggle="modal" data-target="#addBookModal">Add Book</li>

                <li class="switch-btn">
                    <input id="wishlistSwitch" type="checkbox" data-off-text="Library" data-on-text="Wishlist" checked="false" class="switch-box">
                </li>
                <script type="text/javascript">
                    $('.switch-box').bootstrapSwitch('state', false);
                    $('#wishlistSwitch').on('switchChange.bootstrapSwitch', function () {
                        initializeSpine();
                        displayBooks($("#wishlistSwitch").bootstrapSwitch('state'));
                    });
                </script>
            </ul>
        </div>
    </div>

    <div class="container">

        <div class="row" id="displayDiv">

            <p></p>
            <hr />
            <?php include 'php/initializeSpine.php';?>
            <script src="js/displayBooks.js"></script>
            <script src="js/createAddBookModal.js"></script>
            <script src="js/createBookDetailModal.js"></script>
            <script type="text/javascript">
                createAddBookModal();
                createBookDetailModal();
                $('.rating').raty();
            </script>

        </div>

        <div class="bottom-bar-wrapper">
            <p>
                <div class="bottom-bar"> </div>
            </p>
        </div>

        <hr />

        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Dharmin Shah 2015</p>
                </div>
            </div>
        </footer>

    </div>

    <script src="js/bootstrap.min.js"></script>
    <script src="js/bootstrap-tooltip.js"></script>
</body>

</html>