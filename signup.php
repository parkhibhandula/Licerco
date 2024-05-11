<!-- php code -->
<?php
if(isset($_POST["Full_name"]) && $_POST["Email"] && $_POST["Phone"] && $_POST["Password"] && $_POST["Confirm_Pass"]){
$server="localhost";
$username= "root";
$password= "";
$database= "licerco";

$con= mysqli_connect($server,$username,$password,$database);
if(!$con)
{
    die("connection abort". mysqli_connect_error());
}

$name= $_POST['Full_name'];
$email= $_POST['Email'];
$phone= $_POST['Phone'];
$pass= $_POST['Password'];
$confirm_pass= $_POST['Confirm_Pass'];

$sql="INSERT INTO licerco.signup (Full_name, Email, Phone, Password, Confirm_Pass) VALUES ('$name', '$email', '$phone', '$pass', '$confirm_pass');";
//echo $sql;
$result= mysqli_query($con,$sql);
$con->close();
}
?>

<!-- html code -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>signUp page</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="signUp.css">
</head>
<body>
  <div class="contain">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/Licerco/index.html"><img src="../Licerco/images/LLco3.svg" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Licerco/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Licerco/index.html#cards">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Licerco/index.html#about">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Licerco/index.html#work">How it works</a>
            </li>
          </ul>
          <div class="button">
            <a href="/Licerco/login.html"><button type="button" id="login">Login</button></a>
       <a href="/Licerco/signup.html"> <button type="button " id="signup">Signup</button></a>
        </div>
        </div>
      </div>
    </nav>
</div>
<div class="main">
  <h1 style="text-align: center; font-family: fantasy;">Welcome to Licerco</h1>
  <div class="row">
  <div class="col-md-6">
  <img src="../Licerco/images/desk.jpg" alt="" id="side_img">
  </div>
  
  <div class="col-md-6">
  <div class="form_body">
  <form method="post" action="signup.php">
    <h1>Create Account</h1>
    <label > Full Name:</label><br>
    <input type="text" class="inputbox" id="name" name="Full_name">
    <label >Email:</label><br>
    <input type="email" class="inputbox" id="email" name="Email"><br><br>
    <label >Phone No.:</label><br>
    <input type="number" class="inputbox" id="phone" name="Phone"><br><br>
    <label >Password:</label><br>
    <input type="password" class="inputbox" id="password" name="Password"><br><br>
    <label > Confirm Password:</label><br>
    <input type="password" class="inputbox" id="cpass" name="Confirm_Pass"><br><br>
    <button type="submit" id="registerButton">Register</button>
    <p>Have an account?</p>
    <a href="/Licerco/login.html">Signin</a>
  </form>
  </div>
  </div>
</div>
</div>
<script src="signup.js"></script>
</body>
</html>
