<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

require("session.php");
require("hive_connect.php");
require_once("login_connect.php");
if (isset($_POST['backpack'])) {
	$set_backpack = preg_replace('#[^_a-z0-9,"\[\]+]#i', '', $_POST['backpack']);
} else {
	die("No backpack or items specified");
}
if (isset($_POST['id'])) {
	$id = preg_replace('#[^0-9+]#', '', $_POST['id']);
	$uid = preg_replace('#[^0-9a-z+]#i', '', $_POST['uid']);
} else {
	die("No ID specified");
}

function setBackpack($backpack,$id,$dbhandle,$dbhandle2,$uid) {
	//$dbhandle = hiveconnect();
	$qry = $dbhandle->prepare("UPDATE survivor SET backpack=? WHERE id=? AND is_dead=0");
	$qry->execute(array($backpack, $id));
	$dbhandle = null;
	$qryLog = $dbhandle2->prepare("INSERT INTO `logs`(`action`, `user`, `timestamp`) VALUES (?,?,NOW())");
	$qryLog->execute(array("Set Backpack: UID:".$uid." ID:".$id." to ".$backpack,$_SESSION['login']));
}

setBackpack($set_backpack,$id,$dbhandle,$dbhandle2,$uid);


?>
