<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);
//require("config.php");
require("session.php");
require("hive_connect.php");
require("login_connect.php");
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

function resethealth($id,$dbhandle,$dbhandle2,$uid) {
	$medical = '[false,false,false,false,false,false,false,12000,any,[0,0],0,[0,0]]';
	//$dbhandle = hiveconnect();
	$qry = $dbhandle->prepare("UPDATE survivor SET medical=? WHERE id=? AND is_dead=0");
	$qry->execute(array($medical, $id));
	$qryLog = $dbhandle2->prepare("INSERT INTO `logs`(`action`, `user`, `timestamp`) VALUES (?,?,NOW())");
	$qryLog->execute(array("Reset Health UID:".$uid." ID:".$id,$_SESSION['login']));
	//$dbhandle = null;
}

resethealth($id,$dbhandle,$dbhandle2,$uid);



?>
