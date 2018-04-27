var nav = document.getElementById('header');

	window.onscroll = function() {
		if(window.pageYOffset > 300){
			header.classList.add('onscroll');
		}else{
			header.classList.remove('onscroll');
		}
	}