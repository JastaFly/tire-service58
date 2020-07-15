$(document).ready(function() {

      $('.garage-box__slider-in').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: true,
            prevArrow: null,
            nextArrow: null,
            dots: false,
            prevArrow: $('.garage-left'),
            nextArrow: $('.garage-right'),
            dotsClass: 'slick-dots slider__dots',
            responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                      dots: false,
                      slidesToShow: 1,
                      infinite: true,
                  }
              },
              {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: false
                }
              }
            ]
        });

        $('.reviews-box__slide').slick({
              infinite: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              arrow: true,
              prevArrow: null,
              nextArrow: null,
              dots: false,
              prevArrow: $('.reviews-left'),
              nextArrow: $('.reviews-right'),
              dotsClass: 'slick-dots slider__dots',
              responsive: [
                  {
                    breakpoint: 1025,
                    settings: {
                        dots: false,
                        slidesToShow: 2,
                        infinite: true,
                    }
                },
                {
                  breakpoint: 720,
                  settings: {
                      slidesToShow: 1,
                      infinite: true,
                      dots: false
                  }
                }
              ]
          });



          $(document).on('click', '.header-burg', function (e) {
              e.preventDefault();
              if ($('.header-menu').hasClass('active')) {
                  $(this).removeClass('active');
                  $('.header-menu').removeClass('active');
                  $('html, body').removeClass('hidden');
              } else{
                  $(this).addClass('active');
                  $('.header-menu').addClass('active');
                  $('html, body').addClass('hidden');
              }
          });

});
jQuery(function($){
    $(".form-control").mask("+7(999) 999-9999");
});
