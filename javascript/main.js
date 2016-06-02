/* Inicialización
-------------------------------------------------------------- */
"use strict";

function initialize() {

	jQuery.cookieBar({
		element: "nav",
		fixed: true,
		acceptOnScroll: 200
	});

	//IE9
	if (jQuery.browser.msie && jQuery.browser.version == 9) {
		jQuery('html').addClass('ie9');
	}

	//NAVEGACIÓN
	jQuery(document).aetherNavigation();

	//SCROLL
	jQuery('.navegacion, .call-to-action').localScroll({
		offset: -50
	});

	jQuery("#top").click(function () {
		return jQuery("body,html").stop().animate({
			scrollTop: 0
		}, 800, "easeOutCubic"), !1;
	});

	//RESPONSIVE H1 y H2
	jQuery("h1").fitText(1.8, { minFontSize: '46px', maxFontSize: '60px' });
	jQuery("h2").fitText(1.8, { minFontSize: '8px', maxFontSize: '30px' });


	//CENTRADO Y ESCALADO DE LA PORTADA
	(function() {
	    function portadaInit(){
	       var portada = jQuery('.portada'),
				ww = jQuery(window).width(),
				wh = jQuery(window).height(),
				portadaHeight = wh;

			portada.css({
				height: portadaHeight+"px",
			});

			var portadaContent = jQuery('.portada .content'),
				contentHeight = portadaContent.height(),
				parentHeight = portada.height(),
				topMargin = (parentHeight - contentHeight) / 2;

			portadaContent.css({
				"margin-top" : topMargin+"px"
			});
	    }

	    jQuery(window).on("resize", portadaInit);
	    jQuery(document).on("ready", portadaInit);
	})();


	//TOOLTIP DE TECNOLOGÍA
	(function() {
		function tooltipInit(){
			var tooltip = jQuery('.tooltip'),
				target = jQuery('.icon'),
				arrow = jQuery ('.flecha_abajo'),
				mobile = jQuery(window).width() < 960,
				desktop = jQuery(window).width() > 960

			if (mobile) {

				jQuery( ".overview:odd" ).addClass('pull-left');

				target.click(function(){
					target.css({ "background-position": "top" });
					jQuery(this).css({ "background-position": "bottom" });

					tooltip.removeClass('visible'); arrow.removeClass('visible');
					jQuery(this).siblings('.tooltip, .flecha_abajo').addClass('visible');
				});

				tooltip.click(function(){
					jQuery(this).removeClass('visible');
					jQuery(this).siblings('.flecha_abajo').removeClass('visible');
					jQuery(this).siblings('.icon').css({
						"background-position": "top"
					});
				});

				target.unbind('mouseenter');
				target.unbind('mouseleave');
			}

			if (desktop) {
				jQuery('.pull-left').removeClass('pull-left');
				target.css({"background-position" : "top"})
				tooltip.removeClass('visible');
				arrow.removeClass('visible');
				target.bind('mouseenter', function(){
					jQuery(this).siblings('.tooltip, .flecha_abajo').addClass('visible');
					jQuery(this).css({"background-position" : "bottom"});

					var removeTooltip = function(){ tooltip.removeClass('visible'); arrow.removeClass('visible'); };
					target.bind( 'mouseleave', removeTooltip );
					target.bind( 'mouseleave', function(){
						jQuery(this).css({"background-position" : "top"});
					});
				});
			}

		}

		jQuery(window).on("resize", tooltipInit);
	  jQuery(document).on("ready", tooltipInit);
	})();

	//ANIMACIONES


	jQuery('.animated').appear({force_process: true})

	jQuery(document.body).on('appear', '.fade', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('ae-animation-fade') });
	});
	jQuery(document.body).on('appear', '.slide', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('ae-animation-slide') });
	});
	jQuery(document.body).on('appear', '.hatch', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('ae-animation-hatch') });
	});
	jQuery(document.body).on('appear', '.entrance', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('ae-animation-entrance') });
	});

	//TEMPORIZADOR
	jQuery('.timer').appear();
	jQuery(document.body).on('appear', '.timer', function() {
		jQuery(this).countTo();
	});

	jQuery(document.body).on('disappear', '.timer', function() {
		jQuery(this).removeClass('timer');
	});

	//EFECTOS PARALLAX
	jQuery('.parallax-bg1').parallax("50%", 0.5);
	jQuery('.parallax-bg2').parallax("50%", 0.5);
	jQuery('.parallax-bg3').parallax("50%", 0.4);
	jQuery('.parallax-bg4').parallax("50%", 0.4);
};



/* LANZADERA
-------------------------------------------------------------- */
jQuery(document).ready(function(){
	initialize();
});
