<?php
/*  -={AWG}=- HIVE Admin
 *  Author: Anzu
 *  Desc: Functions for fetching
 *  and parsing data from HIVE.
*/

function getPlayerDataID($playerid,$dbhandle) {
	//$dbhandle = hiveconnect();
	// Bliss HIVE Schema
	//$qry = $dbhandle->prepare("SELECT survivor.id,survivor.unique_id,name,zombie_kills,survivor_kills,bandit_kills,start_time,last_update FROM survivor NATURAL JOIN profile WHERE unique_id=? AND is_dead=0");
	// Bliss Schema v0.20
	//$qry = $dbhandle->prepare("SELECT `survivor`.`id`, `survivor`.`unique_id`, `profile`.`name`, `survivor`.`zombie_kills`, `survivor`.`survivor_kills`, `survivor`.`bandit_kills`, `survivor`.`start_time`, `survivor`.`last_update`, `survivor`.`pos` FROM survivor, profile where `survivor`.`unique_id` = `profile`.`unique_id` AND `survivor`.`is_dead`=0 AND `survivor`.`unique_id`=?");
	//Bliss Schema v0.26
	$qry = $dbhandle->prepare("SELECT s.id, s.unique_id, p.name, s.zombie_kills, s.survivor_kills, s.bandit_kills, s.start_time, s.last_updated, s.worldspace, s.is_dead, s.world_id, timestampdiff(hour, s.start_time, s.last_updated) as hours_old FROM profile p LEFT JOIN survivor s ON p.unique_id = s.unique_id WHERE AND s.unique_id=? ORDER BY last_updated DESC LIMIT 50");
	// Old HIVE Schema
	//$qry = $dbhandle->prepare("SELECT id,uid,name,kills,survivor_kills,bkills,survival,lastupdate FROM main WHERE uid=? AND death=0");
	$qry->execute(array($playerid));
	$result = $qry->fetchAll(PDO::FETCH_NUM);
	return $result;
}

function getPlayerDataName($playername,$dbhandle) {
	//$dbhandle = hiveconnect();
	// Bliss HIVE Schema
	//$qry = $dbhandle->prepare("SELECT survivor.id,survivor.unique_id,name,zombie_kills,survivor_kills,bandit_kills,start_time,last_update FROM survivor NATURAL JOIN profile WHERE name=? AND is_dead=0");
	// Bliss Schema v0.20
	//$qry = $dbhandle->prepare("SELECT `survivor`.`id`, `survivor`.`unique_id`, `profile`.`name`, `survivor`.`zombie_kills`, `survivor`.`survivor_kills`, `survivor`.`bandit_kills`, `survivor`.`start_time`, `survivor`.`last_update`, `survivor`.`pos` FROM survivor, profile where `survivor`.`unique_id` = `profile`.`unique_id` AND `survivor`.`is_dead`=0 AND `profile`.`name`=?");
	//Bliss Schema v0.26
	$qry = $dbhandle->prepare("SELECT s.id, s.unique_id, p.name, s.zombie_kills, s.survivor_kills, s.bandit_kills, s.start_time, s.last_updated, s.worldspace, s.is_dead, s.world_id, timestampdiff(hour, s.start_time, s.last_updated) as hours_old FROM profile p LEFT JOIN survivor s ON p.unique_id = s.unique_id WHERE p.name LIKE ? ORDER BY last_updated DESC LIMIT 50");
	// Old HIVE Schema
	//$qry = $dbhandle->prepare("SELECT id,uid,name,kills,survivor_kills,bkills,survival,lastupdate FROM main WHERE name=? AND death=0");
	$qry->execute(array('%'.$playername.'%'));
	$result = $qry->fetchAll(PDO::FETCH_NUM);
	return $result;
}

