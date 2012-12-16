/*
 * -=[AWG]=- DayZ HIVE Admin
 * Author: Anzu
 * Description: Functions for the HIVE Admin pages.
 * Requires jQuery.
*/

var mainguns_array = new Array("Remington870_Lamp","Winchester1866","AA12_PMC","BAF_AS50_Scoped","BAF_AS50_TWS","BAF_L110A1_AIM","BAF_L7A2_gpmg","BAF_L85A2_RIS_ACOG","BAF_L85A2_RIS_cws","BAF_L85A2_RIS_Holo","BAF_L85A2_RIS_susat","BAF_L85A2_uGL_ACOG","BAF_L85A2_uGL_Holo","BAF_L85A2_uGL_susat","BAF_l86A2_ACOG","BAF_LRR_Scoped","BAF_LRR_Scoped_W","DMR","FN_FAL","FN_FAL_anpvs4","G36_c_SD_Camo","G36_c_SD_EOTECH","G36A","G36A_Camo","G36C","G36C_Camo","G36K","G36K_Camo","M1014","M110_NVG_EP1","M110_TWS_EP1","M14_EP1","M16A2","M16A2GL","M16A4","M16A4_ACG","M16A4_ACG_GL","M16A4_GL","M24","M24_DES_EP1","M240","M240_Scoped_EP1","M249","M249_EP1","M249_M145_EP1","M249_TWS_EP1","m32_EP1","m40a3","M4A1","M4A1_AIM","M4A1_AIM_Camo","M4A1_AIM_SD_Camo","M4A1_HWS_GL","M4A1_HWS_GL_Camo","M4A1_HWS_GL_SD_Camo","M4A1_RCO_GL","M4A3_CCO_EP1","M4A3_RCO_GL_EP1","m4spr","M60a4_EP1","m79_EP1","M8_Carbine","M8_Carbine_PMC","M8_CarbineGL","M8_Compact","M8_Compact_PMC","M8_Holo_SD","M8_saw","M8_Sharpshooter","M8_TWS","M8_TWS_SD","MG36","MG36_Camo","MK_48_DZ","M107_DZ","mk13_EP1","MP5A5","MP5SD","PMC_AS50_Scoped","PMC_AS50_TWS","scar_H_CQC_CCO","scar_H_CQC_CCO_SD","scar_H_lng_Sniper","scar_H_lng_Sniper_SD","scar_H_STD_EGLM_spect","scar_H_STD_TWS_SD","scar_l_CQC","scar_l_CQC_CCO_SD","scar_l_CQC_EGLM_Holo","scar_l_CQC_Holo","scar_l_STD_EGLM_rco","scar_l_STD_EGLM_TWS","scar_l_STD_Holo","scar_l_STD_mk4cqt","AK_107_GL_Kobra","AK_107_GL_pso","AK_107_Kobra","AK_107_PSO","AK_47_M","AK_47_S","AK_74","AK_74_GL","AK_74_GL_Kobra","AKS_74","AKS_74_Goshawk","AKS_74_Kobra","AKS_74_NSPU","AKS_74_PSOo","AKS_74_u","AKS_74_un_Kobra","AKS_Gold","Bizon","Bizon_Silenced","HuntingRifle","LeeEnfield","Pecheneg","Pecheneg_DZN","KSVK","PK","KSVK_DZ","PK_DZN","RPK_74","sA58p_EP1","sA58v_CCO_EP1","sA58v_EP1","sA58v_RCO_EP1","SaigA12K","SVD","SVD_Camo","SVD_DES_EP1","SVD_NSPU_EP1","VSS_Vintorez","M136","nsw_er7s");
var sidearms_array = new Array("Colt1911","Glock17_EP1","M9","M9SD","Makarov","MakarovSD","Revolver_EP1","Revolver_gold_EP1","sa61_EP1","UZI_EP1","UZI_SD_EP1","1Rnd_Smoke_M203","1Rnd_HE_M203");
var mainitems_array = new Array("30Rnd_762x39_AK47","30Rnd_545x39_AK","30Rnd_545x39_AKSD","64Rnd_9x19_SD_Bizon","8Rnd_B_Beneli_74Slug","8Rnd_B_Beneli_Pellets","30Rnd_556x45_Stanag","30Rnd_556x45_StanagSD","30Rnd_9x19_MP5","30Rnd_9x19_MP5SD","100Rnd_762x51_M240","200Rnd_556x45_M249","5x_22_LR_17_HMR","20Rnd_762x51_DMR","5Rnd_762x51_M24","10Rnd_762x54_SVD","10x_303","10Rnd_127x99_M107","20Rnd_762x51_FNFAL","5Rnd_127x99_AS50","M136","100Rnd_762x54_pk","5Rnd_127x108_KSVK","FoodSteakRaw","FoodSteakCooked","ItemEpinephrine","ItemBloodbag","FoodCanBakedBeans","FoodCanSardines","FoodCanPasta","ItemSodaCoke","ItemSodaPepsi","ItemSodaMDew","ItemWaterbottle","HandRoadFlare","HandChemGreen","HandChemBlue","HandChemRed","ItemSandbag","ItemTankTrap","ItemWire","ItemPainkiller","ItemMorphine","ItemAntibiotic","ItemHeatpack","PartWoodPile","PartWheel","PartFueltank","PartGlass","PartEngine","PartGeneric","PartVRotor","ItemJerrycan","ItemTent","TrapBear","PipeBomb","nsw_er7mm","APSI");
var sideitems_array = new Array("ItemBandage","1Rnd_HE_M203","7Rnd_45ACP_1911","15Rnd_9x19_M9","15Rnd_9x19_M9SD","8Rnd_9x18_Makarov","17Rnd_9x19_Glock17","6Rnd_45ACP","30Rnd_9x19_UZI","Revolver_Gold_EP1","20Rnd_B_765x17_Ball","30Rnd_9x19_UZI_SD","8Rnd_9x18_MakarovSD");
var miscitems_array = new Array("ItemToolbox","ItemETool","ItemFlashlightRed","ItemHatchet","ItemKnife","ItemMatchbox","ItemFlashlight","ItemCompass","ItemGPS","ItemMap","ItemRadio","ItemWatch","Binocular","Binocular_Vector","NVGoggles");

