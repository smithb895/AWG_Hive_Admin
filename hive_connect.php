<?php
require("session.php");
require("config.php");

//function hiveconnect($hive_address,$hive_db,$hive_user,$hive_pass) {
try {
	$dbhandle = new PDO("mysql:host=$hive_address;dbname=$hive_db", $hive_user, $hive_pass);
} catch (PDOException $err) {
	die($err->getMessage());
}
//return $dbhandle;
//}

?>
