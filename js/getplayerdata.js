/*
 * -=[AWG]=- DayZ HIVE Admin
 * Author: Anzu
 * Description: This script fetches
 * player data from the HIVE and 
 * displays it on the web page.
 * Requires jQuery.
*/

//var mainguns_array = new Array("remington870_lamp","winchester1866","aa12_pmc","baf_as50_scoped","baf_as50_tws","baf_l110a1_aim","baf_l7a2_gpmg","baf_l85a2_ris_acog","baf_l85a2_ris_cws","baf_l85a2_ris_holo","baf_l85a2_ris_susat","baf_l85a2_ugl_acog","baf_l85a2_ugl_holo","baf_l85a2_ugl_susat","baf_l86a2_acog","baf_lrr_scoped","baf_lrr_scoped_w","dmr","fn_fal","fn_fal_anpvs4","g36_c_sd_camo","g36_c_sd_eotech","g36a","g36a_camo","g36c","g36c_camo","g36k","g36k_camo","m1014","m110_nvg_ep1","m110_tws_ep1","m14_ep1","m16a2","m16a2gl","m16a4","m16a4_acg","m16a4_acg_gl","m16a4_gl","m24","m24_des_ep1","m240","m240_scoped_ep1","m249","m249_ep1","m249_m145_ep1","m249_tws_ep1","m32_ep1","m40a3","m4a1","m4a1_aim","m4a1_aim_camo","m4a1_aim_sd_camo","m4a1_hws_gl","m4a1_hws_gl_camo","m4a1_hws_gl_sd_camo","m4a1_rco_gl","m4a3_cco_ep1","m4a3_rco_gl_ep1","m4spr","m60a4_ep1","m79_ep1","m8_carbine","m8_carbine_pmc","m8_carbinegl","m8_compact","m8_compact_pmc","m8_holo_sd","m8_saw","m8_sharpshooter","m8_tws","m8_tws_sd","mg36","mg36_camo","mk_48_dz","m107_dz","mk13_ep1","mp5a5","mp5sd","pmc_as50_scoped","pmc_as50_tws","scar_h_cqc_cco","scar_h_cqc_cco_sd","scar_h_lng_sniper","scar_h_lng_sniper_sd","scar_h_std_eglm_spect","scar_h_std_tws_sd","scar_l_cqc","scar_l_cqc_cco_sd","scar_l_cqc_eglm_holo","scar_l_cqc_holo","scar_l_std_eglm_rco","scar_l_std_eglm_tws","scar_l_std_holo","scar_l_std_mk4cqt","ak_107_gl_kobra","ak_107_gl_pso","ak_107_kobra","ak_107_pso","ak_47_m","ak_47_s","ak_74","ak_74_gl","ak_74_gl_kobra","aks_74","aks_74_goshawk","aks_74_kobra","aks_74_nspu","aks_74_pso","aks_74_u","aks_74_un_kobra","aks_gold","bizon","bizon_silenced","huntingrifle","leeenfield","pecheneg","ksvk","pk","rpk_74","sa58p_ep1","sa58v_cco_ep1","sa58v_ep1","sa58v_rco_ep1","saiga12k","svd","svd_camo","svd_des_ep1","svd_nspu_ep1","vss_vintorez","m136");
//var sidearms_array = new Array("colt1911","glock17_ep1","m9","m9sd","makarov","makarovsd","revolver_ep1","revolver_gold_ep1","sa61_ep1","uzi_ep1","uzi_sd_ep1");
//var mainitems_array = new Array("30rnd_762x39_ak47","30rnd_545x39_ak","64rnd_9x19_sd_bizon","8rnd_b_beneli_74slug","30rnd_556x45_stanag","30rnd_556x45_stanagsd","30rnd_9x19_mp5","30rnd_9x19_mp5sd","100rnd_762x51_m240","200rnd_556x45_m249","5x_22_lr_17_hmr","20rnd_762x51_dmr","5rnd_762x51_m24","10rnd_762x54_svd","10x_303","10rnd_127x99_m107","20rnd_762x51_fnfal","5rnd_127x99_as50","m136","100rnd_762x54_pk","5rnd_127x108_ksvk","foodsteakraw","foodsteakcooked","itemepinephrine","bloodbag","foodcanbakedbeans","foodcansardines","foodcanpasta","itemsodacoke","itemsodapepsi","itemwaterbottle","handroadflare","handchemgreen","handchemblue","handchemred","itemsandbag","itemtanktrap","itemwire","itempainkiller","itemmorphine","itemantibiotic","itemheatpack","partwoodpile","partwheel","partfueltank","partglass","partengine","partgeneric","partvrotor","itemjerrycan","itemtent","trapbear");
//var sideitems_array = new Array("bandage","1rnd_he_m203");
//var miscitems_array = new Array("itemtoolbox","itemetool","itemflashlightred","itemhatchet","itemknife","itemmatchbox","itemflashlight","itemcompass","itemgps","itemmap","itemradio","itemwatch","binocular","binocular_vector","nvgoggles");

