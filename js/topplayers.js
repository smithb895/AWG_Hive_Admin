/*
 * -=[AWG]=- DayZ HIVE Admin
 * Author: Anzu
 * Description: This script fetches
 * top player data from the HIVE and 
 * displays it on the web page.
 * Requires jQuery.
*/


$(document).ready(function() {
	fetch_top_players("zombie_kills");
	//$("#player_search_results").animate({
	//	opacity: 1,
	//	height: 'auto'
	//}, 600, function() {
	//	$("#player_search_results").fadeIn(600);
	//});
	//$("#gear_selection").animate({
	//	opacity: 0,
	//	height: 0
	//}, 600, function() {
	//	$("#gear_selection").hide();
	//});
	//$("#player_search_results").fadeIn(400);
});
