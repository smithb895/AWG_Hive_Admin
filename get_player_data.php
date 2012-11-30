<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

//session_start();
require("session.php");
require("hive_connect.php");
require("functions.php");

if (isset($_POST['searchitem'])) {
	if (strlen($_POST['searchitem']) > 24) {
		die('Item name too long.');
	}
	$searchitem = preg_replace('#[^0-9a-z+]#i', '', $_POST['searchitem']);
	$result = getPlayersWithItem($searchitem,$dbhandle);
	$result_string = parsePlayerStats($result);
} elseif (isset($_POST['playerid'])) {
	if (strlen($_POST['playerid']) > 20) {
		die('Player ID too long.');
	}
	$playerid = preg_replace('#[^0-9+]#', '', $_POST['playerid']);
	$result = getPlayerDataID($playerid,$dbhandle);
	$result_string = parsePlayerStats($result);
} elseif (isset($_POST['playername'])) {
	if (preg_match('#[^a-z0-9 _\[\]\#\+\!\{\}\=\<\>\|\:\-\.\*\?\^\&\%\$()/,@;~`+]#i', $_POST['playername'])) {
		die('Invalid character in player name.  It must be valid ASCII characters and must not contain backslashes (\\), single quotes, or double quotes.');
	}
	if (strlen($_POST['playername']) > 255) {
		die('Player name too long. Max=255');
	}
	if (strlen($_POST['playername']) < 2) {
		die('Player name is too short.');
	}
	$playername = $_POST['playername'];
	$result = getPlayerDataName($playername,$dbhandle);
	$result_string = parsePlayerStats($result);
} elseif (isset($_POST['id'])) {
	//if (preg_match('#[^0-9+]#', $_POST['id'])) {
	//	die('Invalid record ID');
	//} else {
	//	$id = $_POST['id'];
	//}
	$id = preg_replace('#[^0-9+]#', '', $_POST['id']);
	$result_string = getPlayerGear($id,$dbhandle);
} else {
	die("<h2>No playerID or player name specified</h2>");
}
/*if (isset($_POST['dead'])) {
	$dead = preg_replace('#[^01]#', '', $_POST['dead']);
} else {
	$dead = 0;
}*/

//$num_results = count($result);
//$return_array = array();
//$return_string = '';
//echo "Found $num_results rows<br />";
//$_count = 0;

//foreach($result as $row) {
//	$_count = $_count + 1;
//	$_count2 = 0;
//	if ($_count != 1) {
//		$return_string .= '<~~~>'.$row['id'].',~,'.$row['uid'].',~,'.$row['name'].',~,'.$row['kills'].',~,'.$row['survivor_kills'].',~,'.$row['bkills'].',~,'.$row['survival'].',~,'.$row['lastupdate'];
//	} else {
//		$return_string .= $row['id'].',~,'.$row['uid'].',~,'.$row['name'].',~,'.$row['kills'].',~,'.$row['survivor_kills'].',~,'.$row['bkills'].',~,'.$row['survival'].',~,'.$row['lastupdate'];
//	}
//}
//foreach($return_array as $eachresult) {
//	echo $eachresult.'<br />';
//}



echo $result_string;

?>
