  jQuery(document).ready(function() {		
  jQuery('#buttonsend').click( function() {
	
		var name    = jQuery('#name').val();
		var subject = jQuery('#subject').val();
		var email   = jQuery('#email').val();
		var message = jQuery('#message').val();
		
		jQuery('.loading, .loading-side').fadeIn('fast');
		
		if (name != "" && subject != "" && email != "" && message != "")
			{

				$.ajax(
					{
						url: 'http://www.ncreliefvet.com/themes/BlackFocus/sendmail.php',
						type: 'POST',
						data: "name=" + name + "&subject=" + subject + "&email=" + email + "&message=" + message,
						success: function(result) 
						{
							jQuery('.loading, .loading-side').fadeOut('fast');
							if(result == "email_error") {
								jQuery('#email').css({"background":"#ffeeee","border-top":"1px solid #ffb6b6","border-left":"none","border-right":"1px solid #ffb6b6","border-bottom":"none"}).next('.require').text(' !');
							} else {
								jQuery('#name, #subject, #email, #message').val("");
								jQuery('<div class="success-contact"><img src="http://www.ncreliefvet.com/themes/BlackFocus/images/success.png" alt="" class="success-icon" />Your message has been sent successfully. Thank you! </div>').insertBefore('#contactFormArea');
								jQuery('.success-contact').fadeOut(5000, function(){ jQuery(this).remove(); });
							}
						}
					}
				);
				return false;
				
			} 
		else 
			{
				jQuery('.loading, .loading-side').fadeOut('fast');
				if( name == "") jQuery('#name').css({"background":"#ffeeee","border-top":"1px solid #ffb6b6","border-left":"none","border-right":"1px solid #ffb6b6","border-bottom":"none"});
				if(subject == "") jQuery('#subject').css({"background":"#ffeeee","border-top":"1px solid #ffb6b6","border-left":"none","border-right":"1px solid #ffb6b6","border-bottom":"none"});
				if(email == "" ) jQuery('#email').css({"background":"#ffeeee","border-top":"1px solid #ffb6b6","border-left":"none","border-right":"1px solid #ffb6b6","border-bottom":"none"});
				if(message == "") jQuery('#message').css({"background":"#ffeeee","border-top":"1px solid #ffb6b6","border-left":"none","border-right":"1px solid #ffb6b6","border-bottom":"none"});
				return false;
			}
	});
	
		jQuery('#name, #subject, #email,#message').focus(function(){
			jQuery(this).css({"background":"#f7f7f7","border-top":"1px solid #cfcfcf","border-left":"none","border-right":"1px solid #cfcfcf","border-bottom":"none"});
		});
      	
		});