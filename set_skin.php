<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

require("session.php");
require("hive_connect.php");

if (isset($_POST['skin'])) {
	$set_skin = preg_replace('#[^_a-z0-9"+]#i', '', $_POST['skin']);
} else {
	die("No skin or items specified");
}
if (isset($_POST['id'])) {
	$id = preg_replace('#[^0-9+]#', '', $_POST['id']);
} else {
	die("No ID specified");
}

function setskin($skin,$id,$dbhandle) {
	//$dbhandle = hiveconnect();
	$qry = $dbhandle->prepare("UPDATE survivor SET model=? WHERE id=? AND is_dead=0");
	$qry->execute(array($skin, $id));
	//$dbhandle = null;
}

setskin($set_skin,$id,$dbhandle);


?>
