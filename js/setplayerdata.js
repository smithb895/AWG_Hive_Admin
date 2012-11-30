/*
 * -=[AWG]=- DayZ HIVE Admin
 * Author: Anzu
 * Description: This script sets player
 * data in the HIVE via ajax/php.
 * Requires jQuery.
*/

set_inventory = function(postdata) {
	$.ajax({
		type: "POST",
		url: "set_inventory.php",
		data: postdata,
		success: function(response) {
			//$("#player_id").val(response);
			alert("Done");
		}
	});
}

set_backpack = function(postdata) {
	$.ajax({
		type: "POST",
		url: "set_backpack.php",
		data: postdata,
		success: function(response) {
			alert("Done");
		}
	});
}

set_skin = function(postdata) {
	$.ajax({
		type: "POST",
		url: "set_skin.php",
		data: postdata,
		success: function(response) {
			alert("Done");
		}
	});
}

reset_health = function(postdata) {
	$.ajax({
		type: "POST",
		url: "reset_health.php",
		data: postdata,
		success: function(response) {
			alert("Done");
		}
	});
}

reset_pos = function(postdata) {
	$.ajax({
		type: "POST",
		url: "set_pos.php",
		data: postdata,
		success: function(response) {
			alert("Done");
		}
	});
}

set_pos = function(postdata) {
	$.ajax({
		type: "POST",
		url: "set_pos.php",
		data: postdata,
		success: function(response) {
			alert("Done");
		}
	});
}

set_dead = function(postdata) {
	$.ajax({
		type: "POST",
		url: "set_dead.php",
		data: postdata,
		success: function(response) {
			alert("Done");
		}
	});
}

//$("#set_inventory_button").click(function() {
save_gear_clicked = function() {
	if (confirm('Are you sure you want to save this player\'s inventory to the HIVE?')) {
		var set_inventory_string = $("#inventory_string").html().replace(/<[^>]*>/g, '');
		var id = $("#current_id").html();
		//$("body").html(set_inventory_string);
		var poststring = 'items='+ set_inventory_string +'&id='+ id;
		set_inventory(poststring);
	} else {
		
	}
}
//});

save_backpack_clicked = function() {
	if (confirm('Are you sure you want to save this player\'s backpack to the HIVE?')) {
		var set_backpack_string = $("#backpack_string").html().replace(/<[^>]*>/g, '');
		var id = $("#current_id").html();
		var poststring = 'backpack='+ set_backpack_string +'&id='+ id;
		set_backpack(poststring);
	} else {
		
	}
}

save_skin_clicked = function() {
	if (confirm('Are you sure you want to save this player\'s skin to the HIVE?')) {
		var set_skin_string = $("#current_skin_text").html().replace(/<[^>]*>/g, '');
		var id = $("#current_id").html();
		var poststring = 'skin='+ set_skin_string +'&id='+ id;
		set_skin(poststring);
	} else {
		
	}
}

reset_health_clicked = function() {
	if (confirm('Are you sure you want to reset this player\'s health to full?')) {
		var id = $("#current_id").html();
		var poststring = 'id='+ id;
		reset_health(poststring);
	} else {
		
	}
}

reset_pos_clicked = function() {
	if (confirm('Are you sure you want to reset this player\'s position to a random one?')) {
		var id = $("#current_id").html();
		var poststring = 'id='+ id;
		reset_pos(poststring);
	} else {
		
	}
}

set_dead_clicked = function() {
	if (confirm('Are you sure you want to kill this player?')) {
		var id = $("#current_id").html();
		var poststring = 'id='+ id;
		set_dead(poststring);
	} else {
		
	}
}

show_map_clicked = function() {
	var id = $("#current_id").html();
	var _pos = $("#table_pos").html();
	var _pos_array = _pos.split(',');
}
	//var _xcoord = roundNumber(_pos_array
	//show(poststring);


