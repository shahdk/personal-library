<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Thumbnail Gallery - Start Bootstrap Template</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/styles.css" rel="stylesheet">
    <link href="css/thumbnail-gallery.css" rel="stylesheet">
    <link href='font-awesome/fertigopro/stylesheet.css' rel='stylesheet' type='text/css'>
    
    
    
</head>

<body>

    <!-- Navigation -->
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">

        <div class="collapse navbar-collapse">

            <div class="navbar-brand">
                <img src="images/pinwheel.png" alt="#" />
            </div>
            <div class="col-sm-3 col-md-3 pull-left">
                <div class="navbar-text">My Library</div>
                <form class="navbar-form" role="search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
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
                        <li><a href="#">Name A-Z</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Name Z-A</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Author A-Z</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Author Z-A</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Date Added (Latest first)</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Date Added (Earliest first)</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Date Viewed (Earliest first)</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Date Viewed (Earliest first)</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Rating (1-5)</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Rating (5-1)</a>
                        </li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Currently Reading<b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Book 1</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Book 2</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Book 3</a>
                        </li>
                        <li role="presentation" class="divider"></li>
                        <li><a href="#">Book 4</a>
                        </li>

                    </ul>
                </li>
                <li class="navbar-btn">Add Book</li>
                <li class="navbar-btn">Wish List</li>
            </ul>
        </div>
    </div>

    <!-- Page Content -->
    <div class="container">

        <div class="row">

            <p></p>



            <hr />

            <?php include 'php/getfiles.php'; ?>
            <?php include 'php/createmodal.php'; ?>
           
            </div>

             <div class="bottom-bar-wrapper">
                <p>
                    <div class="bottom-bar" />
                </p>
            </div>
            <!-- End Modal -->

            <hr>

            <!-- Footer -->
            <footer>
                <div class="row">
                    <div class="col-lg-12">
                        <p>Copyright &copy; Dharmin Shah 2014</p>
                    </div>
                </div>
            </footer>

        </div>
        <!-- /.container -->

        <!-- jQuery -->
        <script src="js/jquery.js"></script>

        <!-- Bootstrap Core JavaScript -->
        <script src="js/bootstrap.min.js"></script>
    
    <script src="js/bootstrap-tooltip.js"></script>
</body>

</html>