<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

require_once("session.php");
require_once("hive_connect.php");

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
	//$qry = $dbhandle->prepare("UPDATE survivor SET model=? WHERE id=? AND is_dead=0");
	$defaultstate = '["","aidlpercmstpsnonwnondnon_player_idlesteady04",36]';
	// Reset state to defalt (bug fix) and set skin
	$qry = $dbhandle->prepare("UPDATE survivor SET model=?, state=? WHERE id=? AND is_dead=0");
	$qry->execute(array($skin,$defaultstate,$id));
	//$dbhandle = null;
}

setskin($set_skin,$id,$dbhandle);


?>
