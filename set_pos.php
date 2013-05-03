<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

require("session.php");
require("hive_connect.php");
require_once("login_connect.php");
function setpos($pos,$id,$dbhandle,$dbhandle2,$uid) {
	//$dbhandle = hiveconnect();
	$qry = $dbhandle->prepare("UPDATE survivor SET worldspace=? WHERE id=? AND is_dead=0");
	$qry->execute(array($pos, $id));
	$qryLog = $dbhandle2->prepare("INSERT INTO `logs`(`action`, `user`, `timestamp`) VALUES (?,?,NOW())");
	$qryLog->execute(array("Set Pos: UID:".$uid." ID:".$id." to ".$pos,$_SESSION['login']));
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
	$uid = preg_replace('#[^0-9a-z+]#i', '', $_POST['uid']);
} else {
	die("No ID specified");
}


setpos($set_pos,$id,$dbhandle,$dbhandle2,$uid);


?>
