var date = new Date();
var month = date.getMonth();
var arr = [
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня',
    'січня',
];

$('.rf_title').text('Данi оновлено ' + date.getDate() + ' ' + arr[month - 1] + ' ' + date.getFullYear() + ' о ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + '' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()));

$('html').css('background', 'linear-gradient(90deg, #aabce8, #cfc6e5, #e2c6e6)');

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$(['access/icons/docac.svg', 'access/icons/posin.svg', 'access/icons/posac.svg', 'access/icons/docin.svg', 'access/icons/notin.svg', 'access/icons/notac.svg', 'access/icons/menuin.svg', 'access/icons/menuac.svg', 'access/icons/qrcodeinc.png', 'access/icons/qrcodeact.png', 'access/icons/shtrihinc.png', 'access/icons/shtrihact.png','access/icons/1.svg','access/icons/2.svg','access/icons/3.svg','access/icons/4.svg',
'access/icons/5.svg','access/icons/6.svg','access/icons/7.svg','access/icons/8.svg','access/icons/9.svg','access/icons/10.svg','access/icons/11.svg','access/icons/arrow.svg','access/e-Ukraine-Regular.woff']).preload();

$('.vshicon').on('click', function () {
    $('.loaded.sh.v').fadeIn(1);
    $('.loaded.qr.v').fadeOut(1);
});

$('.vqricon').on('click', function () {
    $('.loaded.qr.v').fadeIn(1);
    $('.loaded.sh.v').fadeOut(1);
});

$('.cshicon').on('click', function () {
    $('.loaded.sh.c').fadeIn(1);
    $('.loaded.qr.c').fadeOut(1);
});

$('.cqricon').on('click', function () {
    $('.loaded.qr.c').fadeIn(1);
    $('.loaded.sh.c').fadeOut(1);
});

$('.nshicon').on('click', function () {
    $('.loaded.sh.n').fadeIn(1);
    $('.loaded.qr.n').fadeOut(1);
});

$('.nqricon').on('click', function () {
    $('.loaded.qr.n').fadeIn(1);
    $('.loaded.sh.n').fadeOut(1);
});

$('.pshicon').on('click', function () {
    $('.loaded.sh.p').fadeIn(1);
    $('.loaded.qr.p').fadeOut(1);
});

$('.pqricon').on('click', function () {
    $('.loaded.qr.p').fadeIn(1);
    $('.loaded.sh.p').fadeOut(1);
});

// Added event parameter (e) and e.preventDefault() to block potential anchor tag redirects
$('.icon.pov').on('click', function (e) {
    e.preventDefault(); // <-- ADDED to prevent potential Telegram redirection if icon is an <a> tag
    setTimeout(function () {
        $('.icon').removeClass('act');
        $('.icon.pov').addClass('act');

        $('.papage').fadeOut(1);
        $('.menulid').fadeOut(1);
        $('.poslugi').fadeOut(1);

        $('.notifications').fadeIn(1);

        swiper.slideTo(0, 10, false);
        $('html').css('background', '#c9d8e7');
    }, 70);
});

// Added event parameter (e) and e.preventDefault() to block potential anchor tag redirects
$('.icon.doc').on('click', function (e) {
    e.preventDefault(); // <-- ADDED to prevent potential Telegram redirection if icon is an <a> tag
    setTimeout(function () {
        $('html').css('background', '#b0c7e7');

        $('.icon').removeClass('act');
        $('.icon.doc').addClass('act');

        $('.notifications').fadeOut(1);
        $('.menulid').fadeOut(1);
        $('.poslugi').fadeOut(1);

        $('.papage').fadeIn(1);
    }, 70);
});

// Added event parameter (e) and e.preventDefault() to block potential anchor tag redirects
$('.icon.pos').on('click', function (e) {
    e.preventDefault(); // <-- ADDED to prevent potential Telegram redirection if icon is an <a> tag
    setTimeout(function () {
        $('.icon').removeClass('act');
        $('.icon.pos').addClass('act');

        $('.notifications').fadeOut(1);
        $('.menulid').fadeOut(1);
        $('.papage').fadeOut(1);
        $('.poslugi').fadeIn(1);

        swiper.slideTo(0, 10, false);
        $('html').css('background', '#c9d8e7');
    }, 70);
});

// Added event parameter (e) and e.preventDefault() to block potential anchor tag redirects
$('.icon.men').on('click', function (e) {
    e.preventDefault(); // <-- ADDED to prevent potential Telegram redirection if icon is an <a> tag
    setTimeout(function () {
        $('.icon').removeClass('act');
        $('.icon.men').addClass('act');

        $('.notifications').fadeOut(1);
        $('.poslugi').fadeOut(1);
        $('.papage').fadeOut(1);

        $('.menulid').fadeIn(1);

        swiper.slideTo(0, 10, false);
        $('html').css('background', '#c9d8e7');
    }, 70);
});


$(function () {
    $('.line').marquee({

        allowCss3Support: true,
        css3easing: 'linear',
        easing: 'linear',
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        gap: 50,
        pauseOnCycle: false,
        pauseOnHover: false,
        startVisible: false

    });
});

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 85,
    coverflowEffect: {
        rotate: 0,
        stretch: 20,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
});

