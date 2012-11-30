/*
 * [AWG] DayZ HIVE Admin
 * Author: Anzu
 * Requires jQuery
*/

var mainguns_array = new Array("remington870_lamp","winchester1866","aa12_pmc","baf_as50_scoped","baf_as50_tws","baf_l110a1_aim","baf_l7a2_gpmg","baf_l85a2_ris_acog","baf_l85a2_ris_cws","baf_l85a2_ris_holo","baf_l85a2_ris_susat","baf_l85a2_ugl_acog","baf_l85a2_ugl_holo","baf_l85a2_ugl_susat","baf_l86a2_acog","baf_lrr_scoped","baf_lrr_scoped_w","dmr","fn_fal","fn_fal_anpvs4","g36_c_sd_camo","g36_c_sd_eotech","g36a","g36a_camo","g36c","g36c_camo","g36k","g36k_camo","m1014","m110_nvg_ep1","m110_tws_ep1","m14_ep1","m16a2","m16a2gl","m16a4","m16a4_acg","m16a4_acg_gl","m16a4_gl","m24","m24_des_ep1","m240","m240_scoped_ep1","m249","m249_ep1","m249_m145_ep1","m249_tws_ep1","m32_ep1","m40a3","m4a1","m4a1_aim","m4a1_aim_camo","m4a1_aim_sd_camo","m4a1_hws_gl","m4a1_hws_gl_camo","m4a1_hws_gl_sd_camo","m4a1_rco_gl","m4a3_cco_ep1","m4a3_rco_gl_ep1","m4spr","m60a4_ep1","m79_ep1","m8_carbine","m8_carbine_pmc","m8_carbinegl","m8_compact","m8_compact_pmc","m8_holo_sd","m8_saw","m8_sharpshooter","m8_tws","m8_tws_sd","mg36","mg36_camo","mk_48_dz","m107_dz","mk13_ep1","mp5a5","mp5sd","pmc_as50_scoped","pmc_as50_tws","scar_h_cqc_cco","scar_h_cqc_cco_sd","scar_h_lng_sniper","scar_h_lng_sniper_sd","scar_h_std_eglm_spect","scar_h_std_tws_sd","scar_l_cqc","scar_l_cqc_cco_sd","scar_l_cqc_eglm_holo","scar_l_cqc_holo","scar_l_std_eglm_rco","scar_l_std_eglm_tws","scar_l_std_holo","scar_l_std_mk4cqt","ak_107_gl_kobra","ak_107_gl_pso","ak_107_kobra","ak_107_pso","ak_47_m","ak_47_s","ak_74","ak_74_gl","ak_74_gl_kobra","aks_74","aks_74_goshawk","aks_74_kobra","aks_74_nspu","aks_74_pso","aks_74_u","aks_74_un_kobra","aks_gold","bizon","bizon_silenced","huntingrifle","leeenfield","pecheneg","ksvk","pk","rpk_74","sa58p_ep1","sa58v_cco_ep1","sa58v_ep1","sa58v_rco_ep1","saiga12k","svd","svd_camo","svd_des_ep1","svd_nspu_ep1","vss_vintorez","m136","nsw_er7s");
var sidearms_array = new Array("colt1911","glock17_ep1","m9","m9sd","makarov","makarovsd","revolver_ep1","revolver_gold_ep1","sa61_ep1","uzi_ep1","uzi_sd_ep1");
var mainitems_array = new Array("30rnd_762x39_ak47","30rnd_545x39_ak","64rnd_9x19_sd_bizon","8rnd_b_beneli_74slug","30rnd_556x45_stanag","30rnd_556x45_stanagsd","30rnd_9x19_mp5","30rnd_9x19_mp5sd","100rnd_762x51_m240","200rnd_556x45_m249","5x_22_lr_17_hmr","20rnd_762x51_dmr","5rnd_762x51_m24","10rnd_762x54_svd","10x_303","10rnd_127x99_m107","20rnd_762x51_fnfal","5rnd_127x99_as50","m136","100rnd_762x54_pk","5rnd_127x108_ksvk","foodsteakraw","foodsteakcooked","itemepinephrine","bloodbag","foodcanbakedbeans","foodcansardines","foodcanpasta","itemsodacoke","itemsodapepsi","itemwaterbottle","handroadflare","handchemgreen","handchemblue","handchemred","itemsandbag","itemtanktrap","itemwire","itempainkiller","itemmorphine","itemantibiotic","itemheatpack","partwoodpile","partwheel","partfueltank","partglass","partengine","partgeneric","partvrotor","itemjerrycan","itemtent","trapbear","pipebomb","nsw_er7mm");
var sideitems_array = new Array("itembandage","1rnd_he_m203","7rnd_45acp_1911","15rnd_9x19_m9","15rnd_9x19_m9sd","8rnd_9x18_makarov","17rnd_9x19_glock17","6rnd_45acp","30rnd_9x19_uzi","revolver_gold_ep1","20rnd_b_765x17_ball","30rnd_9x19_uzi_sd");
var miscitems_array = new Array("itemtoolbox","itemetool","itemflashlightred","itemhatchet","itemknife","itemmatchbox","itemflashlight","itemcompass","itemgps","itemmap","itemradio","itemwatch","binocular","binocular_vector","nvgoggles");

