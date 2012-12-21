<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

require("session.php");
require("hive_connect.php");

//if (isset($_POST['pos'])) {
	//$set_pos = preg_replace('#[^_\[\],\.0-9+]#', '', $_POST['pos']);
//} else {
	//die("No position specified");
//}
if (isset($_POST['id'])) {
	$id = preg_replace('#[^0-9a-z+]#i', '', $_POST['id']);
} else {
	die("No ID specified");
}

function setalive($id,$dbhandle) {
	//$dbhandle = hiveconnect();
	// SQL: update survivor set is_dead=0, medical='[]' where unique_id=698432 order by last_updated DESC limit 1;
	$qry = $dbhandle->prepare("update survivor set is_dead=0, medical='[]' where unique_id=? order by last_updated DESC limit 1");
	$qry->execute(array($id));
	$dbhandle = null;
}

setalive($id,$dbhandle);



?>
