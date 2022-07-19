(function ($) {
    "use strict";
    $(".reviews-block").each(function () {
        var $Carousel = $(this);
        $Carousel.owlCarousel({
            loop: $Carousel.data('loop'),
            autoplay: $Carousel.data("autoplay"),
            margin: $Carousel.data('space'),
            nav: $Carousel.data('nav'),
            dots: $Carousel.data('dots'),
            dotsSpeed: $Carousel.data('speed'),
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: $Carousel.data('slide-res')
                },
                1000: {
                    items: $Carousel.data('slide'),
                }
            }
        });
    });

    $('.why-choose-us-slider').owlCarousel({
		loop: true,
		margin: 25,
		nav: false,
		dots: true,

		responsive:{
			0:{
				items: 1,
			},
			576:{
				items: 1,
			},
			768:{
				items: 2,
			},
			1024:{
				items: 3,
			},
			1200:{
				items: 3,
			}
		}
	});
    $('.image-popup-floor-plan').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
    });
    $('.image-popup-gallery').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
    });
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        var logo = $('#logoId');
        var jscta = $('#js-cta');
        if (scroll < 50) {
            $(".navbar").removeClass("sticky");
            logo.attr('src', '../images/logo/logo_white.svg');
            jscta.removeClass('button3');
            jscta.addClass('button1');
        } else {
            $(".navbar").addClass("sticky");
            logo.attr('src', '../images/logo/logo_color.svg');
            jscta.removeClass('button1');
            jscta.addClass('button3');
        }
    });
    var aScroll = $('.nav-item .nav-link'),
        $navbarCollapse = $('.navbar-collapse');
    aScroll.on('click', function (event) {
        var target = $($(this).attr('href'));
        $(this).parent(".nav-item").siblings().removeClass('active');
        $(this).parent('.nav-item').addClass('active');
        if (target.length > 0) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').toggleClass('show');
            $('.navbar-toggler-icon').toggleClass('active');
            $('.navbar-toggler').toggleClass('collapsed');
        }
    });
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })
})(jQuery);