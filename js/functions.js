/*
 * -=[AWG]=- DayZ HIVE Admin
 * Author: Anzu
 * Description: Functions for the HIVE Admin pages.
 * Requires jQuery.
*/


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
	$("#main_gun_string").html('');
	$("#sidearm_string").html('');
	$("#type1_string").html('');
	$("#type2_string").html('');
	$("#backpack_string_guns").html('');
	$("#backpack_string_guns_qty").html('');
	$("#backpack_string_items").html('');
	$("#backpack_string_items_qty").html('');
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
			var inventory = gear_array[0].toLowerCase().replace(/[\[\]"]+/g, '');
			var backpack = gear_array[1].toLowerCase();//.replace(/[\[\]"]+/g, '');
			var skin = gear_array[2].toLowerCase().replace(/[\[\]"]+/g, '');
			var inventory_array = inventory.split(',');
			var backpack_array = backpack.replace(/["]+/g, '').split(']],[[');
			var backpack_name_type1_array = backpack_array[0].split(',[[');
			var backpack_name = backpack_name_type1_array[0].replace (/[\["]+/g, '').toLowerCase();
			
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
			
			backpack_table = '<table>';
			switch(backpack_name) {
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
			$("#backpack_slots_text").html('('+ num_backpack_slots + ' slots)');
			$("#current_skin_text").html(skin +'<br />');
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

