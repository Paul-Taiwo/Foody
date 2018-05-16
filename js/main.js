var head = document.getElementById('header');

	window.onscroll = function() {
		if(window.pageYOffset > 50){
			header.classList.add('onscroll');
		} else {
			header.classList.remove('onscroll');
		}

	}
