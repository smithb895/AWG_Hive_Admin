/*
 * -=[AWG]=- DayZ HIVE Admin
 * Author: Anzu
 * Description: Functions for the HIVE Admin pages.
 * Requires jQuery.
*/

var mainguns_array = new Array("remington870_lamp","winchester1866","aa12_pmc","baf_as50_scoped","baf_as50_tws","baf_l110a1_aim","baf_l7a2_gpmg","baf_l85a2_ris_acog","baf_l85a2_ris_cws","baf_l85a2_ris_holo","baf_l85a2_ris_susat","baf_l85a2_ugl_acog","baf_l85a2_ugl_holo","baf_l85a2_ugl_susat","baf_l86a2_acog","baf_lrr_scoped","baf_lrr_scoped_w","dmr","fn_fal","fn_fal_anpvs4","g36_c_sd_camo","g36_c_sd_eotech","g36a","g36a_camo","g36c","g36c_camo","g36k","g36k_camo","m1014","m110_nvg_ep1","m110_tws_ep1","m14_ep1","m16a2","m16a2gl","m16a4","m16a4_acg","m16a4_acg_gl","m16a4_gl","m24","m24_des_ep1","m240_dz","m240","m240_scoped_ep1","m249","m249_ep1","m249_m145_ep1","m249_tws_ep1","m32_ep1","m40a3","m4a1","m4a1_aim","m4a1_aim_camo","m4a1_aim_sd_camo","m4a1_hws_gl","m4a1_hws_gl_camo","m4a1_hws_gl_sd_camo","m4a1_rco_gl","m4a3_cco_ep1","m4a3_rco_gl_ep1","m4spr","m60a4_ep1","m79_ep1","m8_carbine","m8_carbine_pmc","m8_carbinegl","m8_compact","m8_compact_pmc","m8_holo_sd","m8_saw","m8_sharpshooter","m8_tws","m8_tws_sd","mg36","mg36_camo","mk_48_dz","m107_dz","mk13_ep1","mp5a5","mp5sd","pmc_as50_scoped","pmc_as50_tws","scar_h_cqc_cco","scar_h_cqc_cco_sd","scar_h_lng_sniper","scar_h_lng_sniper_sd","scar_h_std_eglm_spect","scar_h_std_tws_sd","scar_l_cqc","scar_l_cqc_cco_sd","scar_l_cqc_eglm_holo","scar_l_cqc_holo","scar_l_std_eglm_rco","scar_l_std_eglm_tws","scar_l_std_holo","scar_l_std_mk4cqt","ak_107_gl_kobra","ak_107_gl_pso","ak_107_kobra","ak_107_pso","ak_47_m","ak_47_s","ak_74","ak_74_gl","ak_74_gl_kobra","aks_74","aks_74_goshawk","aks_74_kobra","aks_74_nspu","aks_74_psoo","aks_74_u","aks_74_un_kobra","aks_gold","bizon","bizon_silenced","huntingrifle","leeenfield","pecheneg","pecheneg_dzn","ksvk","pk","ksvk_dz","pk_dzn","rpk_74","sa58p_ep1","sa58v_cco_ep1","sa58v_ep1","sa58v_rco_ep1","saiga12k","svd","svd_camo","svd_des_ep1","svd_nspu_ep1","vss_vintorez","m136","nsw_er7s","nsw_er7a");
var sidearms_array = new Array("colt1911","glock17_ep1","m9","m9sd","makarov","makarovsd","revolver_ep1","revolver_gold_ep1","sa61_ep1","uzi_ep1","uzi_sd_ep1");
var mainitems_array = new Array("30rnd_762x39_ak47","30rnd_545x39_ak","30rnd_545x39_aksd","64rnd_9x19_sd_bizon","8rnd_b_beneli_74slug","8rnd_b_beneli_pellets","30rnd_556x45_stanag","30rnd_556x45_stanagsd","30rnd_9x19_mp5","30rnd_9x19_mp5sd","100rnd_762x51_m240","200rnd_556x45_m249","5x_22_lr_17_hmr","20rnd_762x51_dmr","5rnd_762x51_m24","10rnd_762x54_svd","10x_303","10rnd_127x99_m107","20rnd_762x51_fnfal","5rnd_127x99_as50","m136","100rnd_762x54_pk","5rnd_127x108_ksvk","foodsteakraw","foodsteakcooked","itemepinephrine","itembloodbag","foodcanbakedbeans","foodcansardines","foodcanpasta","itemsodacoke","itemsodapepsi","itemsodamdew","itemwaterbottle","handroadflare","handchemgreen","handchemblue","handchemred","itemsandbag","itemtanktrap","itemwire","itempainkiller","itemmorphine","itemantibiotic","itemheatpack","partwoodpile","partwheel","partfueltank","partglass","partengine","partgeneric","partvrotor","itemjerrycan","itemtent","trapbear","pipebomb","nsw_er7mm","apsi");
var sideitems_array = new Array("itembandage","1rnd_he_m203","1rnd_he_gp25","1rnd_smokegreen_gp25","1rnd_smokered_gp25","7rnd_45acp_1911","15rnd_9x19_m9","15rnd_9x19_m9sd","8rnd_9x18_makarov","17rnd_9x19_glock17","6rnd_45acp","30rnd_9x19_uzi","20rnd_b_765x17_ball","30rnd_9x19_uzi_sd","8rnd_9x18_makarovsd","1rnd_smoke_m203","flareyellow_m203","flarered_m203","flarewhite_gp25","flaregreen_gp25","flarered_gp25","flareyellow_gp25","flarewhite_gp25");
var miscitems_array = new Array("itemtoolbox","itemetool","itemflashlightred","itemhatchet","itemknife","itemmatchbox","itemflashlight","itemcompass","itemgps","itemmap","itemradio","itemwatch","binocular","binocular_vector","nvgoggles","mut_heart","apsi");

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
		case "BAF_AssaultPack_DZN":
			var num_backpack_slots = 22;
			backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>';
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
		case "BAF_AssaultPack_DZN":
			var num_backpack_slots = 22;
			break;
		case "DZ_Backpack_EP1":
			var num_backpack_slots = 24;
			break;
	}
	return num_backpack_slots;
}
function getMapName(world_id) {
	switch(world_id) {
		case '1':
			return 'Chernarus';
			break;
		case '2':
			return 'Lingor';
			break;
		case '3':
			return 'Utes';
			break;
		case '4':
			return 'Takistan';
			break;
		case '5':
			return 'Panthera';
			break;
		case '6':
			return 'Fallujah';
			break;
		case '7':
			return 'Zargabad';
			break;
		case '8':
			return 'Namalsk';
			break;
		case '9':
			return 'Celle';
			break;
		case '10':
			return 'Taviana';
			break;
		default:
			return 'Unknown';
			break;
	}
}
	
