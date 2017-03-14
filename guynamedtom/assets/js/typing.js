  $(function(){

  	setTimeout(type, 500);

  	function type(){
       $("#name").typed({
        strings: ["Hi, I'm Tom."],
        typeSpeed: 0,
        showCursor:false,
        callback:function(){
        	$("#mahFace").animate({'left': '0'});
		    $("#build").typed({
		        strings: ["I like to develop websites..."],
		        typeSpeed: 0
		      });
        }
      });
  	}
  });