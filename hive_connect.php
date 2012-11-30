<?php
require("session.php");
require("config.php");

//function hiveconnect($hive_address,$hive_db,$hive_user,$hive_pass) {
$dbhandle = new PDO("mysql:host=$hive_address;dbname=$hive_db", $hive_user, $hive_pass);
//return $dbhandle;
//}

?>