// Create type1 and type2 items arrays (used for placement of item classname in gear string
var type1_items = mainguns_array.concat(sidearms_array,miscitems_array);
var type2_items = mainitems_array.concat(sideitems_array);


$(document).ready(function() {
	//var type1=new Array("remington870_lamp","winchester1866","aa12_pmc","baf_as50_scoped","baf_as50_tws","baf_l110a1_aim","baf_l7a2_gpmg","baf_l85a2_ris_acog","baf_l85a2_ris_cws","baf_l85a2_ris_holo","baf_l85a2_ris_susat","baf_l85a2_ugl_acog","baf_l85a2_ugl_holo","baf_l85a2_ugl_susat","baf_l86a2_acog","baf_lrr_scoped","baf_lrr_scoped_w","dmr","fn_fal","fn_fal_anpvs4","g36_c_sd_camo","g36_c_sd_eotech","g36a","g36a_camo","g36c","g36c_camo","g36k","g36k_camo","m1014","m110_nvg_ep1","m110_tws_ep1","m14_ep1","m16a2","m16a2gl","m16a4","m16a4_acg","m16a4_acg_gl","m16a4_gl","m24","m24_des_ep1","m240","m240_scoped_ep1","m249","m249_ep1","m249_m145_ep1","m249_tws_ep1","m32_ep1","m40a3","m4a1","m4a1_aim","m4a1_aim_camo","m4a1_aim_sd_camo","m4a1_hws_gl","m4a1_hws_gl_camo","m4a1_hws_gl_sd_camo","m4a1_rco_gl","m4a3_cco_ep1","m4a3_rco_gl_ep1","m4spr","m60a4_ep1","m79_ep1","m8_carbine","m8_carbine_pmc","m8_carbinegl","m8_compact","m8_compact_pmc","m8_holo_sd","m8_saw","m8_sharpshooter","m8_tws","m8_tws_sd","mg36","mg36_camo","mk_48_dz","m107_dz","mk13_ep1","mp5a5","mp5sd","pmc_as50_scoped","pmc_as50_tws","scar_h_cqc_cco","scar_h_cqc_cco_sd","scar_h_lng_sniper","scar_h_lng_sniper_sd","scar_h_std_eglm_spect","scar_h_std_tws_sd","scar_l_cqc","scar_l_cqc_cco_sd","scar_l_cqc_eglm_holo","scar_l_cqc_holo","scar_l_std_eglm_rco","scar_l_std_eglm_tws","scar_l_std_holo","scar_l_std_mk4cqt","ak_107_gl_kobra","ak_107_gl_pso","ak_107_kobra","ak_107_pso","ak_47_m","ak_47_s","ak_74","ak_74_gl","ak_74_gl_kobra","aks_74","aks_74_goshawk","aks_74_kobra","aks_74_nspu","aks_74_pso","aks_74_u","aks_74_un_kobra","aks_gold","bizon","bizon_silenced","huntingrifle","leeenfield","pecheneg","ksvk","pk","rpk_74","sa58p_ep1","sa58v_cco_ep1","sa58v_ep1","sa58v_rco_ep1","saiga12k","svd","svd_camo","svd_des_ep1","svd_nspu_ep1","vss_vintorez","m136","colt1911","glock17_ep1","m9","m9sd","makarov","makarovsd","revolver_ep1","revolver_gold_ep1","sa61_ep1","uzi_ep1","uzi_sd_ep1","binocular","binocular_vector","nvgoggles","itemtoolbox","itemetool","itemflashlightred","itemhatchet","itemknife","itemmatchbox","itemflashlight","itemcompass","itemgps","itemmap","itemradio","itemwatch");
	//var type2=new Array("itembandage","1rnd_he_m203","30rnd_762x39_ak47","30rnd_545x39_ak","64rnd_9x19_sd_bizon","8rnd_b_beneli_74slug","30rnd_556x45_stanag","30rnd_556x45_stanagsd","30rnd_9x19_mp5","30rnd_9x19_mp5sd","100rnd_762x51_m240","200rnd_556x45_m249","5x_22_lr_17_hmr","20rnd_762x51_dmr","5rnd_762x51_m24","10rnd_762x54_svd","10x_303","10rnd_127x99_m107","20rnd_762x51_fnfal","5rnd_127x99_as50","m136","100rnd_762x54_pk","5rnd_127x108_ksvk","foodsteakraw","foodsteakcooked","itemepinephrine","bloodbag","foodcanbakedbeans","foodcansardines","foodcanpasta","itemsodacoke","itemsodapepsi","itemwaterbottle","handroadflare","handchemgreen","handchemblue","handchemred","itemsandbag","itemtanktrap","itemwire","itempainkiller","itemmorphine","itemantibiotic","itemheatpack","partwoodpile","partwheel","partfueltank","partglass","partengine","partgeneric","partvrotor","itemjerrycan","itemtent","trapbear");
	$("#add_button_maingun").click(function() {
			var maingun = $("#maingun_item").val().toLowerCase();
			if ($("#to_backpack").is(":checked")) {
				$("#current_backpack_inventory").append(maingun + '<br />');
				var backpack_string_guns_existing = $("#backpack_string_guns").html();
				if (backpack_string_guns_existing.length > 2) {
					$("#backpack_string_guns").append(',"' + maingun + '"');
				} else {
					$("#backpack_string_guns").html('"' + maingun + '"');
				}
				// Add '1' to the guns qty in backpack
				var _exist = $("#backpack_string_guns_qty").html();
				if (_exist.length > 0) {
					$("#backpack_string_guns_qty").append(',1');
				} else {
					$("#backpack_string_guns_qty").html('1');
				}
			} else {
				$("#current_maingun").html(maingun);
				var type1_string_existing = $("#type1_string").html();
				$("#main_gun_string").html('"' + maingun + '"');
				/*
				if (type1_string_existing.length > 0) {
					var type1_string_existing = type1_string_existing.replace(/"/g, '');
					var type1_string_existing_array = type1_string_existing.split(',');
					var found = $.inArray(maingun, type1_string_existing_array);
					if (found > -1) {
						return false;
					} else {
						$("#type1_string").append(',"' + maingun + '"');
					}
				} else {
					$("#type1_string").html('"' + maingun + '"');
				}
				*/
			}
			return false;
	});
	$("#add_button_sidearm").click(function() {
			var sidearm = $("#sidearm_item").val().toLowerCase();
			if ($("#to_backpack").is(":checked")) {
				$("#current_backpack_inventory").append(sidearm + '<br />');
				var backpack_string_guns_existing = $("#backpack_string_guns").html();
				if (backpack_string_guns_existing.length > 2) {
					$("#backpack_string_guns").append(',"' + sidearm + '"');
				} else {
					$("#backpack_string_guns").html('"' + sidearm + '"');
				}
				// Add '1' to the guns qty in backpack
				var _exist = $("#backpack_string_guns_qty").html();
				if (_exist.length > 0) {
					$("#backpack_string_guns_qty").append(',1');
				} else {
					$("#backpack_string_guns_qty").html('1');
				}
			} else {
				$("#current_sidearm").html(sidearm);
				var type1_string_existing = $("#type1_string").html();
				$("#sidearm_string").html('"' + sidearm + '"');
				/*
				if (type1_string_existing.length > 0) {
					var type1_string_existing = type1_string_existing.replace(/"/g, '');
					var type1_string_existing_array = type1_string_existing.split(',');
					var found = $.inArray(sidearm, type1_string_existing_array);
					if (found > -1) {
						return false;
					} else {
						$("#type1_string").append(',"' + sidearm + '"');
					}
				} else {
					$("#type1_string").html('"' + sidearm + '"');
				}
				*/
			}
			return false;
	});
	$("#add_button_mainammo").click(function() {
			var mainammo = $("#mainammo_item").val().toLowerCase();
			if ($("#to_backpack").is(":checked")) {
				$("#current_backpack_inventory").append(mainammo + '<br />');
				var backpack_string_items_existing = $("#backpack_string_items").html();
				if (backpack_string_items_existing.length > 2) {
					$("#backpack_string_items").append(',"' + mainammo + '"');
				} else {
					$("#backpack_string_items").html('"' + mainammo + '"');
				}
				// Add '1' to the items qty in backpack
				var _exist = $("#backpack_string_items_qty").html();
				if (_exist.length > 0) {
					$("#backpack_string_items_qty").append(',1');
				} else {
					$("#backpack_string_items_qty").html('1');
				}
			} else {
				$("#current_main_inventory").append(mainammo + '<br />');
				var type2_string_existing = $("#type2_string").html();
				if (type2_string_existing.length > 0) {
					$("#type2_string").append(',"' + mainammo + '"');
				} else {
					$("#type2_string").html('"' + mainammo + '"');
				}
			}
			return false;
	});
	$("#add_button_sideammo").click(function() {
			var sideammo = $("#sideammo_item").val().toLowerCase();
			if ($("#to_backpack").is(":checked")) {
				$("#current_backpack_inventory").append(sideammo + '<br />');
				var backpack_string_items_existing = $("#backpack_string_items").html();
				if (backpack_string_items_existing.length > 2) {
					$("#backpack_string_items").append(',"' + sideammo + '"');
				} else {
					$("#backpack_string_items").html('"' + sideammo + '"');
				}
				// Add '1' to the items qty in backpack
				var _exist = $("#backpack_string_items_qty").html();
				if (_exist.length > 0) {
					$("#backpack_string_items_qty").append(',1');
				} else {
					$("#backpack_string_items_qty").html('1');
				}
			} else {
				$("#current_side_inventory").append(sideammo + '<br />');
				var type2_string_existing = $("#type2_string").html();
				if (type2_string_existing.length > 0) {
					$("#type2_string").append(',"' + sideammo + '"');
				} else {
					$("#type2_string").html('"' + sideammo + '"');
				}
			}
			return false;
	});
	$("#add_button_item").click(function() {
			var item = $("#items_item").val().toLowerCase();
			if ($("#to_backpack").is(":checked")) {
				$("#current_backpack_inventory").append(item + '<br />');
				var backpack_string_items_existing = $("#backpack_string_items").html();
				if (backpack_string_items_existing.length > 2) {
					$("#backpack_string_items").append(',"' + item + '"');
				} else {
					$("#backpack_string_items").html('"' + item + '"');
				}
				// Add '1' to the items qty in backpack
				var _exist = $("#backpack_string_items_qty").html();
				if (_exist.length > 0) {
					$("#backpack_string_items_qty").append(',1');
				} else {
					$("#backpack_string_items_qty").html('1');
				}
			} else {
				var type1_found = $.inArray(item, type1_items);
				if (type1_found > -1) {
					var type1_string_existing = $("#type1_string").html();
					if (type1_string_existing.length > 0) {
						var type1_string_existing = type1_string_existing.replace(/"/g, '');
						var type1_string_existing_array = type1_string_existing.split(',');
						var found = $.inArray(item, type1_string_existing_array);
						if (found > -1) {
							return false;
						} else {
							$("#type1_string").append(',"' + item + '"');
						}
					} else {
						$("#type1_string").html('"' + item + '"');
					}
				} else {
					var type2_string_existing = $("#type2_string").html();
					if (type2_string_existing.length > 0) {
						$("#type2_string").append(',"' + item + '"');
					} else {
						$("#type2_string").html('"' + item + '"');
					}
				}
				$("#current_main_inventory").append(item + '<br />');
			}
			return false;
	});
	$("#add_button_backpack").click(function() {
			var backpack = $("#backpack_item").val().toLowerCase();
			$("#current_backpack").html(backpack);
			$("#backpack_string_guns").html('');
			$("#backpack_string_guns_qty").html('');
			$("#backpack_string_items").html('');
			$("#backpack_string_items_qty").html('');
			backpack_table = '<table>';
			switch(backpack) {				
				case "cz_vestpouch_ep1":
					var num_backpack_slots = 6;
					backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>';
					break;
				case "dz_patrol_pack_ep1":
					var num_backpack_slots = 8;
					backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>';
					break;
				case "dz_assault_pack_ep1":
					var num_backpack_slots = 12;
					backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></table>';
					break;
				case "dz_civilbackpack_ep1":
					var num_backpack_slots = 16;
					backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>';
					break;
				case "dz_alice_pack_ep1":
					var num_backpack_slots = 20;
					backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></table>';
					break;
				case "dz_backpack_ep1":
					var num_backpack_slots = 24;
					backpack_table += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>';
					break;
			}
			$("#backpack_slots").html(backpack_table);
			$("#current_backpack_inventory").html('');
			$("#backpack_slots_text").html('('+ num_backpack_slots + ' slots)');
			$("#backpack_string_name").html('"' + backpack + '"');
			return false;
	});
	$("#add_button_skin").click(function() {
			var skin = $("#skin_item").val().toLowerCase();
			if ($("#to_backpack").is(":checked")) {
				skin = 'skin_'+skin;
				$("#current_backpack_inventory").append(skin + '<br />');
				var backpack_string_items_existing = $("#backpack_string_items").html();
				if (backpack_string_items_existing.length > 2) {
					$("#backpack_string_items").append(',"' + skin + '"');
				} else {
					$("#backpack_string_items").html('"' + skin + '"');
				}
				// Add '1' to the items qty in backpack
				var _exist = $("#backpack_string_items_qty").html();
				if (_exist.length > 0) {
					$("#backpack_string_items_qty").append(',1');
				} else {
					$("#backpack_string_items_qty").html('1');
				}
			} else {
				$("#current_skin_text").html(skin);
				switch(skin) {
					case "survivor1_dz":
						var skin_image = "survivor1_dz.png";
						break;
					case "survivor2_dz":
						var skin_image = "survivor2_dz.png";
						break;
					case "survivor3_dz":
						var skin_image = "survivor3_dz.png";
						break;
					case "survivorw2_dz":
						var skin_image = "survivorw2_dz.png";
						break;
					case "bandit1_dz":
						var skin_image = "bandit1_dz.png";
						break;
					case "camo1_dz":
						var skin_image = "camo1_dz.png";
						break;
					case "rocket_dz":
						var skin_image = "rocket_dz.png";
						break;
					case "sniper1_dz":
						var skin_image = "sniper1_dz.png";
						break;
					case "camowinter_dzn":
						var skin_image = "skin_camowinter_dzn.png";
						break;
					default:
						var skin_image = "survivor1_dz.png";
						break;
				}
				$("#current_skin").html('<img src="images/skins/'+ skin_image +'" alt="Player Skin" id="player_skin_img"/>');
			}
			return false;
	});
	$("#setpos_btn").click(function() {
		var _setpos = $("#player_setpos").val();
		var _id = $("#current_id").html();
		if ((_setpos.length > 4) && (_setpos.length < 30) && (_setpos.search(/^[0-9,]+$/) > -1)) {
			var postdata = 'pos='+ _setpos +'&id='+ _id;
			set_pos(postdata);
		} else {
			alert('Invalid coordinates specified for position');
		}
		return false;
	});
});