swiper.on('slideChange', function () {

    if (swiper.realIndex == 0) {
        $('.dit_dot').removeClass('act');
        var sss = swiper.realIndex + 1;
        $('.dit_dot:nth-child(' + sss + ')').addClass('act');

        $('html').css('background', '#B3C4E3');
        $('.content').css('background', '#D9E3F0');
    }

    if (swiper.realIndex == 1) {
        $('.dit_dot').removeClass('act');
        var sss = swiper.realIndex + 1;
        $('.dit_dot:nth-child(' + sss + ')').addClass('act');

        $('html').css('background', '#DAC8D7');
        $('.content').css('background', '#EDE3EB');
    }

    if($('.swiper-slide.passport').length == 5){
        if (swiper.realIndex == 2) {
            $('.dit_dot').removeClass('act');
            var sss = swiper.realIndex + 1;
            $('.dit_dot:nth-child(' + sss + ')').addClass('act');

            $('html').css('background', '#bcb8cf');
            $('.content').css('background', '#dbd9e6');
        }

        if (swiper.realIndex == 3) {
            $('.dit_dot').removeClass('act');
            var sss = swiper.realIndex + 1;
            $('.dit_dot:nth-child(' + sss + ')').addClass('act');

            $('html').css('background', '#b9eaac');
            $('.content').css('background', '#e8f5e4');
        }

        if (swiper.realIndex == 4) {
            $('.dit_dot').removeClass('act');
            var sss = swiper.realIndex + 1;
            $('.dit_dot:nth-child(' + sss + ')').addClass('act');

            $('html').css('background', '#C9D8E7');
            $('.content').css('background', '#E4ECF3');
        }
    } else if($('.swiper-slide.passport').length == 3) {

        if (swiper.realIndex == 2) {
            $('.dit_dot').removeClass('act');
            var sss = swiper.realIndex + 1;
            $('.dit_dot:nth-child(' + sss + ')').addClass('act');

            $('html').css('background', '#C9D8E7');
            $('.content').css('background', '#E4ECF3');
        }
    } else if($('.swiper-slide.passport').length == 4 && $('.swiper-slide.passport:eq(2)').children('.content').children('.name').html() == 'KBE968639'){
        if (swiper.realIndex == 2) {
            $('.dit_dot').removeClass('act');
            var sss = swiper.realIndex + 1;
            $('.dit_dot:nth-child(' + sss + ')').addClass('act');

            $('html').css('background', '#bcb8cf');
            $('.content').css('background', '#dbd9e6');
        }

        if (swiper.realIndex == 3) {
            $('.dit_dot').removeClass('act');
            var sss = swiper.realIndex + 1;
            $('.dit_dot:nth-child(' + sss + ')').addClass('act');

            $('html').css('background', '#C9D8E7');
            $('.content').css('background', '#E4ECF3');
        }
    } else {
        if (swiper.realIndex == 2) {
            $('.dit_dot').removeClass('act');
            var sss = swiper.realIndex + 1;
            $('.dit_dot:nth-child(' + sss + ')').addClass('act');

            $('html').css('background', '#b9eaac');
            $('.content').css('background', '#e8f5e4');
        }

        if (swiper.realIndex == 3) {
            $('.dit_dot').removeClass('act');
            var sss = swiper.realIndex + 1;
            $('.dit_dot:nth-child(' + sss + ')').addClass('act');

            $('html').css('background', '#C9D8E7');
            $('.content').css('background', '#E4ECF3');
        }
    }

});

var p = 0

$('.key').on('click', function () {
    p = p + 1
    if (p == 4) {
        $('.dot:nth-child(' + p + ')').addClass('pressed');
        setTimeout(function () {
            $('.loginpage').fadeOut(100);
            $('html').css('background', '#aec5e5');
        }, 400);
    } else {
        $('.dot:nth-child(' + p + ')').addClass('pressed');
    }
})

$('.krest').on('click', function () {
    p = 0
    $('.dot').removeClass('pressed');
})

