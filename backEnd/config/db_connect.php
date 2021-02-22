<?php

$servername = "wec353.encs.concordia.ca";
$username = "wec353_4";
$password = "C3ll4rD0";
$database = "wec353_4";

//create connection
$conn = mysqli_connect($servername, $username, $password, $database);

//check connection
if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
} else {
        echo "Connected successfully.";
}

?>
