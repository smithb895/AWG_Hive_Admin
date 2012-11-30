<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

//require("session.php");
//require("hive_connect.php");

function getnearbyplayers($pos,$dbhandle) {
	$range = 500;
	$pos_array = split($pos,',');
	$pos_x = round($pos_array[0], -2);
	$pos_y = round($pos_array[1], -2);
	$max_x = $pos_x + 500;
	$min_x = $pos_x - 500;
	$max_y = $pos_y + 500;
	$min_y = $pos_y - 500;
	$array_max_x = str_split($max_x);
	$array_min_x = str_split($min_x);
	$array_max_y = str_split($max_y);
	$array_min_y = str_split($min_y);
	
	switch (count($array_max_x)) {
		case 3:
			
			break;
		case 4:
			
			break;
		case 5:
			
			break;
	}
	
	//$dbhandle = hiveconnect();
	$qry = $dbhandle->prepare("");
	$qry->execute(array($pos, $id));
	//$dbhandle = null;
}

if (isset($_POST['pos'])) {
	$origin = preg_replace('#[^0-9,\.+]#', '', $_POST['pos']);
} else {
	die('No origin coordinates given');
}

// Example regex for finding range:
// x=6300-6599
// y=6200-6599
// select pos from survivor where pos REGEXP '[[:<:]](6[3-5][0-9]{2})[.]{0,1}([0-9]*),(6[2-5][0-9]{2})[.]{0,1}([0-9]*)[[:>:]]'


//getnearbyplayers($origin);


?>
