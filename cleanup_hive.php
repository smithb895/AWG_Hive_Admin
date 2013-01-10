<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

require("session.php");

require("hive_connect.php");

//$cleanup_options = $_POST['cleanupOptions'];
$cleanDeadPlayers = preg_replace('#[^01]#', '', $_POST['deadplayers']);
$cleanWireFences = preg_replace('#[^01]#', '', $_POST['wires']);
$cleanDamagedVehicles = preg_replace('#[^01]#', '', $_POST['vehicles']);


function cleanup_hive($options,$dbhandle) {
	$return = "<br />";
	if (in_array("wires", $options) {
		$count = $dbhandle->exec("DELETE FROM objects WHERE otype='Wire_Cat1'");
		$return .= "Removed $count wire fencings.<br />";
	}
	if (in_array("vehicles", $options) {
		$count = $dbhandle->exec("DELETE FROM objects WHERE damage=1");
		$return .= "Removed $count completely damaged vehicles.<br />";
	}
	if (in_array("deadplayers", $options) {
		$count = $dbhandle->exec("DELETE FROM main WHERE death=1");
		$return .= "Removed $count dead players.<br />";
	}
	return $return;
}


?>