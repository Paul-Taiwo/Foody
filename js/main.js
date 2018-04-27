$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 400) {
            $("header").addClass("onscroll");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("onscroll");
        }
    }); 

});
function myFunction() {
	alert("hwy");
}
