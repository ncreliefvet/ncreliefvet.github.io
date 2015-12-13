jQuery(function() {
	/* Function for lavalamp navigation menu and dropdown */	
	jQuery("#menu").lavaLamp({
		fx: "backout",
		speed: 700
	});
	jQuery(" #menu ul ").css({display: "none"}); // Opera Fix
	jQuery(" #menu li").hover(function(){
	jQuery(this).find('ul:first').css({visibility: "visible",display: "none"}).slideDown(400);
	},function(){
	jQuery(this).find('ul:first').css({visibility: "hidden",display: "none"});
	});
			
});

