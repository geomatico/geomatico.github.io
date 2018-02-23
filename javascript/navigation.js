jQuery.noConflict();

(function($)
{

	"use strict";
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

	$.fn.aetherNavigation = function(){

		var navigationButton = jQuery('.boton_navegador'),
			navegacion = jQuery('.navegacion'),
			navigationHeight = jQuery('.logo').height(),
			windowWidth = jQuery(window).width();

		jQuery('#main-content section:first-child').css({
			"margin-top" : navigationHeight + 30 + "px"
		});

		var sections = jQuery('section');
		var navigation_links = jQuery('nav a');
		sections.waypoint({
		handler: function(direction) {
			var active_section;
			active_section = jQuery(this);
			if (direction === "up") active_section = active_section.prev();
			var active_link = jQuery('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("activo");
			active_link.addClass("activo");
		},
		offset: '10%'
		});

		if ( windowWidth > 960 ) {
	  		navegacion.addClass('desktop');
	  		navegacion.removeClass('movil');
	  	}

	  	if ( windowWidth < 960 ) {
	  		navegacion.addClass('movil');
	  		navegacion.removeClass('desktop');
	  	}

	  	navigationButton.click(function(){
			if(navegacion.is(':hidden')) {
				navegacion.slideDown();
			} else {
				navegacion.slideUp();
			}
		});

	  	jQuery('.navegacion a').click(function(){
	  		if(navegacion.is(':visible') && navegacion.hasClass('movil')) {
	  			navegacion.slideUp();
	  		}
	  	});

	  	jQuery(window).resize(function() {
			var ww = jQuery(window).width(),
				nav = jQuery('.navegacion');

		  	if ( ww > 960 ) {
		  		nav.addClass('desktop');
		  		nav.removeClass('movil');
		  	}

		  	if ( ww < 960 ) {
		  		nav.addClass('movil');
		  		nav.removeClass('desktop');
		  	}
		});
	};

})(jQuery);
