var head = document.getElementById("header");
var flex2, flex3

	window.onscroll = function() {
		if (window.pageYOffset > 50) {
			header.classList.add("onscroll");
		} else {
			header.classList.remove("onscroll");
		}

	}

	// Remove second flex item for mobile view
	function clearFlex() {
		if (screen.width <= 680) {
			flex3 = document.getElementsByClassName("flex-item1")[3];
			flex3.style.display = "none";
		} else {
			flex3 = document.getElementsByClassName("flex-item1")[3];
			flex3.style.display = "";
		}
	}

	clearFlex();

	// Menu toggle 

	function openMenu() {
		var x = document.getElementById("myTopNav");
		if (x.className === "navtoggle") {
			x.className = "mini";
		} else {
			x.className = "navtoggle";
		}
	}
