<?php
//session_start();
require_once("session.php");
require_once("config.php");

//function loginconnect() {
try {
	$dbhandle2 = new PDO("mysql:host=$adminsdb_address;dbname=$adminsdb_db", $adminsdb_user, $adminsdb_pass);
} catch (PDOException $err) {
	die($err->getMessage());
}
//return $dbhandle;
//}

?>
