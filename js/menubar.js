$(function(){
	//$("ul.submenulist").hide();
	/*
	$("ul.submenulist li").hover(function(){
		$(this).data('hover',1); //store in element that mouse is hovering
	}, function(){
		$(this).data('hover',0); //clear value when mouse leaves
		
	});
	
	$("ul.submenulist li").mouseleave(function(){
		$(this).data('hover',0); //clear value when mouse leaves
		$(this).parent().slideUp('fast');
	});
	*/
	hiConfig = {
		sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)
        interval: 200, // number = milliseconds for onMouseOver polling interval
        timeout: 200, // number = milliseconds delay before onMouseOut
        over: function() {
			//$(this).parent().find("ul.submenulist").slideDown('fast').show();
			$(this).find("ul.submenulist").slideDown('fast').show();
        }, // function = onMouseOver callback (REQUIRED)
        out: function() {
			/*
			if ($(this).parent().data('hover') == 0) {
				$(this).parent().find("ul.submenulist").slideUp('fast');
			}*/
			if ((!$("#player_name").is(":focus")) && (!$("#player_id").is(":focus"))) {
				$(this).find("ul.submenulist").slideUp('fast');
			}
		} // function = onMouseOut callback (REQUIRED)
    }
    $('ul.menulist li').hoverIntent(hiConfig);
	
	
	/*
	$("ul.menulist li a").hover(function(){
		$(this).parent().find("ul.submenulist").slideDown('fast').show();
	}, function(){
		//$(this).parent().find("ul.submenulist").slideUp('fast');
	});*/
	$("ul.menulist li a").click(function(){
		$(this).parent().find("ul.submenulist").slideUp('fast');
	});
	
	/*
	$("li.submenuitem").hover(function(){
		$(this).hide();
		$("#setpos_menu").show();
	}, function(){
		$("#setpos_menu").hide();
		(this).show();
	});*/
	
});