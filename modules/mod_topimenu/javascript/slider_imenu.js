
jQuery("document").ready(function($){ 
var height = 150;
var timemagik = 100;
var nav = $('.navblock');
    $(window).scroll(function () {
        if ($(this).scrollTop() > height) {
            nav.fadeIn(timemagik);
            nav.removeClass("nonenav");
            nav.addClass("fixed-nav");
             
        } else {
            nav.fadeOut(timemagik);
            nav.addClass("nonenav");
            nav.removeClass("fixed-nav");
        }
    });
});

