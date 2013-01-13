<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<title>[AWG] DayZ HIVE Admin</title>
	<link rel="stylesheet" type="text/css" href="css/hive_admin.css" />
</head>

<body>
<?php
//session_start();
require("jquery.php");
require("session.php");
?>

<div id="head">
	-=[AWG]=-<br />DayZ HIVE Admin
</div>
<br />
<div id="main">
	<div class="buttons1" id="top_players_btn">
		<a href="../admin.php" alt="Go back to the main admin page">[Back to Main Dashboard]</a><br />
		<a href="https://anzuswargames.info/admins" alt="Search/View logs, Lookup Players, etc">[Search Logs]</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="" onclick='fetch_top_players("zombie_kills"); return false;' alt="Show Top Players - Sort by Zombie Kills">[Top Zed Kills]</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="" onclick='fetch_top_players("survivor_kills"); return false;' alt="Show Top Players - Sort by Survivor Kills">[Top Murderers]</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="" onclick='fetch_top_players("bandit_kills"); return false' alt="Show Top Players - Sort by Bandit Kills">[Top Vigilantes]</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="" onclick='fetch_top_players("start_time"); return false;' alt="Show Top Players - Sort by Start Time">[Oldest Survivors]</a>&nbsp;&nbsp;&nbsp;&nbsp;
	</div>
	<div id="player_selection">
		<div class="left">
			<h2>Find Player</h2>
			<form method="post" onclick="return false;">
					<h3>Name</h3>
					<input id="player_name" name="player_name" type="text"/><br />
					<h3>ID</h3>
					<input id="player_id" name="player_id" type="text"/><br />
					<button id="find_player_btn" type="submit" value="">Search</button>
			</form>
			<h2>Search for item</h2>
			<form method="post" onclick="return false;">
			<h3>Item Name</h3>
			<input id="item_name" name="item_name" type="text"/><br />
			<button id="search_for_item" type="submit" value="">Search</button>
			</form>
		</div>
		<div class="right">
			<div id="current_player_buttons">
				<a href="" class="buttons2" onclick='reset_health_clicked(); return false;' alt="Restore Player Health">Restore Health</a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="" class="buttons2" onclick='reset_pos_clicked(); return false;' alt="Reset Player Location">Reset Position</a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="" class="buttons2" onclick='set_dead_clicked(); return false;' alt="Kill Player">Kill</a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="" class="buttons2" onclick='set_alive_clicked(); return false;' alt="Revive Player">Revive</a>&nbsp;&nbsp;&nbsp;&nbsp;
				<!--<a href="" class="buttons2" onclick='alert("Not working yet"); return false;' alt="Show On Map">Show On Map</a>&nbsp;&nbsp;&nbsp;&nbsp;-->
			</div>
			<h3>Position (x,y,z)</h3>
			<input id="player_setpos" name="player_setpos" type="text"/><br />
			<button id="setpos_btn" type="submit" value="">Set</button><br />
		</div>
	</div>
	<div id="current_player">
		<div id="stats_header">
			<h2>Currently Selected Player</h2>
			<h2 id="stats_player_name">None</h2>
		</div>
		<table id="table_playerdata">
			<tr id="row_fieldname">
				<th>PlayerID</th>
				<th>Zombie Kills</th>
				<th>Murders</th>
				<th>Bandit Kills</th>
				<th>Time Alive</th>
				<th>Last Update</th>
				<th>First Seen</th>
				<th>Position</th>
			</tr>
			<tr class="row_playerdata">
				<td id="table_playerid"></td>
				<td id="table_zkills"></td>
				<td id="table_murders"></td>
				<td id="table_bkills"></td>
				<td id="table_talive"></td>
				<td id="table_lupdate"></td>
				<td id="table_first_seen"></td>
				<td id="table_pos"></td>
			</tr>
		</table>
		<div class="center">
			<a href="" onclick="return false;" id="setgear_btn" alt="Set new gear for selected player">Choose Gear</a>
			<a href="" id="hide_gear_selection" alt="Hide Gear Selection Menu">Hide Gear Selection Menu</a>
		</div>
	</div>
	<div id="gear_selection">
		<h2>Select Gear</h2>
		<div class="left">
			<form method="post" id="maingun">
				<div>
					<label id="labels">Main Gun</label>
					<select name="maingun" id="maingun_item">
						<OPTION VALUE="Remington870_Lamp">Remington 870</OPTION>
						<OPTION VALUE="Winchester1866">Winchester 1866</OPTION>
						<!--<OPTION VALUE="AA12_PMC">AA12</OPTION>-->
						<OPTION VALUE="BAF_AS50_Scoped">AS50</OPTION>
						<!--<OPTION VALUE="BAF_AS50_TWS">AS50 IR Scope</OPTION>
						<OPTION VALUE="BAF_L110A1_Aim">BAF_L110A1_Aim</OPTION>
						<OPTION VALUE="BAF_L7A2_GPMG">BAF_L7A2_GPMG</OPTION>
						<OPTION VALUE="BAF_L85A2_RIS_ACOG">BAF_L85A2_RIS_ACOG</OPTION>
						<OPTION VALUE="BAF_L85A2_RIS_CWS">L85A2 IR Scope</OPTION>
						<OPTION VALUE="BAF_L85A2_RIS_Holo">BAF_L85A2_RIS_Holo</OPTION>
						<OPTION VALUE="BAF_L85A2_RIS_SUSAT">BAF_L85A2_RIS_SUSAT</OPTION>
						<OPTION VALUE="BAF_L85A2_UGL_ACOG">BAF_L85A2_UGL_ACOG</OPTION>
						<OPTION VALUE="BAF_L85A2_UGL_Holo">BAF_L85A2_UGL_Holo</OPTION>
						<OPTION VALUE="BAF_L85A2_UGL_SUSAT">BAF_L85A2_UGL_SUSAT</OPTION>
						<OPTION VALUE="BAF_L86A2_ACOG">BAF_L86A2_ACOG</OPTION>
						<OPTION VALUE="BAF_LRR_scoped">BAF_LRR_scoped</OPTION>
						<OPTION VALUE="BAF_LRR_scoped_W">BAF_LRR_scoped_W</OPTION>-->
						<OPTION VALUE="DMR">DMR</OPTION>
						<OPTION VALUE="FN_FAL">FN FAL</OPTION>
						<OPTION VALUE="FN_FAL_ANPVS4">FN FAL NVG Scope</OPTION>
						<OPTION VALUE="G36_C_SD_camo">G36c SD Camo</OPTION>
						<OPTION VALUE="G36_C_SD_eotech">g36c SD Eotech</OPTION>
						<OPTION VALUE="G36a">G36a</OPTION>
						<OPTION VALUE="G36A_camo">G36a Camo</OPTION>
						<OPTION VALUE="G36C">G36C</OPTION>
						<OPTION VALUE="G36C_camo">G36c Camo</OPTION>
						<OPTION VALUE="G36K">G36k</OPTION>
						<OPTION VALUE="G36K_camo">G36k Camo</OPTION>
						<OPTION VALUE="M1014">M1014</OPTION>
						<!--<OPTION VALUE="M110_NVG_EP1">M110 NVG Scope</OPTION>
						<OPTION VALUE="M110_TWS_EP1">M110 IR Scope</OPTION>-->
						<OPTION VALUE="M14_EP1">M14</OPTION>
						<OPTION VALUE="M16A2">M16A2</OPTION>
						<OPTION VALUE="M16A2GL">M16A2 + M203</OPTION>
						<OPTION VALUE="M16A4">M16A4</OPTION>
						<OPTION VALUE="M16A4_ACG">M16A4 ACOG Scope</OPTION>
						<OPTION VALUE="M16A4_ACG_GL">M16A4 ACOG + M203</OPTION>
						<OPTION VALUE="M16A4_GL">M16A4 + M203</OPTION>
						<OPTION VALUE="M24">M24</OPTION>
						<!--<OPTION VALUE="M24_des_EP1">M24 Desert</OPTION>-->
						<!--<OPTION VALUE="M240">M240</OPTION>-->
						<!--<OPTION VALUE="m240_scoped_EP1">M240 Scope</OPTION>-->
						<OPTION VALUE="M249_DZ">M249</OPTION>
						<!--<OPTION VALUE="M249_EP1">M249_EP1</OPTION>
						<OPTION VALUE="M249_m145_EP1">M249_m145_EP1</OPTION>
						<OPTION VALUE="M249_TWS_EP1">M249_TWS_EP1</OPTION>
						<OPTION VALUE="M32_EP1">M32_EP1</OPTION>-->
						<OPTION VALUE="M40A3">M40A3</OPTION>
						<OPTION VALUE="M4A1">M4A1</OPTION>
						<OPTION VALUE="M4A1_Aim">M4A1_Aim</OPTION>
						<OPTION VALUE="M4A1_Aim_camo">M4A1_Aim_camo</OPTION>
						<OPTION VALUE="M4A1_AIM_SD_camo">M4A1_AIM_SD_camo</OPTION>
						<OPTION VALUE="M4A1_HWS_GL">M4A1_HWS_GL</OPTION>
						<OPTION VALUE="M4A1_HWS_GL_camo">M4A1_HWS_GL_camo</OPTION>
						<OPTION VALUE="M4A1_HWS_GL_SD_Camo">M4A1_HWS_GL_SD_Camo</OPTION>
						<OPTION VALUE="M4A1_RCO_GL">M4A1_RCO_GL</OPTION>
						<OPTION VALUE="M4A3_CCO_EP1">M4A3_CCO_EP1</OPTION>
						<OPTION VALUE="M4A3_RCO_GL_EP1">M4A3_RCO_GL_EP1</OPTION>
						<OPTION VALUE="M4SPR">M4SPR</OPTION>
						<!--<OPTION VALUE="M60A4_EP1">M60A4_EP1</OPTION>
						<OPTION VALUE="M79_EP1">M79_EP1</OPTION>
						<OPTION VALUE="m8_carbine">m8_carbine</OPTION>
						<OPTION VALUE="m8_carbine_pmc">m8_carbine_pmc</OPTION>
						<OPTION VALUE="m8_carbineGL">m8_carbineGL</OPTION>
						<OPTION VALUE="m8_compact">m8_compact</OPTION>
						<OPTION VALUE="m8_compact_pmc">m8_compact_pmc</OPTION>
						<OPTION VALUE="m8_holo_sd">m8_holo_sd</OPTION>
						<OPTION VALUE="m8_SAW">m8_SAW</OPTION>
						<OPTION VALUE="m8_sharpshooter">m8_sharpshooter</OPTION>
						<OPTION VALUE="m8_tws">m8_tws</OPTION>
						<OPTION VALUE="m8_tws_sd">m8_tws_sd</OPTION>-->
						<OPTION VALUE="MG36">MG36</OPTION>
						<OPTION VALUE="MG36_camo">MG36_camo</OPTION>
						<OPTION VALUE="Mk_48_DZ">Mk48</OPTION>
						<OPTION VALUE="M107_DZ">M107</OPTION>
						<OPTION VALUE="PK_DZN">PK (Namalsk ONLY)</OPTION>
						<!--<OPTION VALUE="Mk13_EP1">Mk13_EP1</OPTION>-->
						<OPTION VALUE="MP5A5">MP5A5</OPTION>
						<OPTION VALUE="MP5SD">MP5SD</OPTION>
						<!--<OPTION VALUE="PMC_AS50_scoped">PMC_AS50_scoped</OPTION>
						<OPTION VALUE="PMC_AS50_TWS">PMC_AS50_TWS</OPTION>
						<OPTION VALUE="SCAR_H_CQC_CCO">SCAR_H_CQC_CCO</OPTION>
						<OPTION VALUE="SCAR_H_CQC_CCO_SD">SCAR_H_CQC_CCO_SD</OPTION>
						<OPTION VALUE="SCAR_H_LNG_Sniper">SCAR_H_LNG_Sniper</OPTION>
						<OPTION VALUE="SCAR_H_LNG_Sniper_SD">SCAR_H_LNG_Sniper_SD</OPTION>
						<OPTION VALUE="SCAR_H_STD_EGLM_Spect">SCAR_H_STD_EGLM_Spect</OPTION>
						<OPTION VALUE="SCAR_H_STD_TWS_SD">SCAR_H_STD_TWS_SD</OPTION>
						<OPTION VALUE="SCAR_L_CQC">SCAR_L_CQC</OPTION>
						<OPTION VALUE="SCAR_L_CQC_CCO_SD">SCAR_L_CQC_CCO_SD</OPTION>
						<OPTION VALUE="SCAR_L_CQC_EGLM_Holo">SCAR_L_CQC_EGLM_Holo</OPTION>
						<OPTION VALUE="SCAR_L_CQC_Holo">SCAR_L_CQC_Holo</OPTION>
						<OPTION VALUE="SCAR_L_STD_EGLM_RCO">SCAR_L_STD_EGLM_RCO</OPTION>
						<OPTION VALUE="SCAR_L_STD_EGLM_TWS">SCAR_L_STD_EGLM_TWS</OPTION>
						<OPTION VALUE="SCAR_L_STD_HOLO">SCAR_L_STD_HOLO</OPTION>
						<OPTION VALUE="SCAR_L_STD_Mk4CQT">SCAR_L_STD_Mk4CQT</OPTION>-->
						<OPTION VALUE="AK_107_GL_kobra">AK_107_GL_kobra</OPTION>
						<OPTION VALUE="AK_107_GL_pso">AK_107_GL_pso</OPTION>
						<OPTION VALUE="AK_107_kobra">AK_107_kobra</OPTION>
						<OPTION VALUE="AK_107_pso">AK_107_pso</OPTION>
						<OPTION VALUE="AK_47_M">AK_47_M</OPTION>
						<OPTION VALUE="AK_47_S">AK_47_S</OPTION>
						<OPTION VALUE="AK_74">AK_74</OPTION>
						<OPTION VALUE="AK_74_GL">AK_74_GL</OPTION>
						<OPTION VALUE="AK_74_GL_kobra">AK_74_GL_kobra</OPTION>
						<OPTION VALUE="AKS_74">AKS_74</OPTION>
						<!--<OPTION VALUE="AKS_74_GOSHAWK">AKS_74_GOSHAWK</OPTION>-->
						<OPTION VALUE="AKS_74_kobra">AKS_74_kobra</OPTION>
						<!--<OPTION VALUE="AKS_74_NSPU">AKS_74_NSPU</OPTION>-->
						<OPTION VALUE="AKS_74_pso">AKS_74_pso</OPTION>
						<OPTION VALUE="AKS_74_U">AKS_74_U</OPTION>
						<OPTION VALUE="AKS_74_UN_kobra">AKS_74_UN_kobra</OPTION>
						<OPTION VALUE="AKS_GOLD">AKS_GOLD</OPTION>
						<OPTION VALUE="Bizon">bizon</OPTION>
						<OPTION VALUE="Bizon_Silenced">bizon_silenced</OPTION>
						<OPTION VALUE="HuntingRifle">huntingrifle</OPTION>
						<OPTION VALUE="LeeEnfield">LeeEnfield</OPTION>
						<OPTION VALUE="Pecheneg_DZN">PKP (Namalsk ONLY)</OPTION>
						<OPTION VALUE="Pecheneg">PKP (All other maps)</OPTION>
						<OPTION VALUE="KSVK_DZN">KSVK (Namalsk ONLY)</OPTION>
						<OPTION VALUE="KSVK">KSVK (All other maps)</OPTION>
						<OPTION VALUE="RPK_74">RPK_74</OPTION>
						<!--<OPTION VALUE="Sa58P_EP1">Sa58P_EP1</OPTION>
						<OPTION VALUE="Sa58V_CCO_EP1">Sa58V_CCO_EP1</OPTION>
						<OPTION VALUE="Sa58V_EP1">Sa58V_EP1</OPTION>
						<OPTION VALUE="Sa58V_RCO_EP1">Sa58V_RCO_EP1</OPTION>-->
						<OPTION VALUE="Saiga12K">Saiga12K</OPTION>
						<OPTION VALUE="SVD">SVD</OPTION>
						<OPTION VALUE="SVD_CAMO">SVD_CAMO</OPTION>
						<!--<OPTION VALUE="SVD_des_EP1">SVD_des_EP1</OPTION>
						<OPTION VALUE="SVD_NSPU_EP1">SVD_NSPU_EP1</OPTION>
						<OPTION VALUE="VSS_vintorez">VSS_vintorez</OPTION>
						<OPTION VALUE="M136">M136</OPTION>-->
						<OPTION VALUE="nsw_er7s">NAC ER7 Railgun Sniper (Namalsk ONLY)</OPTION>
						<OPTION VALUE="nsw_er7a">NAC ER7 Railgun Assault (Namalsk ONLY)</OPTION>
					</select>
					<button id="add_button_maingun" type="submit" value="add" name="submit" >ADD</button>
				</div>
			</form>
			<form method="post" id="sidearm">
				<div>
					<label id="labels">Sidearm</label>
					<select name="sidearm" id="sidearm_item">
						<OPTION VALUE="Colt1911">Colt1911</OPTION>
						<OPTION VALUE="Glock17_EP1">glock17_EP1</OPTION>
						<OPTION VALUE="M9">M9</OPTION>
						<OPTION VALUE="M9SD">M9SD</OPTION>
						<OPTION VALUE="Makarov">Makarov</OPTION>
						<OPTION VALUE="MakarovSD">MakarovSD</OPTION>
						<OPTION VALUE="Revolver_EP1">revolver_EP1</OPTION>
						<!--<OPTION VALUE="revolver_gold_EP1">revolver_gold_EP1</OPTION>-
						<OPTION VALUE="Sa61_EP1">Sa61_EP1</OPTION>-->
						<OPTION VALUE="UZI_EP1">UZI_EP1</OPTION>
						<OPTION VALUE="UZI_SD_EP1">UZI_SD_EP1</OPTION>
					</select>
					<button id="add_button_sidearm" type="submit" value="add" name="submit" >ADD</button>
				</div>
			</form>
			<form method="post" id="mainammo">
				<div>
					<label id="labels">Main Gun Ammo</label>
					<select name="mainammo" id="mainammo_item">
						<OPTION VALUE="30Rnd_762x39_AK47">30Rnd_762x39_AK47</OPTION>
						<OPTION VALUE="30Rnd_545x39_AK">30Rnd_545x39_AK</OPTION>
						<OPTION VALUE="30Rnd_545x39_AKSD">30Rnd_545x39_AKSD</OPTION>
						<OPTION VALUE="64Rnd_9x19_SD_Bizon">64Rnd_9x19_SD_Bizon</OPTION>
						<OPTION VALUE="8Rnd_B_Beneli_74Slug">8Rnd_B_Beneli_74Slug</OPTION>
						<OPTION VALUE="8Rnd_B_Beneli_Pellets">8Rnd_B_Beneli_Pellets</OPTION>
						<OPTION VALUE="30Rnd_556x45_Stanag">30Rnd_556x45_Stanag</OPTION>
						<OPTION VALUE="30Rnd_556x45_StanagSD">30Rnd_556x45_StanagSD</OPTION>
						<OPTION VALUE="30Rnd_9x19_MP5">30Rnd_9x19_MP5</OPTION>
						<OPTION VALUE="30Rnd_9x19_MP5SD">30Rnd_9x19_MP5SD</OPTION>
						<OPTION VALUE="100Rnd_762x51_M240">100Rnd_762x51_M240</OPTION>
						<OPTION VALUE="200Rnd_556x45_M249">200Rnd_556x45_M249</OPTION>
						<OPTION VALUE="5x_22_LR_17_HMR">5x_22_LR_17_HMR</OPTION>
						<OPTION VALUE="20Rnd_762x51_DMR">20Rnd_762x51_DMR</OPTION>
						<OPTION VALUE="5Rnd_762x51_M24">5Rnd_762x51_M24</OPTION>
						<OPTION VALUE="10Rnd_762x54_SVD">10Rnd_762x54_SVD</OPTION>
						<OPTION VALUE="10x_303">10x_303</OPTION>
						<OPTION VALUE="10Rnd_127x99_m107">10Rnd_127x99_m107</OPTION>
						<OPTION VALUE="20Rnd_762x51_FNFAL">20Rnd_762x51_FNFAL</OPTION>
						<OPTION VALUE="5Rnd_127x99_as50">5Rnd_127x99_as50</OPTION>
						<!--<OPTION VALUE="M136">M136</OPTION>-->
						<OPTION VALUE="100Rnd_762x54_PK">100Rnd_762x54_PK</OPTION>
						<OPTION VALUE="5Rnd_127x108_KSVK">5Rnd_127x108_KSVK</OPTION>
						<OPTION VALUE="nsw_er7mm">ER7 Railgun Ammo</OPTION>
						<OPTION VALUE="100Rnd_556x45_BetaCMag">100Rnd STANAG Beta Mag</OPTION>
					</select>
					<button id="add_button_mainammo" type="submit" value="add" name="submit" >ADD</button>
				</div>
			</form>
			<form method="post" id="sideammo">
				<div>
					<label id="labels">Sidearm Ammo</label>
					<select name="sideammo" id="sideammo_item">
						<OPTION VALUE="7Rnd_45ACP_1911">7Rnd_45ACP_1911</OPTION>
						<OPTION VALUE="15Rnd_9x19_M9">15Rnd_9x19_M9</OPTION>
						<OPTION VALUE="15Rnd_9x19_M9SD">15Rnd_9x19_M9SD</OPTION>
						<OPTION VALUE="8Rnd_9x18_Makarov">8Rnd_9x18_Makarov</OPTION>
						<OPTION VALUE="8Rnd_9x18_MakarovSD">8Rnd_9x18_MakarovSD</OPTION>
						<OPTION VALUE="17Rnd_9x19_glock17">17Rnd_9x19_glock17</OPTION>
						<OPTION VALUE="6Rnd_45ACP">6Rnd_45ACP</OPTION>
						<OPTION VALUE="30Rnd_9x19_UZI">30Rnd_9x19_UZI</OPTION>
						<OPTION VALUE="20Rnd_B_765x17_Ball">20Rnd_B_765x17_Ball</OPTION>
						<OPTION VALUE="30Rnd_9x19_UZI_SD">30Rnd_9x19_UZI_SD</OPTION>
						<OPTION VALUE="1Rnd_HE_M203">M203 HE Round</OPTION>
						<OPTION VALUE="1Rnd_HE_GP25">GP25 HE Round</OPTION>
						<OPTION VALUE="1Rnd_Smoke_M203">1Rnd Smoke M203</OPTION>
						<OPTION VALUE="FlareYellow_M203">M203 Flare Yelow</OPTION>
						<OPTION VALUE="FlareRed_M203">M203 Flare Red</OPTION>
						<OPTION VALUE="1Rnd_SMOKEGREEN_GP25">GP25 Smoke Green</OPTION>
						<OPTION VALUE="1Rnd_SMOKERED_GP25">GP25 Smoke Red</OPTION>
						<OPTION VALUE="FlareWhite_GP25">GP25 Flare White</OPTION>
						<OPTION VALUE="FlareGreen_GP25">GP25 Flare Green</OPTION>
						<OPTION VALUE="FlareRed_GP25">GP25 Flare Red</OPTION>
						<OPTION VALUE="FlareYellow_GP25">GP25 Flare Yellow</OPTION>
						<OPTION VALUE="FlareWhite_GP25">GP25 Flare White</OPTION>
					</select>
					<button id="add_button_sideammo" type="submit" value="add" name="submit" >ADD</button>
				</div>
			</form>
		</div>
		<div class="right">
			<form method="post" id="items">
				<div>
					<label id="labels">Items</label>
					<select name="items" id="items_item">
						<OPTION VALUE="Binocular">Binoculars</OPTION>
						<OPTION VALUE="Binocular_Vector">Rangefinder</OPTION>
						<OPTION VALUE="NVGoggles">NVGoggles</OPTION>
						<OPTION VALUE="ItemCompass">ItemCompass</OPTION>
						<OPTION VALUE="ItemGPS">ItemGPS</OPTION>
						<OPTION VALUE="APSI">APSI (Emission Protection)(Namalsk ONLY)</OPTION>
						<OPTION VALUE="ItemMap">ItemMap</OPTION>
						<!--<OPTION VALUE="ItemRadio">ItemRadio</OPTION>-->
						<OPTION VALUE="ItemWatch">ItemWatch</OPTION>
						<OPTION VALUE="FoodSteakRaw">Steak (Raw)</OPTION>
						<OPTION VALUE="FoodSteakCooked">Steak (Cooked)</OPTION>
						<OPTION VALUE="FoodCanBakedBeans">Beans</OPTION>
						<OPTION VALUE="FoodCanSardines">Sardines</OPTION>
						<OPTION VALUE="FoodCanPasta">Pasta</OPTION>
						<OPTION VALUE="ItemSodaCoke">Coke</OPTION>
						<OPTION VALUE="ItemSodaPepsi">Pepsi</OPTION>
						<OPTION VALUE="ItemWaterbottle">Water Bottle</OPTION>
						<OPTION VALUE="ItemEpinephrine">Epipen</OPTION>
						<OPTION VALUE="ItemBloodbag">Bloodbag</OPTION>
						<OPTION VALUE="ItemBandage">Bandage</OPTION>
						<OPTION VALUE="ItemPainkiller">Painkillers</OPTION>
						<OPTION VALUE="ItemMorphine">Morphine</OPTION>
						<OPTION VALUE="ItemAntibiotic">Antibiotic</OPTION>
						<OPTION VALUE="ItemHeatPack">Heat Pack</OPTION>
						<OPTION VALUE="ItemToolbox">Toolbox</OPTION>
						<OPTION VALUE="ItemETool">Entrenching Tool</OPTION>
						<OPTION VALUE="ItemFlashlightRed">Military Flashlight</OPTION>
						<OPTION VALUE="ItemHatchet">Hatchet</OPTION>
						<OPTION VALUE="ItemKnife">Knife</OPTION>
						<OPTION VALUE="ItemMatchbox">Matchbox</OPTION>
						<OPTION VALUE="ItemFlashlight">Flashlight</OPTION>
						<OPTION VALUE="HandRoadFlare">Flare</OPTION>
						<OPTION VALUE="HandChemGreen">Chemlight (Green)</OPTION>
						<OPTION VALUE="HandChemBlue">Chemlight (Blue)</OPTION>
						<OPTION VALUE="HandChemRed">Chemlight (Red)</OPTION>
						<OPTION VALUE="ItemSandbag">Sandbag</OPTION>
						<OPTION VALUE="ItemTankTrap">Tank Trap</OPTION>
						<!--<OPTION VALUE="ItemWire">Wire Fencing</OPTION>-->
						<OPTION VALUE="PartWoodPile">Firewood</OPTION>
						<OPTION VALUE="PartWheel">Wheel</OPTION>
						<OPTION VALUE="PartFueltank">Fuel Tank</OPTION>
						<OPTION VALUE="PartGlass">Windscreen Glass</OPTION>
						<OPTION VALUE="PartEngine">Engine</OPTION>
						<OPTION VALUE="PartGeneric">Scrap Metal</OPTION>
						<OPTION VALUE="PartVRotor">Rotor Assembly</OPTION>
						<OPTION VALUE="ItemJerrycan">Jerrycan</OPTION>
						<OPTION VALUE="ItemTent">Tent</OPTION>
						<OPTION VALUE="TrapBear">Bear Trap</OPTION>
						<OPTION VALUE="PipeBomb">Satchel/PipeBomb</OPTION>
						<OPTION VALUE="SmokeShell">Smoke Grenade (White)</OPTION>
						<OPTION VALUE="SmokeShellRed">Smoke Grenade (Red)</OPTION>
						<OPTION VALUE="SmokeShellGreen">Smoke Grenade (Green)</OPTION>
						<OPTION VALUE="ItemTent">Tent</OPTION>
						<OPTION VALUE="mut_heart">Bloodsucker Heart (Namalsk ONLY)</OPTION>
					</select>
					<button id="add_button_item" type="submit" value="add" name="submit" >ADD</button>
				</div>
			</form>
			<form method="post" id="backpack">
				<div>
					<label id="labels">Backpack</label>
					<select name="backpack" id="backpack_item">
						<OPTION VALUE="DZ_Patrol_Pack_EP1">Coyote Patrol Pack (8 slots)</OPTION>
						<OPTION VALUE="DZ_Assault_Pack_EP1">ACU Assault Pack (12 slots)</OPTION>
						<OPTION VALUE="DZ_CivilBackpack_EP1">Czech Backpack (16 slots)</OPTION>
						<OPTION VALUE="DZ_ALICE_Pack_EP1">ALICE Pack (20 slots)</OPTION>
						<OPTION VALUE="BAF_AssaultPack_DZN">BAF Backpack (22 slots)(Namalsk ONLY)</OPTION>
						<OPTION VALUE="DZ_Backpack_EP1">Coyote Backpack (24 slots)</OPTION>
					</select>
					<button id="add_button_backpack" type="submit" value="add" name="submit" >ADD</button>
				</div>
			</form>
			<form method="post" id="skin">
				<div>
					<label id="labels">Skin</label>
					<select name="skin" id="skin_item">
						<OPTION VALUE="Survivor2_DZ">Survivor</OPTION>
						<OPTION VALUE="SurvivorW2_DZ">Survivor 2 (Female)</OPTION>
						<OPTION VALUE="Camo1_DZ">Camo Clothing</OPTION>
						<OPTION VALUE="Sniper1_DZ">Ghillie Suit</OPTION>
						<OPTION VALUE="Sniper1W_DZN">Ghillie Suit (White)(Namalsk ONLY)</OPTION>
						<OPTION VALUE="Rocket_DZ">Rocket's</OPTION>
						<OPTION VALUE="Soldier1_DZ">Soldier</OPTION>
						<OPTION VALUE="Bandit1_DZ">Bandit</OPTION>
						<OPTION VALUE="BanditW1_DZ">Bandit (Female)</OPTION>
						<OPTION VALUE="CamoWinter_DZN">Winter Camo (Namalsk ONLY)</OPTION>
						<OPTION VALUE="CamoWinterW_DZN">Winter Camo (White)(Namalsk ONLY)</OPTION>
						<OPTION VALUE="Survivor3_DZ">Hero Outfit</OPTION>
					</select>
					<button id="add_button_skin" type="submit" value="add" name="submit" >ADD</button>
				</div>
			</form>
			<form method="post">
				<div>
				<label id="labels">To Backpack</label>
				<input type="checkbox" id="to_backpack" name="to_backpack" value=""></input>
				<br />
				<br />
				</div>
			</form>
		</div>
		<div id="set_gear_buttons">
			<a href="" id="set_inventory_button" onclick="save_gear_clicked(); return false;" alt="Clear currently selected gear">Save Inventory</a>&nbsp;&nbsp;
			<a href="" onclick="save_backpack_clicked(); return false;" alt="Clear currently selected gear">Save Backpack</a>&nbsp;&nbsp;
			<a href="" onclick="save_skin_clicked(); return false;" alt="Clear currently selected gear">Save Skin</a>&nbsp;&nbsp;
			<a href="" onclick="clear_inventory(); return false;" alt="Clear currently selected gear">Clear Inventory</a>
			<br />
			<a href="" id="save_custom_loadout" onclick="return false;" alt="Save selected loadout as a preset">Save Loadout as Preset</a>&nbsp;&nbsp;
			<a href="" id="load_custom_loadout" onclick="return false;" alt="Load previously saved gear preset">Load Saved Preset</a>&nbsp;&nbsp;
		</div>
	</div>
	<div id="player_search_results">
		<h2>Search Results</h2>
	
	</div>
	<br />
	<br />
	<div id="gear_preview">
		<h2>Current Gear</h2>
		<div class="left">
			<h2>Main Gun</h2>
			<div id="current_maingun">
			
			</div>
			<h2>Sidearm</h2>
			<div id="current_sidearm">
			
			</div>
			<h2>Backpack</h2>
			<div id="current_backpack">
			
			</div>
			<div>
				<h2>Backpack Inventory</h2><span class="slots_num_text" id="backpack_slots_text"></span>
				<div id="current_backpack_inventory">
				
				</div>
				<div id="backpack_slots" class="inventory_tables">

				</div>
			</div>
		</div>
		<div id="skin_preview">
			<h2>Current Skin</h2>
			<span id="current_skin_text"></span>
			<div id="current_skin">
			
			</div>
		</div>
		<div class="right">
			
			<div id="current_main_inventory">
			<h2>Main Inventory  <span class="slots_num_text">(12 slots)</span></h2>
				<span id="current_main_items"></span>
				<div class="inventory_tables">
					<table>
						<tr>
							<td></td><td></td><td></td>
						</tr>
						<tr>
							<td></td><td></td><td></td>
						</tr>
						<tr>
							<td></td><td></td><td></td>
						</tr>
						<tr>
							<td></td><td></td><td></td>
						</tr>
					</table>
				</div>
			</div>
			
			<div id="current_side_inventory">
			<h2>Side Inventory<span class="slots_num_text">(8 slots)</span></h2>
				<span id="current_side_items"></span>
				<div class="inventory_tables">
					<table>
						<tr>
							<td></td><td></td><td></td><td></td>
						</tr>
						<tr>
							<td></td><td></td><td></td><td></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
    <div id="gear_strings">
    	<h3>Inventory String:</h3>
        <div id="inventory_string">[[<a id="main_gun_string"></a>,<a id="sidearm_string"></a>,<a id="type1_string"></a>],[<a id="type2_string"></a>]]</div>
		<h3>Backpack String:</h3>
        <div id="backpack_string">[<a id="backpack_string_name"></a>,[[<a id="backpack_string_guns"></a>],[<a id="backpack_string_guns_qty"></a>]],[[<a id="backpack_string_items"></a>],[<a id="backpack_string_items_qty"></a>]]]</div>
    </div>
	<div id="current_id"></div>
</div>

</body>
</html>
