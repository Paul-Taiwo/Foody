// Add onscroll class to header
var head = document.getElementById("header");
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
			var flex3 = document.getElementsByClassName("flex-item1")[3];
			flex3.style.display = "none";
		} else {
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

/* Toggle active class
var container = document.querySelector(".header_list");
var li = container.querySelectorAll("li");
// Loop through
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", function () {
		var current = document.querySelector(".active");
		current.className = current.className.replace("active", "");
		this.className += "active";
	});
}*/