<!DOCTYPE html>
<html>
<head>
  <title>Code Week Site</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- SCRIPTS -->
  <script src="js/madlibs.js"></script>

  <!-- STYLESHEETS -->
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="css/website.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

</head>
<body>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="codeweek.html">App Hub</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="isItFriday.html">Is it Friday?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>s
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <section>
    <h1><strong> Madlibs </strong></h1>
    <p> There was once a person named <?php echo $_POST["firstname"]; ?>
        . They were known far and wide, as that really <?php echo $_POST["adjective"]; ?>
        guy who lived in a dollhouse modelled after <?php echo $_POST["place"]; ?>  </p>



  </section>
</body>
</html>