function fetch_data(postdata) {
	$.ajax({
		type: "POST",
		url: "get_player_data.php",
		data: postdata,
		success: function(response) {
			//$("#player_search_results").html('<h2>Search Results</h2>'+ response);
			//setTimeout(fetch_data(response), 400);
			//var today_ms = Date.parse(Date());
			$("#player_search_results").html('<h2>Search Results</h2>');
			var result_rows_array = response.split('<~~~>');
			if (response.length < 4) {
				var num_results = 0;
			} else {
				var num_results = result_rows_array.length;
			}
			$("#player_search_results").append('<h3>Found '+ num_results +' results</h3><br />');
			var result_table = '<table id="table_playerdata"><tr id="row_fieldname"><th>Name</th><th>PlayerID</th><th>Dead?</th><th>Zombie Kills</th><th>Murders</th><th>Bandit Kills</th><th>Time Alive</th><th>Last Update</th><th>First Seen</th><th>Position</th><th>Map</th></tr>';
			var _count = 0;
			$.each(result_rows_array, function() {
				_count += 1;
				var row_array = this.split(',~,');
				//var birthdate = row_array[6].substring(0,10);
				//var birth_ms = Date.parse(birthdate);	// Gets time in ms player has been alive
				//var days_alive = Math.round((today_ms - birth_ms) / 1000 / 60 / 60 / 24); // Calculates how many days player has been alive
				//var days_alive = row_array[11];
				var hours_alive = row_array[11];
				if (hours_alive > 24) {
					var days_alive = roundNumber(hours_alive / 24, 0);
					var hours_remainder = hours_alive - (days_alive * 24);
					if (hours_remainder < 1) {
						var time_alive = days_alive.toString() + "days";
					} else {
						var time_alive = days_alive.toString() + "days " + hours_remainder.toString() + "hrs";
					}
				} else {
					var time_alive = hours_alive + " hrs";
				}
				if (row_array[8] < 3) {
					var pos_display = 'Unknown';
				} else {
					var pos = row_array[8].replace(/[\[\]]+/g, '').split(',');
					var pos_azimuth = pos[0];
					var pos_x = roundNumber(pos[1],0);
					var pos_y = roundNumber(pos[2],0);
					var pos_z = roundNumber(pos[3],0);
					var pos_display = pos_x+','+pos_y+','+pos_z;
				}
				var is_dead = 'No';
				if (row_array[9] == 1) {
					is_dead = 'Yes';
				}
				var first_seen = row_array[6].substring(0,10);
				_mapname = getMapName(row_array[10]);
				result_table += '<tr class="row_playerdata">';
				result_table += '<td><a href="" onClick=\'fetch_inventory('+ row_array[0] +','+ row_array[1] +',"'+ row_array[2] +'",'+ row_array[3] +','+ row_array[4] +','+ row_array[5] +',"'+ time_alive +'","'+ row_array[7] +'","'+ pos_display +'","'+ first_seen +'");return false;\' id="view_gear" alt="Select Player">'+row_array[2]+'</a></td>';	// Player Name row_array[2]
				result_table += '<td>'+ row_array[1] +'</td>';	// Player ID
				result_table += '<td>'+ is_dead +'</td>';	// Dead?
				result_table += '<td>'+ row_array[3] +'</td>'; // Zombie kills
				result_table += '<td>'+ row_array[4] +'</td>';	// Murders
				result_table += '<td>'+ row_array[5] +'</td>';	// Bandit kills
				result_table += '<td>'+ time_alive +'</td>';	// Time alive
				result_table += '<td>'+ row_array[7] +'</td>';	// Last update
				result_table += '<td>'+ first_seen +'</td>';	// Date First Seen
				/*result_table += '<td><a href="" onClick=\'fetch_inventory('+ row_array[0] +','+ row_array[1] +',"'+ row_array[2] +'",'+ row_array[3] +','+ row_array[4] +','+ row_array[5] +',"'+ time_alive +'","'+ row_array[7] +'","'+ pos_display +'","'+ first_seen +'");return false;\' id="view_gear" alt="View Players Gear">View</a></td>';*/
				result_table += '<td>'+ pos_display +'</td>';
				result_table += '<td>'+ _mapname +'</td>';
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

function fetch_inventory(id,uid,name,kills,hkills,bkills,talive,lupdate,pos,first_seen) {
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
			// using item type arrays
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
			//var _exist = $("#backpack_string_guns").html();
			/*if (_exist > 0) {
				for(i=0; i<backpack_type1_names.length; i++) {
					$("#backpack_string_guns").append(',"'+ backpack_type1_names[i] +'"');
					$("#current_backpack_inventory").append(backpack_type1_names[i] +'<br />');
				}
			} else {*/
				$("#current_backpack_inventory").html('');
				for(i=0; i<backpack_type1_names.length; i++) {
					if (i==0) {
						$("#backpack_string_guns").append('"'+ backpack_type1_names[i] +'"');
					} else {
						$("#backpack_string_guns").append(',"'+ backpack_type1_names[i] +'"');
					}
					$("#current_backpack_inventory").append(backpack_type1_names[i] +'<br />');
				}
			//}
			/*var _exist = $("#backpack_string_guns_qty").html();
			if (_exist > 0) {
				for(i=0; i<backpack_type1_nums.length; i++) {
					$("#backpack_string_guns_qty").append(','+ backpack_type1_nums[i]);
				}
			} else {*/
				for(i=0; i<backpack_type1_nums.length; i++) {
					if (i == 0) {
						$("#backpack_string_guns_qty").append(backpack_type1_nums[i]);
					} else {
						$("#backpack_string_guns_qty").append(','+ backpack_type1_nums[i]);
					}
				}
			//}
			// Type 2 items in backpack
			/*var _exist = $("#backpack_string_items").html();
			if (_exist > 0) {
				for(i=0; i<backpack_type2_names.length; i++) {
					$("#backpack_string_items").append(',"'+ backpack_type2_names[i] +'"');
					$("#current_backpack_inventory").append(backpack_type2_names[i] +'<br />');
				}
			} else {*/
				//$("#current_backpack_inventory").html('');
				for(i=0; i<backpack_type2_names.length; i++) {
					if (i == 0) {
						$("#backpack_string_items").append('"'+ backpack_type2_names[i] +'"');
					} else {
						$("#backpack_string_items").append(',"'+ backpack_type2_names[i] +'"');
					}
					$("#current_backpack_inventory").append(backpack_type2_names[i] +'<br />');
				}
			//}
			/*var _exist = $("#backpack_string_items_qty").html();
			if (_exist > 0) {
				for(i=0; i<backpack_type2_nums.length; i++) {
					$("#backpack_string_items_qty").append(','+ backpack_type2_nums[i]);
				}
			} else {*/
				for(i=0; i<backpack_type2_nums.length; i++) {
					if (i == 0) {
						$("#backpack_string_items_qty").append(backpack_type2_nums[i]);
					} else {
						$("#backpack_string_items_qty").append(','+ backpack_type2_nums[i]);
					}
				}
			//}
			// Populate backpack name field with name of backpack
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
				if ($.inArray(inventory_array[i].toLowerCase(), mainguns_array) > -1) {
					//$("#player_search_results").append('<br />Found main gun ' + inventory_array[i] + '<br />');
					$("#main_gun_string").html('"' +inventory_array[i] +'"');
					$("#current_maingun").html(inventory_array[i]);
				} else if ($.inArray(inventory_array[i].toLowerCase(), sidearms_array) > -1) {
					$("#sidearm_string").html('"'+ inventory_array[i] +'"');
					$("#current_sidearm").html(inventory_array[i]);
				} else if ($.inArray(inventory_array[i].toLowerCase(), type1_items) > -1) {
					if ($("#type1_string").html().length > 0) {
						$("#type1_string").append(',"' + inventory_array[i] + '"');
					} else {
						$("#type1_string").html('"' + inventory_array[i] + '"');
					}
				} else if ($.inArray(inventory_array[i].toLowerCase(), mainitems_array) > -1) {
					if ($("#type2_string").html().length > 0) {
						$("#type2_string").append(',"' + inventory_array[i] + '"');
					} else {
						$("#type2_string").html('"' + inventory_array[i] + '"');
					}
					$("#current_main_items").append(inventory_array[i] + '<br />');
				} else if ($.inArray(inventory_array[i].toLowerCase(), sideitems_array) > -1) {
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
	$("#table_talive").html(talive);
	$("#table_lupdate").html(lupdate);
	$("#table_pos").html(pos);
	$("#table_first_seen").html(first_seen);
	$("#current_id").html(id);
	showPlayerSelected();
	hideGearSelection();
	return false;
}

function showPlayerSelected() {
	var cssRules = {
			'visibility' : 'visible'
	}
	$("#current_player").css(cssRules);
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
		padding: '0px 0px 20px 0px'
	}, 800, function() {
		//$("#hide_gear_selection").hide();
	});
	$("#hide_gear_selection").css('visibility', 'hidden');
	$("#setgear_btn").animate({
		opacity: 1,
		padding: '20px 0px 0px 0px',
		display: 'inline-block'
	}, 800, function() { });
	$("#setgear_btn").css('visibility', 'visible');
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
		//$("#gear_selection").css('visibility', 'visible');
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
			//var today_ms = Date.parse(Date());
			$("#player_search_results").html('<h2>Top Players</h2>');
			var result_rows_array = response.split('<~~~>');
			if (response.length < 10) {
				var num_results = 0;
			} else {
				var num_results = result_rows_array.length;
			}
			//$("#player_search_results").append('<h3>Found '+ num_results +' results</h3><br />');
			var result_table = '<table id="table_playerdata"><tr id="row_fieldname"><th>Name</th><th>PlayerID</th><th>Dead?</th><th>Zombie Kills</th><th>Murders</th><th>Bandit Kills</th><th>Time Alive</th><th>Last Update</th><th>First Seen</th><th>Position</th><th>Map</th></tr>';
			var _count = 0;
			$.each(result_rows_array, function() {
				_count += 1;
				var row_array = this.split(',~,');
				//var birthdate = row_array[6].substring(0,10);
				//var birth_ms = Date.parse(birthdate);	// Gets time in ms player has been alive
				//var days_alive = Math.round((today_ms - birth_ms) / 1000 / 60 / 60 / 24); // Calculates how many days player has been alive
				var hours_alive = row_array[11];
				if (hours_alive > 24) {
					var days_alive = roundNumber(hours_alive / 24, 0);
					var hours_remainder = hours_alive - (days_alive * 24);
					if (hours_remainder < 1) {
						var time_alive = days_alive.toString() + "days";
					} else {
						var time_alive = days_alive.toString() + "days " + hours_remainder.toString() + "hrs";
					}
				} else {
					var time_alive = hours_alive + " hrs";
				}
				//var days_alive = row_array[11];
				var pos = row_array[8].replace(/[\[\]]+/g, '').split(',');
				var pos_azimuth = pos[0];
				var pos_x = roundNumber(pos[1],0);
				var pos_y = roundNumber(pos[2],0);
				var pos_z = roundNumber(pos[3],0);
				var pos_display = pos_x+','+pos_y+','+pos_z;
				var is_dead = 'No';
				if (row_array[9] == 1) {
					is_dead = 'Yes';
				}
				var first_seen = row_array[6].substring(0,10);
				_mapname = getMapName(row_array[10]);
				result_table += '<tr class="row_playerdata">';
				result_table += '<td><a href="" onClick=\'fetch_inventory('+ row_array[0] +','+ row_array[1] +',"'+ row_array[2] +'",'+ row_array[3] +','+ row_array[4] +','+ row_array[5] +',"'+ time_alive +'","'+ row_array[7] +'","'+ pos_display +'","'+ first_seen +'");return false;\' id="view_gear" alt="Select Player">'+row_array[2]+'</a></td>';	// Player Name
				result_table += '<td>'+ row_array[1] +'</td>';	// Player ID
				result_table += '<td>'+ is_dead +'</td>';	// Dead?
				result_table += '<td>'+ row_array[3] +'</td>'; // Zombie kills
				result_table += '<td>'+ row_array[4] +'</td>';	// Murders
				result_table += '<td>'+ row_array[5] +'</td>';	// Bandit kills
				result_table += '<td>'+ time_alive +'</td>';	// Time alive
				result_table += '<td>'+ row_array[7] +'</td>';	// Last update
				result_table += '<td>'+ first_seen +'</td>';	// Date First Seen
				/*result_table += '<td><a href="" onClick=\'fetch_inventory('+ row_array[0] +','+ row_array[1] +',"'+ row_array[2] +'",'+ row_array[3] +','+ row_array[4] +','+ row_array[5] +',"'+ time_alive +'","'+ row_array[7] +'","'+ pos_display +'","'+ first_seen +'");return false;\' id="view_gear" alt="View Players Gear">View</a></td>';*/
				result_table += '<td>'+ pos_display +'</td>';
				result_table += '<td>'+ _mapname +'</td>';
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

function save_vip_loadout() {
	var loadout_name = $("#vip_loadout_name").val();
	var loadout_items = $("#inventory_string").html().replace(/<[^>]*>/g, '');
	var loadout_backpack = $("#backpack_string").html().replace(/<[^>]*>/g, '');
	var loadout_skin = $("#current_skin_text").html().replace(/<[^>]*>/g, '');
	var postdata = 'name='+loadout_name+'&items='+loadout_items+'&backpack='+loadout_backpack+'&skin='+loadout_skin;
	if (loadout_name.length < 3) {
		alert('Loadout name too short. Min 3 chars');
		return false;
	} else if (loadout_name.length > 64) {
		alert('Loadout name too long. Max 64 chars');
		return false;
	} else {
		$.ajax({
			type: "POST",
			url: "save_vip_loadout.php",
			data: postdata,
			success: function(response) {
				alert(response);
			}
		});
	}
	
	return false;
}

