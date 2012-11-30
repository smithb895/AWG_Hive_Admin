<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

//session_start()
require("session.php");
require("hive_connect.php");
require("functions.php");


if (isset($_POST['orderby'])) {
	$orderby = preg_replace('#[^a-z0-9_+]#', '', $_POST['orderby']);
} else {
	$orderby = "zombie_kills";
}

$result = getTopPlayers($orderby,$dbhandle);
$result_string = parseResults($result);

echo $result_string;


?>
