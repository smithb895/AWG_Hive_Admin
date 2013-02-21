<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

require("session.php");
require("hive_connect.php");

if (isset($_POST['name'])) {
	$loadout_name = preg_replace('#[^_a-z0-9, /+]#i', '', $_POST['name']);
} else {
	die("No name specified");
}
if (isset($_POST['items'])) {
	$set_inventory = preg_replace('#[^_a-z0-9,"\[\]+]#i', '', $_POST['items']);
} else {
	die("No items specified");
}
if (isset($_POST['backpack'])) {
	$set_backpack = preg_replace('#[^_a-z0-9,"\[\]+]#i', '', $_POST['backpack']);
} else {
	die("No backpack specified");
}
if (isset($_POST['skin'])) {
	$set_skin = preg_replace('#[^_a-z0-9"+]#i', '', $_POST['skin']);
} else {
	die("No skin specified");
}
function saveVIP($dbhandle,$set_inventory,$set_backpack,$set_skin,$loadout_name) {
	$qry = $dbhandle->prepare("INSERT INTO `cust_loadout` (`inventory`,`backpack`,`model`,`description`) VALUES (?,?,?,?)");
	$qry->execute(array($set_inventory,$set_backpack,$set_skin,$loadout_name));
	//$dbhandle = null;
}

saveVIP($dbhandle,$set_inventory,$set_backpack,$set_skin,$loadout_name);
echo "Successfully saved VIP loadout";


?>