$(document).ready(function() {
    $('.loadpage').hide();
    $('.loginpage').fadeIn(1);

    $('html').css('background', '#d2e1ee');

    var ves = ($('.papage > .footer').height() - $('.papage > .footer > .ft_icons').height()) / 2;
    $('.zep').css('padding-bottom', ves + 'px');
    var zaz = ves + 13 + $('.papage > .footer > .ft_icons').height();
    $('.menu').css('max-height', 'calc(100% - ' + zaz + 'px)');
    $('.ok').css('margin-bottom', (ves + 13) * 2 + 'px');
});


if($('.covid').length == 1){
    var j = 0
    var covid = document.querySelector(".covid");
    var playing = false;
    covid.addEventListener('click', function () {
        j = j + 1;

        setTimeout(function () {
            $(".cqricon").click();
        }, 300);

        $(".cqricon").on('click', function () {
            return false;
        });

        $(".cshicon").on('click', function () {
            return false;
        });

        if (j = 1) {
            setTimeout(function () {
                $('.covid > .content > .unloaded').css('opacity', '0');
                $('.covid > .content > .loaded').css('opacity', '1');
            }, 500);
        }

        if (playing)
            return;

        $('.covid > .content').css('filter', 'brightness(0.8)');
        setTimeout(function () {
            $('.covid > .content').css('filter', 'brightness(1)');
        }, 200);

        playing = true;
        anime({
            targets: covid,
            rotateY: {
                value: '+=180',
                delay: 0
            },
            easing: 'linear',
            duration: 100,
            complete: function (anim) {
                playing = false;
            }
        });

    });
}


if($('.prava').length == 1){
    var l = 0
    var prava = document.querySelector(".prava");
    var playing = false;
    prava.addEventListener('click', function () {
        l = l + 1;

        setTimeout(function () {
            $(".vqricon").click();
        }, 300);

        $(".vqricon").on('click', function () {
            return false;
        });

        $(".vshicon").on('click', function () {
            return false;
        });

        if (l = 1) {
            setTimeout(function () {
                $('.prava > .content > .unloaded').css('opacity', '0');
                $('.prava > .content > .loaded').css('opacity', '1');
            }, 500);
        }

        if (playing)
            return;

        $('.prava > .content').css('filter', 'brightness(0.8)');
        setTimeout(function () {
            $('.prava > .content').css('filter', 'brightness(1)');
        }, 200);

        playing = true;
        anime({
            targets: prava,
            rotateY: {
                value: '+=180',
                delay: 0
            },
            easing: 'linear',
            duration: 100,
            complete: function (anim) {
                playing = false;
            }
        });

    });
}

var i = 0
var pssprt = document.querySelector(".pssprt");
var playing = false;
pssprt.addEventListener('click', function () {
    i = i + 1;

    setTimeout(function () {
        $(".pqricon").click();
    }, 300);

    $(".pqricon").on('click', function () {
        return false;
    });

    $(".pshicon").on('click', function () {
        return false;
    });

    if (i = 1) {
        setTimeout(function () {
            $('.pssprt > .content > .unloaded').css('opacity', '0');
            $('.pssprt > .content > .loaded').css('opacity', '1');
        }, 500);
    }

    if (playing)
        return;

    $('.pssprt > .content').css('filter', 'brightness(0.8)');
    setTimeout(function () {
        $('.pssprt > .content').css('filter', 'brightness(1)');
    }, 200);

    playing = true;
    anime({
        targets: pssprt,
        rotateY: {
            value: '+=180',
            delay: 0
        },
        easing: 'linear',
        duration: 100,
        complete: function (anim) {
            playing = false;
        }
    });

});


var n = 0

var nlgi = document.querySelector(".nlgi");
var playing = false;

nlgi.addEventListener('click', function () {
    n = n + 1;

    setTimeout(function () {
        $(".nqricon").click();
    }, 300);

    $(".nqricon").on('click', function () {
        return false;
    });

    $(".nshicon").on('click', function () {
        return false;
    });

    if (n = 1) {
        setTimeout(function () {
            $('.nlgi > .content > .unloaded').css('opacity', '0');
            $('.nlgi > .content > .loaded').css('opacity', '1');
        }, 500);
    }

    if (playing)
        return;

    $('.nlgi > .content').css('filter', 'brightness(0.8)');
    setTimeout(function () {
        $('.nlgi > .content').css('filter', 'brightness(1)');
    }, 200);

    playing = true;
    anime({
        targets: nlgi,
        rotateY: {
            value: '+=180',
            delay: 0
        },
        easing: 'linear',
        duration: 100,
        complete: function (anim) {
            playing = false;
        }
    });


});
