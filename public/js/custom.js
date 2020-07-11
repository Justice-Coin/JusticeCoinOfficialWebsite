/*
------------------------------------------------------------------------
* Template Name    : Elvish | Responsive Bootstrap 4 Personal Template *
* Author           : ThemesBoss                                        *
* Version          : 1.0.0                                             *
* Created          : May 2018                                          *
* File Description : Main Js file of the template                      *
*-----------------------------------------------------------------------
*/

! function($) {
    "use strict";

    var ElvishApp = function() {};

    //Preloader
    ElvishApp.prototype.initPreLoader = function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    },

    //scroll
    ElvishApp.prototype.initNavbarStickey = function() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    },

    //Smooth
    ElvishApp.prototype.initNavbarSmooth = function() {
        $('.navbar-brand, .navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    ElvishApp.prototype.init = function() {
        this.initPreLoader();
        this.initNavbarStickey();
        this.initNavbarSmooth();
    },

    //init
    $.ElvishApp = new ElvishApp();
    $.ElvishApp.Constructor = ElvishApp;
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.ElvishApp.init();
}(window.jQuery);
