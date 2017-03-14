$(document).ready(function () {
	var scroll_start = 0;
	var startChange = $("#header");
	var offset = startChange.offset();
	
	// Logo switching while scrolling
	watchForScroll();

	function scrollLogo(){
		$('#main-logo').fadeOut().addClass('hide');
		$("#title").removeClass("hide");
		$("#title").addClass("developer",'easeInCubic');
		
		var developerToArtisan = function(){
			$("#title").removeClass("developer").addClass("artisan",1000,"easeInCubic");
			setTimeout(artisanToCodeMonkey,1500);
		}

		var artisanToCodeMonkey = function(){
			$("#title").removeClass('artisan').addClass('codeMonkey', 1000, "easeInCubic");
			$("#monkey").removeClass("hide");
		}
		setTimeout(developerToArtisan,1500);
	}

	function top(){
		$("#monkey").addClass("hide");
		$("#title").addClass("hide").removeClass('codeMonkey');
		$("#main-logo").removeClass("hide").fadeIn();
	}

	function watchForScroll(){
		$(document).scroll(function(){
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top){
				if($("#title").hasClass("hide")){
					scrollLogo();			
				}
			} else if(scroll_start === offset.top){
				if($("#main-logo").hasClass("hide")){
					top();	
				}				
			}
		});
	}
});