// Create type1 and type2 items arrays (used for placement of item classname in gear string
//var type1_items = mainguns_array.concat(sidearms_array,miscitems_array);
//var type2_items = mainitems_array.concat(sideitems_array);


$(document).ready(function() {
	//var cssRules = {
	//	'height' : 0,
	//	'opacity' : 0
	//}
	//$("#player_search_results").css(cssRules);
	//$("#player_search_results").show();
	$("#find_player_btn").click(function() {
		//$("#player_search_results").hide();
		//$("#gear_selection").hide();
		//$("#gear_strings").hide();
		//$("#gear_preview").hide();
		if ($("#player_id").val().length > 4) {
			var playerid = $("#player_id").val();
			var postdata = 'playerid='+ playerid;
		} else if ($("#player_name").val().length > 1) {
			var playername = $("#player_name").val();
			var postdata = 'playername='+ playername;
		} else {
			alert("Player name or ID too short or no name or ID specified");
			return false;
		}
		//_timeout = setTimeout(function(){},300);
		fetch_data(postdata);
		
		$("#player_search_results").animate({
			opacity: 1,
			height: 'auto'
		}, 600, function() {
			$("#player_search_results").fadeIn(600);
		});
		//$("#gear_selection").fadeOut(600);
		hideGearSelection();
		//$("#player_search_results").fadeIn(400);
		return false;
	});
	//$("#view_gear").click(function() {
	//	return false;
	//});
	$("#search_for_item").click(function() {
		var _item = $("#item_name").val();
		if (_item.length < 3) {
			alert('The item name you specified is too short');
			return false;
		} else if (/[^a-zA-Z_0-9]+/.test(_item)) {
			alert('Invalid character in item name');
			return false;
		} else {
			var postdata = 'searchitem='+_item;
			//alert('Valid!');
			fetch_data(postdata);
			return false;
		}
		//showSearchResults();
	});
	
	$("#setgear_btn").click(function() {
		$("#gear_selection").hide();
		var cssRules = {
			'display' : 'inline-block'
		}
		$("#gear_strings").css(cssRules);
		var cssRules = {
			'display' : 'inline-block',
			'height' : '0',
			'opacity' :'0'
		}
		$("#gear_selection").css(cssRules);
		//$("#gear_selection").fadeIn(600);
		showGearSelection();
		$("#setgear_btn").animate({
			opacity: 0,
			padding: '0px 0px 20px 0px'
		}, 800, function() {
			//$("#setgear_btn").hide();
		});
		$("#setgear_btn").css('visibility', 'hidden');
		$("#hide_gear_selection").animate({
			opacity: 1,
			padding: '20px 0px 0px 0px'
		}, 800, function() { });
		$("#hide_gear_selection").css('visibility', 'visible');
	});
	$("#hide_gear_selection").click(function() {
		hideGearSelection();
		return false;
	});
});
