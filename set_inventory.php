<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);

require("session.php");
require("hive_connect.php");
require_once("login_connect.php");
if (isset($_POST['items'])) {
	//$items = strtolower(preg_replace('#[^_a-z0-9,+]#i', '', $_POST['items']));
	//$items_aray = explode(',', $items);
	$set_inventory = preg_replace('#[^_a-z0-9,"\[\]+]#i', '', $_POST['items']);
	//$set_inventory = $_POST['items'];
	//if (preg_match('#[^_a-z0-9,"\[\]+]#i', $_POST['items'])) {
		//die('Invalid character in inventory string');
	//}
	//$set_inventory = preg_replace('#[^_a-z0-9,"\[\]+]#i', '', $_POST['items'];
} else {
	die("No items specified");
}
if (isset($_POST['id'])) {
	$id = preg_replace('#[^0-9+]#', '', $_POST['id']);
	$uid = preg_replace('#[^0-9a-z+]#i', '', $_POST['uid']);
} else {
	die("No ID specified");
}

function setInventory($items,$id,$dbhandle,$dbhandle2,$uid) {
	//$type1 = array("remington870_lamp","winchester1866","aa12_pmc","baf_as50_scoped","baf_as50_tws","baf_l110a1_aim","baf_l7a2_gpmg","baf_l85a2_ris_acog","baf_l85a2_ris_cws","baf_l85a2_ris_holo","baf_l85a2_ris_susat","baf_l85a2_ugl_acog","baf_l85a2_ugl_holo","baf_l85a2_ugl_susat","baf_l86a2_acog","baf_lrr_scoped","baf_lrr_scoped_w","dmr","fn_fal","fn_fal_anpvs4","g36_c_sd_camo","g36_c_sd_eotech","g36a","g36a_camo","g36c","g36c_camo","g36k","g36k_camo","m1014","m110_nvg_ep1","m110_tws_ep1","m14_ep1","m16a2","m16a2gl","m16a4","m16a4_acg","m16a4_acg_gl","m16a4_gl","m24","m24_des_ep1","m240","m240_scoped_ep1","m249","m249_ep1","m249_m145_ep1","m249_tws_ep1","m32_ep1","m40a3","m4a1","m4a1_aim","m4a1_aim_camo","m4a1_aim_sd_camo","m4a1_hws_gl","m4a1_hws_gl_camo","m4a1_hws_gl_sd_camo","m4a1_rco_gl","m4a3_cco_ep1","m4a3_rco_gl_ep1","m4spr","m60a4_ep1","m79_ep1","m8_carbine","m8_carbine_pmc","m8_carbinegl","m8_compact","m8_compact_pmc","m8_holo_sd","m8_saw","m8_sharpshooter","m8_tws","m8_tws_sd","mg36","mg36_camo","mk_48_dz","m107_dz","mk13_ep1","mp5a5","mp5sd","pmc_as50_scoped","pmc_as50_tws","scar_h_cqc_cco","scar_h_cqc_cco_sd","scar_h_lng_sniper","scar_h_lng_sniper_sd","scar_h_std_eglm_spect","scar_h_std_tws_sd","scar_l_cqc","scar_l_cqc_cco_sd","scar_l_cqc_eglm_holo","scar_l_cqc_holo","scar_l_std_eglm_rco","scar_l_std_eglm_tws","scar_l_std_holo","scar_l_std_mk4cqt","ak_107_gl_kobra","ak_107_gl_pso","ak_107_kobra","ak_107_pso","ak_47_m","ak_47_s","ak_74","ak_74_gl","ak_74_gl_kobra","aks_74","aks_74_goshawk","aks_74_kobra","aks_74_nspu","aks_74_pso","aks_74_u","aks_74_un_kobra","aks_gold","bizon","bizon_silenced","huntingrifle","leeenfield","pecheneg","ksvk","pk","rpk_74","sa58p_ep1","sa58v_cco_ep1","sa58v_ep1","sa58v_rco_ep1","saiga12k","svd","svd_camo","svd_des_ep1","svd_nspu_ep1","vss_vintorez","m136","colt1911","glock17_ep1","m9","m9sd","makarov","makarovsd","revolver_ep1","revolver_gold_ep1","sa61_ep1","uzi_ep1","uzi_sd_ep1","binocular","binocular_vector","nvgoggles","itemtoolbox","itemetool","itemflashlightred","itemhatchet","itemknife","itemmatchbox","itemflashlight","itemcompass","itemgps","itemmap","itemradio","itemwatch");
	//$type2 = array("itembandage","1rnd_he_m203","30rnd_762x39_ak47","30rnd_545x39_ak","64rnd_9x19_sd_bizon","8rnd_b_beneli_74slug","30rnd_556x45_stanag","30rnd_556x45_stanagsd","30rnd_9x19_mp5","30rnd_9x19_mp5sd","100rnd_762x51_m240","200rnd_556x45_m249","5x_22_lr_17_hmr","20rnd_762x51_dmr","5rnd_762x51_m24","10rnd_762x54_svd","10x_303","10rnd_127x99_m107","20rnd_762x51_fnfal","5rnd_127x99_as50","m136","100rnd_762x54_pk","5rnd_127x108_ksvk","foodsteakraw","foodsteakcooked","itemepinephrine","bloodbag","foodcanbakedbeans","foodcansardines","foodcanpasta","itemsodacoke","itemsodapepsi","itemwaterbottle","handroadflare","handchemgreen","handchemblue","handchemred","itemsandbag","itemtanktrap","itemwire","itempainkiller","itemmorphine","itemantibiotic","itemheatpack","partwoodpile","partwheel","partfueltank","partglass","partengine","partgeneric","partvrotor","itemjerrycan","itemtent","trapbear");
	//foreach ($items as $item) {
	//	if (in_array($item, $type1)) {
	//		$add_type1_items[] = $item;
	//		//echo "$item is type1<br />";
	//	} elseif (in_array($item, $type2)) {
	//		$add_type2_items[] = $item;
			//echo "$item is type2<br />";
	//	} else {
	//		die("There is an invalid item specified");
	//	}
	//}
	//$set_inventory = '[[';
	//$type1_total = count($add_type1_items);
	//$type2_total = count($add_type2_items);
	//$count1 = 0;
	//$count2 = 0;
	/*
	foreach ($add_type1_items as $type1_item) {
		$count1 = $count1 + 1;
		if ($count1 == $type1_total) {
			$set_inventory .= '"'.$type1_item.'"'.']|[';
		} else {
			$set_inventory .= '"'.$type1_item.'"'.'|';
		}
	}
	foreach ($add_type2_items as $type2_item) {
		$count2 = $count2 + 1;
		if ($count2 == $type2_total) {
			$set_inventory .= '"'.$type2_item.'"'.']]';
		} else {
			$set_inventory .= '"'.$type2_item.'"'.'|';
		}
	}*/
	//$dbhandle = hiveconnect();
	$qry = $dbhandle->prepare("UPDATE survivor SET inventory=? WHERE id=? AND is_dead=0");
	$qry->execute(array($items, $id));
	$qryLog = $dbhandle2->prepare("INSERT INTO `logs`(`action`, `user`, `timestamp`) VALUES (?,?,NOW())");
	$qryLog->execute(array("Set Gear: UID:".$uid." ID:".$id." to ".$items,$_SESSION['login']));
	$dbhandle = null;
}
//echo $set_inventory . '<br /><br />'.$id;

setInventory($set_inventory,$id,$dbhandle,$dbhandle2,$uid);


?>
