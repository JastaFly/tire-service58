// Глобальные переменные которые используются в несколькиих функциях
let modal_windows = document.getElementsByClassName('modal-window');
let shadow = document.getElementsByClassName('shadow');
let header = document.getElementsByTagName('header')[0];
let main = document.getElementsByTagName('main')[0];
let footer = document.getElementsByTagName('footer')[0];
let current_window;
let what_text;

$(document).ready(function () {

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
        } else {
            $(this).addClass('active');
            $('.header-menu').addClass('active');
            $('html, body').addClass('hidden');
        }
    });
    $('.form').submit(function () {
        let name;
        let number = this.telephone.value;
        let client_address = this.address.value
        let window_form = this.hasAttribute('modal');
        if (window_form == false) {
            name = 'Имени нет';
        }
        else {
            name = this.name.value;
        }
        let data = {
            'name': name,
            'phone': number,
            'address': client_address,
            'what': what_text
        }
        $.ajax({
            url: "../php/mail.php",
            type: "POST",
            data: data,
            dataType: "html",
            success: function (res) {
                console.log(res);
                modal_windows[0].style.display = 'none';
                current_window = 1;
                $(modal_windows[1]).slideToggle();
                shadow[0].style.display = 'block';
                header.style.filter = 'blur(10px)';
                main.style.filter = 'blur(10px)';
                footer.style.filter = 'blur(10px)';
                ym(65694196,'reachGoal','zayavka');
            }
        })
    });

});
jQuery(function ($) {
    $(".form-control, .modal-form__number").mask("+7(999) 999-9999");
});


let show_window = function () {
    $(modal_windows[0]).slideToggle();
    shadow[0].style.display = 'block';
    header.style.filter = 'blur(8px)';
    main.style.filter = 'blur(8px)';
    footer.style.filter = 'blur(8px)';
    current_window = 0;
}
let close_window = function () {
    $(modal_windows[current_window]).slideToggle();
    header.style.filter = 'blur(0)';
    main.style.filter = 'blur(0)';
    footer.style.filter = 'blur(0)';
    shadow[0].style.display = 'none';
}
let what = function (number) {
    switch (number) {
        case 1:
            what_text = 'Заказать звонок';
            break;
        case 2:
            what_text = 'Записаться на сеанс сейчас и сэкономить до 20% на качесвенном обслуживании';
            break;
        case 3:
            what_text = 'Бесплатную консультацию';
            break;
    }
}

