<?php
//session_start();
require("session.php");
require("config.php");

//function loginconnect() {
$dbhandle2 = new PDO("mysql:host=$adminsdb_address;dbname=$adminsdb_db", $adminsdb_user, $adminsdb_pass);
//return $dbhandle;
//}

?>