function getPlayersWithItem($searchitem,$dbhandle) {
	//$dbhandle = hiveconnect();
	// Bliss Schema v0.20
	//$qry = $dbhandle->prepare("SELECT `survivor`.`id`, `survivor`.`unique_id`, `profile`.`name`, `survivor`.`zombie_kills`, `survivor`.`survivor_kills`, `survivor`.`bandit_kills`, `survivor`.`start_time`, `survivor`.`last_update`, `survivor`.`pos` FROM survivor, profile where `survivor`.`unique_id` = `profile`.`unique_id` AND `survivor`.`is_dead`=0 AND (`survivor`.`inventory` LIKE ? OR `survivor`.`backpack` LIKE ?)");
	//Bliss Schema v0.26
	$qry = $dbhandle->prepare("SELECT s.id, s.unique_id, p.name, s.zombie_kills, s.survivor_kills, s.bandit_kills, s.start_time, s.last_updated, s.worldspace, s.is_dead, s.world_id, timestampdiff(hour, s.start_time, s.last_updated) as hours_old FROM profile p LEFT JOIN survivor s ON p.unique_id = s.unique_id WHERE s.inventory LIKE ? OR s.backpack LIKE ? ORDER BY last_updated DESC LIMIT 50");
	//$qry->bindParam(':item', '%'.$searchitem.'%');
	$qry->execute(array("%$searchitem%","%$searchitem%"));
	$result = $qry->fetchAll(PDO::FETCH_NUM);
	return $result;
}

function getPlayerGear($id,$dbhandle) {
	//$dbhandle = hiveconnect();
	// Bliss HIVE Schema
	$qry = $dbhandle->prepare("SELECT inventory,backpack,model FROM survivor WHERE id=? LIMIT 1");
	// Old HIVE Schema
	//$qry = $dbhandle->prepare("SELECT id,uid,name,pos,survivor_kills,bkills,kills,hs,survival,lastupdate,inventory,backpack FROM main WHERE id=? LIMIT 1");
	$qry->execute(array($id));
	$result = $qry->fetch(PDO::FETCH_NUM);
	$result_string = '';
	$result_string = $result[0].',~,'.$result[1].',~,'.$result[2];
	//foreach($result as $column) {
	//	$result_string .= '<br />'. $column;
	//}
	return $result_string;
}

function parsePlayerStats($stats_array) {
	$_count = 0;
	$result_string = '';
	foreach($stats_array as $row) {
		$_count = $_count + 1;
		if ($_count != 1) {
			$result_string .= '<~~~>';//.$row[0].',~,'.$row[1].',~,'.$row[2].',~,'.$row[3].',~,'.$row[4].',~,'.$row[5].',~,'.$row[6].',~,'.$row[7];
		}// else {
		$_count2 = 0;
		foreach ($row as $column) {
			$_count2 = $_count2 + 1;
			if ($_count2 != 1) {
				$result_string .= ',~,'.$column;
			} else {
				$result_string .= $column;
			}
		}
			//$result_string .= $row[0].',~,'.$row[1].',~,'.$row[2].',~,'.$row[3].',~,'.$row[4].',~,'.$row[5].',~,'.$row[6].',~,'.$row[7];
		//}
	}
	return $result_string;
}

