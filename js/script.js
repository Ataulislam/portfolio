$(function () {



    //menu fixed part start


    var navoff = $('.main_menu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });


    // banner slider start
    //    $('#banner_part').slick({
    //        slidesToShow: 1,
    //        slidesToScroll: 1,
    //        autoplay: true,
    //        autoplaySpeed: 2000,
    //        arrows: false,
    //        dots: true,
    //    });



    //type js start

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings'
    });








    // about video start
    $('.venobox').venobox();

    //test slider start
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    // smooth scrolling js start

    $('a[href*="#"]')

        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {

            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {

                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {

                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });


    // service slick part 

    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa fa-chevron-up slidPrv3"></i>',
        nextArrow: '<i class="fa fa-chevron-down slidNext3"></i>',
        vertical: true,
        verticalSwiping: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
		},
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		}
	  ]
    });

});