// Create type1 and type2 items arrays (used for placement of item classname in gear string
var type1_items = mainguns_array.concat(sidearms_array,miscitems_array);
var type2_items = mainitems_array.concat(sideitems_array);

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

function clear_inventory() {
	$("#main_gun_string").html('');
	$("#sidearm_string").html('');
	$("#type1_string").html('');
	$("#type2_string").html('');
	$("#backpack_string_name").html('');
	$("#backpack_string_guns").html('');
	$("#backpack_string_guns_qty").html('');
	$("#backpack_string_items").html('');
	$("#backpack_string_items_qty").html('');
	$("#current_maingun").html('');
	$("#current_sidearm").html('');
	$("#current_backpack").html('');
	$("#current_backpack_inventory").html('');
	$("#current_main_items").html('');
	$("#current_side_items").html('');
	//$("#current_skin").html('');
}

function getSkin(skin) {
	switch(skin) {
		case "Survivor1_DZ":
			var skin_image = "survivor1_dz.png";
			break;
		case "Survivor2_DZ":
			var skin_image = "survivor2_dz.png";
			break;
		case "Survivor3_DZ":
			var skin_image = "survivor3_dz.png";
			break;
		case "SurvivorW2_DZ":
			var skin_image = "survivorw2_dz.png";
			break;
		case "Bandit1_DZ":
			var skin_image = "bandit1_dz.png";
			break;
		case "Camo1_DZ":
			var skin_image = "camo1_dz.png";
			break;
		case "Rocket_DZ":
			var skin_image = "rocket_dz.png";
			break;
		case "Sniper1_DZ":
			var skin_image = "sniper1_dz.png";
			break;
		case "CamoWinter_DZN":
			var skin_image = "skin_camowinter_dzn.png";
			break;
		case "CamoWinterW_DZN":
			var skin_image = "skin_camowinter_dzn.png";
			break;
		case "Sniper1W_DZN":
			var skin_image = "sniper1_dz.png";
			break;
		default:
			var skin_image = "survivor1_dz.png";
			break;
	}
	return skin_image;
}

