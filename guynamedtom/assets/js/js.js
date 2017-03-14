$(document).ready(function () {
	$("#portrait, #skillsCanvas, #success").hide();

	inView("#about").once('enter', function(){
		$("#portrait").fadeIn(1800);
		$("#aboutSection").animate({"right":"25px"}, 900);
	});

	inView("#skills").once('enter', function() {
		$("#skillsCanvas").slideDown(1000);
	});

	inView("#photography").once('enter', function(){
		$('#comingsoon').animate({
			fontSize:"5em"
		},1500, function(){
			$("#tag").animate({'left':'0'}, 800).delay(1500).animate({'left':'100%'});
		});
	});

	// Detect browser to fix CSS in chrome
	if(bowser.chrome){
		$("#skillsCanvas").css({'margin-top':'5px'});
	}

  /************
       FORM 
   ***********/

 	$('form').on('submit', function(event) {
 		event.preventDefault();	
 		$this = $(this);
 		$.ajax( {
 			url:'assets/php/email.php',
 			type:'POST',
 			mimeType:'text/html',
 			data: $this.serialize(),
 			success: function() {
	 				$this.hide();
	 				$('#success').fadeIn('slow');
	  			}
 		});
		
	});
});