//  Top Players
function getTopPlayers($orderby,$dbhandle) {
	//$dbhandle = hiveconnect();
	// Bliss HIVE Schema
	switch ($orderby) {
		// Order by zombie kills
		case "zombie_kills":
			//$qry = $dbhandle->prepare("SELECT survivor.id,survivor.unique_id,name,zombie_kills,survivor_kills,bandit_kills,start_time,last_update,pos FROM survivor, profile WHERE is_dead=0 AND profile.unique_id=survivor.unique_id AND (DATEDIFF(last_update,now()) > -7) ORDER BY zombie_kills DESC LIMIT 10");
			$qry = $dbhandle->prepare("SELECT s.id, s.unique_id, p.name, s.zombie_kills, s.survivor_kills, s.bandit_kills, s.start_time, s.last_updated, s.worldspace, s.is_dead, s.world_id, timestampdiff(hour, s.start_time, s.last_updated) as hours_old FROM profile p LEFT JOIN survivor s ON p.unique_id = s.unique_id WHERE s.is_dead=0 AND (DATEDIFF(last_updated,now()) > -7) ORDER BY s.zombie_kills DESC LIMIT 10");
			break;
		case "survivor_kills":
			//$qry = $dbhandle->prepare("SELECT survivor.id,survivor.unique_id,name,zombie_kills,survivor_kills,bandit_kills,start_time,last_update,pos FROM survivor, profile WHERE is_dead=0 AND profile.unique_id=survivor.unique_id AND (DATEDIFF(last_update,now()) > -7) ORDER BY survivor_kills DESC LIMIT 10");
			$qry = $dbhandle->prepare("SELECT s.id, s.unique_id, p.name, s.zombie_kills, s.survivor_kills, s.bandit_kills, s.start_time, s.last_updated, s.worldspace, s.is_dead, s.world_id, timestampdiff(hour, s.start_time, s.last_updated) as hours_old FROM profile p LEFT JOIN survivor s ON p.unique_id = s.unique_id WHERE s.is_dead=0 AND (DATEDIFF(last_updated,now()) > -7) ORDER BY s.survivor_kills DESC LIMIT 10");
			break;
		case "bandit_kills":
			//$qry = $dbhandle->prepare("SELECT survivor.id,survivor.unique_id,name,zombie_kills,survivor_kills,bandit_kills,start_time,last_update,pos FROM survivor, profile WHERE is_dead=0 AND profile.unique_id=survivor.unique_id AND (DATEDIFF(last_update,now()) > -7) ORDER BY bandit_kills DESC LIMIT 10");
			$qry = $dbhandle->prepare("SELECT s.id, s.unique_id, p.name, s.zombie_kills, s.survivor_kills, s.bandit_kills, s.start_time, s.last_updated, s.worldspace, s.is_dead, s.world_id, timestampdiff(hour, s.start_time, s.last_updated) as hours_old FROM profile p LEFT JOIN survivor s ON p.unique_id = s.unique_id WHERE s.is_dead=0 AND (DATEDIFF(last_updated,now()) > -7) ORDER BY s.bandit_kills DESC LIMIT 10");
			break;
		case "start_time":
			//$qry = $dbhandle->prepare("SELECT survivor.id,survivor.unique_id,name,zombie_kills,survivor_kills,bandit_kills,start_time,last_update,pos FROM survivor, profile WHERE is_dead=0 AND profile.unique_id=survivor.unique_id AND (DATEDIFF(last_update,now()) > -7) ORDER BY start_time LIMIT 10");
			$qry = $dbhandle->prepare("SELECT s.id, s.unique_id, p.name, s.zombie_kills, s.survivor_kills, s.bandit_kills, s.start_time, s.last_updated, s.worldspace, s.is_dead, s.world_id, timestampdiff(hour, s.start_time, s.last_updated) as hours_old FROM profile p LEFT JOIN survivor s ON p.unique_id = s.unique_id WHERE s.is_dead=0 AND (DATEDIFF(last_updated,now()) > -7) ORDER BY hours_old DESC LIMIT 10");
			break;
		//default:
		//	$qry = $dbhandle->prepare("SELECT survivor.id,survivor.unique_id,name,zombie_kills,survivor_kills,bandit_kills,start_time,last_update FROM survivor NATURAL JOIN profile WHERE is_dead=0 ORDER BY zombie_kills DESC");
		//	break;
	}
	$qry->execute();
	$result = $qry->fetchAll(PDO::FETCH_NUM);
	return $result;
}

function parseResults($results) {
	$_count = 0;
	$result_string = '';
	foreach($results as $row) {
		$_count = $_count + 1;
		if ($_count != 1) {
			$result_string .= '<~~~>';
		}
		$_count2 = 0;
		foreach($row as $column) {
			$_count2 = $_count2 + 1;
			if ($_count2 == 1) {
				$result_string .= $column;
			} else {
				$result_string .= ',~,'.$column;
			}
		}
	}
	return $result_string;
}

function stringSplitSQL($inputString, $columnName) {
	$safe = '';
	$validchars = '#[^0-9a-z_ \.,\-+]#i';
	if (preg_match($validchars, $inputString)) {
		$stringsplit = preg_split($validchars, $inputString);
		for ($i=0; $i<count($stringsplit); $i++) {
			if ($i != 0) {
				$safe .= ' AND '.$columnName.' LIKE %'.$stringsplit[$i].'%';
			} else {
				$safe = '%'.$stringsplit[$i].'%';
			}
		}
	} else {
		$safe = '%'.$inputString.'%';
	}
	
	return $safe;
}


?>