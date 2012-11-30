<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

require("session.php");
require("hive_connect.php");

function setpos($pos,$id,$dbhandle) {
	//$dbhandle = hiveconnect();
	$qry = $dbhandle->prepare("UPDATE survivor SET worldspace=? WHERE id=? AND is_dead=0");
	$qry->execute(array($pos, $id));
	//$dbhandle = null;
}

if (isset($_POST['pos'])) {
	$given_pos = preg_replace('#[^0-9,\.+]#', '', $_POST['pos']);
	$set_pos = '[0,['.$given_pos.']]';
} else {
	$set_pos = '[]';
}
if (isset($_POST['id'])) {
	$id = preg_replace('#[^0-9+]#', '', $_POST['id']);
} else {
	die("No ID specified");
}


setpos($set_pos,$id,$dbhandle);


?>
