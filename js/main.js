var nav = document.getElementById('header');

	window.onscroll = function() {
		if(window.pageYOffset > 300){
			header.style.background = "#333";
			header.style.boxShadow = "1px 4px 10px grey";
		}else{
			header.style.background = "transparent";
			header.style.boxShadow = "none";
		}
	}