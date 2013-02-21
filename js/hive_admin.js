/*
 * [AWG] DayZ HIVE Admin
 * Author: Anzu
 * Requires jQuery
*/

$(document).ready(function() {
	$("#add_button_maingun").click(function() {
			var maingun = $("#maingun_item").val();
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
			var sidearm = $("#sidearm_item").val();
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
			var mainammo = $("#mainammo_item").val();
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
				$("#current_main_items").append(mainammo + '<br />');
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
			var sideammo = $("#sideammo_item").val();
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
			var item = $("#items_item").val();
			if ($("#to_backpack").is(":checked")) {
				$("#current_backpack_inventory").append(item + '<br />');
				
				var type1_found = $.inArray(item.toLowerCase(), type1_items);
				if (type1_found > -1) {
					var type1_string_existing = $("#backpack_string_guns").html();
					if (type1_string_existing.length > 0) {
						var type1_string_existing = type1_string_existing.replace(/"/g, '');
						var type1_string_existing_array = type1_string_existing.split(',');
						$("#backpack_string_guns").append(',"' + item + '"');
					} else {
						$("#backpack_string_guns").html('"' + item + '"');
					}
					// Add '1' to the guns qty in backpack
					var _exist = $("#backpack_string_guns_qty").html();
					if (_exist.length > 0) {
						$("#backpack_string_guns_qty").append(',1');
					} else {
						$("#backpack_string_guns_qty").html('1');
					}
				} else {
					var type2_string_existing = $("#backpack_string_items").html();
					if (type2_string_existing.length > 0) {
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
				}
				
			} else {
				var type1_found = $.inArray(item.toLowerCase(), type1_items);
				if (type1_found > -1) {
					var type1_string_existing = $("#type1_string").html();
					if (type1_string_existing.length > 0) {
						var type1_string_existing = type1_string_existing.replace(/"/g, '');
						var type1_string_existing_array = type1_string_existing.split(',');
						var found = $.inArray(item.toLowerCase(), type1_string_existing_array);
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
				var sideitem_found = $.inArray(item.toLowerCase(), sideitems_array);
				if (sideitem_found > -1) {
					$("#current_side_items").append(item + '<br />');
				} else {
					$("#current_main_inventory").append(item + '<br />');
				}
			}
			return false;
	});
	$("#add_button_backpack").click(function() {
			var backpack = $("#backpack_item").val();
			$("#current_backpack").html(backpack);
			$("#backpack_string_guns").html('');
			$("#backpack_string_guns_qty").html('');
			$("#backpack_string_items").html('');
			$("#backpack_string_items_qty").html('');

			var backpack_table = getBackpack(backpack);
			var num_backpack_slots = getBackpackNumSlots(backpack);
			
			$("#backpack_slots").html(backpack_table);
			$("#current_backpack_inventory").html('');
			$("#backpack_slots_text").html('('+ num_backpack_slots + ' slots)');
			$("#backpack_string_name").html('"' + backpack + '"');
			return false;
	});
	$("#add_button_skin").click(function() {
			var skin = $("#skin_item").val();
			if ($("#to_backpack").is(":checked")) {
				switch(skin) {
					case "Rocket_DZ":
						alert('You cannot add this skin into your backpack');
						return false;
					case "Survivor3_DZ":
						alert('You cannot add this skin into your backpack');
						return false;
					default:
						skin = 'Skin_'+skin;
						break;
				}					
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

				var skin_image = getSkin(skin);
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
	$("#save_custom_loadout").click(function() {
		var _custinv = $("#inventory_string").html().replace(/<[^>]*>/g, '');
		var _custbck = $("#backpack_string").html().replace(/<[^>]*>/g, '');
		var _custloadout =  _custinv + '-_-' + _custbck;
		$.cookie("AWG_DayZ_Loadout", _custloadout, { expires: 30 });
		alert('Custom loadout saved as a cookie on your computer!');
		alert( $.cookie("AWG_DayZ_Loadout") );
	});
	$("#load_custom_loadout").click(function() {
		var _custloadout = $.cookie("AWG_DayZ_Loadout");
		var _custloadoutarray = _custloadout.split('-_-');
		var _custinv = _custloadoutarray[0];
		var _custbck = _custloadoutarray[1];
		if (confirm('Are you sure you want to update this player\'s loadout to the HIVE?')) {
			var set_inventory_string = _custinv;
			var id = $("#current_id").html();
			var poststring = 'items='+ set_inventory_string +'&id='+ id;
			set_inventory(poststring);
			var set_backpack_string = _custbck;
			var id = $("#current_id").html();
			var poststring2 = 'backpack='+ set_backpack_string +'&id='+ id;
			set_backpack(poststring2);
			
		}
	});
});
