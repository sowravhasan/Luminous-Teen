(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		/* Testimonial Slide Active */
		$(".testimonials").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			nav: false,
			dots: false,
		});

		/* Counter Up */
		$(".counter").counterUp({
			delay: 10,
			time: 1200
		});
		$(".testimonial-carousel").owlCarousel({
			autoplay: true,
			smartSpeed: 1500,
			dots: true,
			loop: true,
			items: 1
		});
		$('.skill').waypoint(function () {
			$('.progress .progress-bar').each(function () {
				$(this).css("width", $(this).attr("aria-valuenow") + '%');
			});
		}, {offset: '80%'});
		
		/* Portfolio Popup */
		$('.gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		/* One Page Nav */
		$('.mainmenu ul').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			easing: 'swing',
			scrollOffset: 60,
		});
	});


	jQuery(window).load(function () {

		/* Sticky Header */
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 1) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});
		
		/* Preloader */
		$(".preloader").fadeOut()
	});
}(jQuery));