function getBackpack(backpack_name) {
	backpack_table = '<table>';
	switch(backpack_name) {
		case "CZ_VestPouch_EP1":
			var num_backpack_slots = 6;
			backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>';
			break;
		case "DZ_Patrol_Pack_EP1":
			var num_backpack_slots = 8;
			backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>';
			break;
		case "DZ_Assault_Pack_EP1":
			var num_backpack_slots = 12;
			backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></table>';
			break;
		case "dz_civilbackpack_ep1":
			var num_backpack_slots = 16;
			backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>';
			break;
		case "DZ_ALICE_Pack_EP1":
			var num_backpack_slots = 20;
			backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></table>';
			break;
		case "DZ_Backpack_EP1":
			var num_backpack_slots = 24;
			backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>';
			break;
	}
	return backpack_table;
}

function getBackpackNumSlots(backpack_name) {
	switch(backpack_name) {
		case "CZ_VestPouch_EP1":
			var num_backpack_slots = 6;
			break;
		case "DZ_Patrol_Pack_EP1":
			var num_backpack_slots = 8;
			break;
		case "DZ_Assault_Pack_EP1":
			var num_backpack_slots = 12;
			break;
		case "DZ_CivilBackpack_EP1":
			var num_backpack_slots = 16;
			break;
		case "DZ_ALICE_Pack_EP1":
			var num_backpack_slots = 20;
			break;
		case "DZ_Backpack_EP1":
			var num_backpack_slots = 24;
			break;
	}
	return num_backpack_slots;
}

function fetch_data(postdata) {
	$.ajax({
		type: "POST",
		url: "get_player_data.php",
		data: postdata,
		success: function(response) {
			//$("#player_search_results").html('<h2>Search Results</h2>'+ response);
			//setTimeout(fetch_data(response), 400);
			var today_ms = Date.parse(Date());
			$("#player_search_results").html('<h2>Search Results</h2>');
			var result_rows_array = response.split('<~~~>');
			if (response.length < 4) {
				var num_results = 0;
			} else {
				var num_results = result_rows_array.length;
			}
			$("#player_search_results").append('<h3>Found '+ num_results +' results</h3><br />');
			var result_table = '<table id="table_playerdata"><tr id="row_fieldname"><th>Name</th><th>PlayerID</th><th>Zombie Kills</th><th>Murders</th><th>Bandit Kills</th><th>Time Alive</th><th>Last Update</th><th>Gear</th><th>Position</th></tr>';
			var _count = 0;
			$.each(result_rows_array, function() {
				_count += 1;
				var row_array = this.split(',~,');
				var birthdate = row_array[6].substring(0,10);
				var birth_ms = Date.parse(birthdate);	// Gets time in ms player has been alive
				var days_alive = Math.round((today_ms - birth_ms) / 1000 / 60 / 60 / 24); // Calculates how many days player has been alive
				var pos = row_array[8].replace(/[\[\]]+/g, '').split(',');
				var pos_azimuth = pos[0];
				var pos_x = roundNumber(pos[1],2);
				var pos_y = roundNumber(pos[2],2);
				var pos_z = pos[3];
				var pos_display = pos_x+','+pos_y;
				result_table += '<tr class="row_playerdata">';
				result_table += '<td><a href="" onClick=\'fetch_inventory('+ row_array[0] +','+ row_array[1] +',"'+ row_array[2] +'",'+ row_array[3] +','+ row_array[4] +','+ row_array[5] +','+ days_alive +',"'+ row_array[7] +'","'+ pos_display +'");return false;\' id="view_gear" alt="Select Player">'+row_array[2]+'</a></td>';	// Player Name row_array[2]
				result_table += '<td>'+ row_array[1] +'</td>';	// Player ID
				result_table += '<td>'+ row_array[3] +'</td>'; // Zombie kills
				result_table += '<td>'+ row_array[4] +'</td>';	// Murders
				result_table += '<td>'+ row_array[5] +'</td>';	// Bandit kills
				result_table += '<td>'+ days_alive +' days</td>';	// Time alive in days
				result_table += '<td>'+ row_array[7] +'</td>';	// Last update
				result_table += '<td><a href="" onClick=\'fetch_inventory('+ row_array[0] +','+ row_array[1] +',"'+ row_array[2] +'",'+ row_array[3] +','+ row_array[4] +','+ row_array[5] +','+ days_alive +',"'+ row_array[7] +'","'+ pos_display +'");return false;\' id="view_gear" alt="View Players Gear">View</a></td>';
				result_table += '<td>'+ pos_display +'</td>';
				result_table += '</tr>';
			});
			result_table += '</table><br />';
			$("#player_search_results").append(result_table);
			//$("#player_search_results").show();
			//$("#player_search_results").animate({
			//	opacity: 1,
			//	height: 'auto'
			//}, 600, function() {
				
			//});
		}
	});
	showSearchResults();
}

