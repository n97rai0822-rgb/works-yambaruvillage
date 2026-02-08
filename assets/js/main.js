'use strict'
{
    // ハンバーガーメニュー
    var nav = $('.nav');
    var navbtn = $('.nav__btn');
    var navbtnClose = $('.nav__btn__close');

    navbtn.on('click',function(){
        nav.addClass('open');
    });
    navbtnClose.on('click',function(){
        nav.removeClass('open');
    });

    // ルームのスライド
    $(function(){
        $('.room__list').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
            }]
        });
    });


}
