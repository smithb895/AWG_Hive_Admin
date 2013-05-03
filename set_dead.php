<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

require("session.php");
require("hive_connect.php");
require_once("login_connect.php");
//if (isset($_POST['pos'])) {
	//$set_pos = preg_replace('#[^_\[\],\.0-9+]#', '', $_POST['pos']);
//} else {
	//die("No position specified");
//}
if (isset($_POST['id'])) {
	$id = preg_replace('#[^0-9a-z+]#i', '', $_POST['id']);
	$uid = preg_replace('#[^0-9a-z+]#i', '', $_POST['uid']);
} else {
	die("No ID specified");
}

function setdead($id,$dbhandle,$dbhandle2,$uid) {
	//$dbhandle = hiveconnect();
	$qry = $dbhandle->prepare("UPDATE survivor SET is_dead=1 WHERE id=? AND is_dead=0");
	$qry->execute(array($id));
	$dbhandle = null;
	$qryLog = $dbhandle2->prepare("INSERT INTO `logs`(`action`, `user`, `timestamp`) VALUES (?,?,NOW())");
	$qryLog->execute(array("Kill: UID:".$uid." ID:".$id,$_SESSION['login']));
}

setdead($id,$dbhandle,$dbhandle2,$uid);



?>