function fetch_inventory(id,uid,name,kills,hkills,bkills,talive,lupdate,pos) {
	var postdata = 'id='+ id;
	clear_inventory();
	$.ajax({
		type: "POST",
		url: "get_player_data.php",
		data: postdata,
		success: function(response) {
			$("#type1_string").html('');
			$("#type2_string").html('');
			$("#current_main_items").html('');
			$("#current_side_items").html('');
			// Parse gear strings and classify items by type
			// using item type arrays from hive_admin.js
			var gear_array = response.split(',~,');
			var inventory = gear_array[0].replace(/[\[\]"]+/g, '');
			var backpack = gear_array[1];//.replace(/[\[\]"]+/g, '');
			var skin = gear_array[2].replace(/[\[\]"]+/g, '');
			var inventory_array = inventory.split(',');
			var backpack_array = backpack.replace(/["]+/g, '').split(']],[[');
			var backpack_name_type1_array = backpack_array[0].split(',[[');
			var backpack_name = backpack_name_type1_array[0].replace (/[\["]+/g, '');
			
			var backpack_type1_items = backpack_name_type1_array[1].split('],[');
			var backpack_type1_names = backpack_type1_items[0].replace(/["]+/g, '').split(',');
			var backpack_type1_nums = backpack_type1_items[1].split(',');
			
			var backpack_type2_items = backpack_array[1].split('],[');
			var backpack_type2_names = backpack_type2_items[0].replace(/["]+/g, '').split(',');
			var backpack_type2_nums = backpack_type2_items[1].replace(/[\]]+/g, '').split(',');
			
			// Parse backpack items
			var _exist = $("#backpack_string_guns").html();
			if (_exist > 0) {
				for(i=0; i<backpack_type1_names.length; i++) {
					$("#backpack_string_guns").append(',"'+ backpack_type1_names[i] +'"');
					$("#current_backpack_inventory").append(backpack_type1_names[i] +'<br />');
				}
			} else {
				$("#current_backpack_inventory").html('');
				for(i=0; i<backpack_type1_names.length; i++) {
					if (i==0) {
						$("#backpack_string_guns").append('"'+ backpack_type1_names[i] +'"');
					} else {
						$("#backpack_string_guns").append(',"'+ backpack_type1_names[i] +'"');
					}
					$("#current_backpack_inventory").append(backpack_type1_names[i] +'<br />');
				}
			}
			var _exist = $("#backpack_string_guns_qty").html();
			if (_exist > 0) {
				for(i=0; i<backpack_type1_nums.length; i++) {
					$("#backpack_string_guns_qty").append(','+ backpack_type1_nums[i]);
				}
			} else {
				for(i=0; i<backpack_type1_nums.length; i++) {
					if (i == 0) {
						$("#backpack_string_guns_qty").append(backpack_type1_nums[i]);
					} else {
						$("#backpack_string_guns_qty").append(','+ backpack_type1_nums[i]);
					}
				}
			}
			// Type 2 items in backpack
			var _exist = $("#backpack_string_items").html();
			if (_exist > 0) {
				for(i=0; i<backpack_type2_names.length; i++) {
					$("#backpack_string_items").append(',"'+ backpack_type2_names[i] +'"');
					$("#current_backpack_inventory").append(backpack_type2_names[i] +'<br />');
				}
			} else {
				$("#current_backpack_inventory").html('');
				for(i=0; i<backpack_type2_names.length; i++) {
					if (i == 0) {
						$("#backpack_string_items").append('"'+ backpack_type2_names[i] +'"');
					} else {
						$("#backpack_string_items").append(',"'+ backpack_type2_names[i] +'"');
					}
					$("#current_backpack_inventory").append(backpack_type2_names[i] +'<br />');
				}
			}
			var _exist = $("#backpack_string_items_qty").html();
			if (_exist > 0) {
				for(i=0; i<backpack_type2_nums.length; i++) {
					$("#backpack_string_items_qty").append(','+ backpack_type2_nums[i]);
				}
			} else {
				for(i=0; i<backpack_type2_nums.length; i++) {
					if (i == 0) {
						$("#backpack_string_items_qty").append(backpack_type2_nums[i]);
					} else {
						$("#backpack_string_items_qty").append(','+ backpack_type2_nums[i]);
					}
				}
			}
			$("#backpack_string_name").html('"'+backpack_name+'"');
			$("#current_backpack").html(backpack_name);
			
			var backpack_table = getBackpack(backpack_name);
			var num_backpack_slots = getBackpackNumSlots(backpack_name);
			$("#backpack_slots").html(backpack_table);
			$("#backpack_slots_text").html('('+ num_backpack_slots + ' slots)');
			$("#current_skin_text").html(skin +'<br />');

			var skin_image = getSkin(skin);
			$("#current_skin").html('<img src="images/skins/'+ skin_image +'" alt="Player Skin" id="player_skin_img"/>');
			//$("#player_search_results").html(inventory);
			//$("#player_search_results").html('<br />');
			//$("#player_search_results").append(backpack);
			// Parse main inventory items
			for(i=0; i<inventory_array.length; i++) {
				//$("#player_search_results").append(this + '<br />');
				//var maingun_found = $.inArray(this, mainguns_array);
				if ($.inArray(inventory_array[i], mainguns_array) > -1) {
					//$("#player_search_results").append('<br />Found main gun ' + inventory_array[i] + '<br />');
					$("#main_gun_string").html('"' +inventory_array[i] +'"');
					$("#current_maingun").html(inventory_array[i]);
				} else if ($.inArray(inventory_array[i], sidearms_array) > -1) {
					$("#sidearm_string").html('"'+ inventory_array[i] +'"');
					$("#current_sidearm").html(inventory_array[i]);
				} else if ($.inArray(inventory_array[i], type1_items) > -1) {
					if ($("#type1_string").html().length > 0) {
						$("#type1_string").append(',"' + inventory_array[i] + '"');
					} else {
						$("#type1_string").html('"' + inventory_array[i] + '"');
					}
				} else if ($.inArray(inventory_array[i], mainitems_array) > -1) {
					if ($("#type2_string").html().length > 0) {
						$("#type2_string").append(',"' + inventory_array[i] + '"');
					} else {
						$("#type2_string").html('"' + inventory_array[i] + '"');
					}
					$("#current_main_items").append(inventory_array[i] + '<br />');
				} else if ($.inArray(inventory_array[i], sideitems_array) > -1) {
					if ($("#type2_string").html().length > 0) {
						$("#type2_string").append(',"' + inventory_array[i] + '"');
					} else {
						$("#type2_string").html('"' + inventory_array[i] + '"');
					}
					$("#current_side_items").append(inventory_array[i] + '<br />');
				}
			}
			$("#gear_strings").fadeIn(800);
			$("#gear_preview").fadeIn(800);
			hideSearchResults();
			//$("#player_search_results").fadeOut(400);
		}
	});
	$("#stats_player_name").html(name);
	$("#table_playerid").html(uid);
	$("#table_zkills").html(kills);
	$("#table_murders").html(hkills);
	$("#table_bkills").html(bkills);
	$("#table_talive").html(talive +' days');
	$("#table_lupdate").html(lupdate);
	$("#table_pos").html(pos);
	$("#current_id").html(id);
	hideGearSelection();
	return false;
}

function hideGearSelection() {		
	$("#gear_selection").animate({
		opacity: 0,
		height: 0
	}, 600, function() {
		$("#gear_selection").hide();
		//var cssRules = {
		//	'height' : 'auto',
		//	'opacity' : '1'
		//}
		//$("#gear_selection").css(cssRules);
	});
	$("#hide_gear_selection").animate({
		opacity: 0,
		padding: '0px 0px 20px 0px',
		display: 'none'
	}, 800, function() {
		//$("#hide_gear_selection").hide();
	});
	$("#setgear_btn").animate({
		opacity: 1,
		padding: '20px 0px 0px 0px',
		display: 'inline-block'
	}, 800, function() { });
}

function showGearSelection() {
	$("#gear_selection").animate({
		'opacity' : '1',
		'height' : 'auto'
		/*'margin-bottom' : '100px'*/
	}, 600, function() {
		$("#gear_selection").fadeIn(600);
		var cssRules = {
			'display' : 'inline-block',
			'height' : 'auto',
			'opacity' :'1'
		}
		$("#gear_selection").css(cssRules);
	});
}

function showSearchResults() {
	$("#gear_strings").fadeOut(800);
	$("#gear_preview").fadeOut(800);
	$("#player_search_results").animate({
		opacity: 1,
		height: 'auto'
	}, 600, function() {
		$("#player_search_results").fadeIn(600);
	});
	
}

function hideSearchResults() {
	$("#player_search_results").animate({
		opacity: 0,
		height: 0
	}, 600, function() {
		$("#player_search_results").hide();
		var cssRules = {
			'height' : 'auto',
			'opacity' : '1'
		}
		$("#player_search_results").css(cssRules);
	});
}

function fetch_top_players(orderby) {
	//if (orderby > 0) {
		var postdata = 'orderby='+orderby;
	//} else {
		//var postdata = 'orderby=zombie_kills';
	//}
	$.ajax({
		type: "POST",
		url: "get_top_players.php",
		data: postdata,
		success: function(response) {
			//$("#player_search_results").html('<h2>Search Results</h2>'+ response);
			//setTimeout(fetch_data(response), 400);
			var today_ms = Date.parse(Date());
			$("#player_search_results").html('<h2>Top Players</h2>');
			var result_rows_array = response.split('<~~~>');
			if (response.length < 10) {
				var num_results = 0;
			} else {
				var num_results = result_rows_array.length;
			}
			//$("#player_search_results").append('<h3>Found '+ num_results +' results</h3><br />');
			var result_table = '<table id="table_playerdata"><tr id="row_fieldname"><th>Name</th><th>PlayerID</th><th>Zombie Kills</th><th>Murders</th><th>Bandit Kills</th><th>Time Alive</th><th>Last Update</th><th>Gear</th><th>Position</th></tr>';
			var _count = 0;
			$.each(result_rows_array, function() {
				_count += 1;
				var row_array = this.split(',~,');
				var birthdate = row_array[6].substring(0,10);
				var birth_ms = Date.parse(birthdate);	// Gets time in ms player has been alive
				var days_alive = Math.round((today_ms - birth_ms) / 1000 / 60 / 60 / 24); // Calculates how many days player has been alive
				var pos = row_array[8].replace(/[\[\]]+/g, '').split(',');
				var pos_azimuth = pos[0];
				var pos_x = roundNumber(pos[1],2);
				var pos_y = roundNumber(pos[2],2);
				var pos_z = pos[3];
				var pos_display = pos_x+','+pos_y;
				result_table += '<tr class="row_playerdata">';
				result_table += '<td><a href="" onClick=\'fetch_inventory('+ row_array[0] +','+ row_array[1] +',"'+ row_array[2] +'",'+ row_array[3] +','+ row_array[4] +','+ row_array[5] +','+ days_alive +',"'+ row_array[7] +'","'+ pos_display +'");return false;\' id="view_gear" alt="Select Player">'+row_array[2]+'</a></td>';	// Player Name
				result_table += '<td>'+ row_array[1] +'</td>';	// Player ID
				result_table += '<td>'+ row_array[3] +'</td>'; // Zombie kills
				result_table += '<td>'+ row_array[4] +'</td>';	// Murders
				result_table += '<td>'+ row_array[5] +'</td>';	// Bandit kills
				result_table += '<td>'+ days_alive +' days</td>';	// Time alive in days
				result_table += '<td>'+ row_array[7] +'</td>';	// Last update
				result_table += '<td><a href="" onClick=\'fetch_inventory('+ row_array[0] +','+ row_array[1] +',"'+ row_array[2] +'",'+ row_array[3] +','+ row_array[4] +','+ row_array[5] +','+ days_alive +',"'+ row_array[7] +'","'+ pos_display +'");return false;\' id="view_gear" alt="View Players Gear">View</a></td>';
				result_table += '<td>'+ pos_display +'</td>';
				result_table += '</tr>';
			});
			result_table += '</table><br />';
			$("#player_search_results").append(result_table);
			//$("#player_search_results").show();
			//$("#player_search_results").animate({
			//	opacity: 1,
			//	height: 'auto'
			//}, 600, function() {
				
			//});
		}
	});
	showSearchResults();
	//$("#gear_selection").fadeOut(600);
	$("#gear_selection").animate({
		opacity: 0,
		height: 0
	}, 600, function() {
		$("#gear_selection").hide();
		//var cssRules = {
		//	'height' : 'auto',
		//	'opacity' : '1'
		//}
		//$("#gear_selection").css(cssRules);
	});
}

