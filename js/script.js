$(document).ready (function(){

    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    

    if( $(window).width() > 800){
        $('header .text').css ({
            opacity: 0,
            marginTop: 0
        });

        $('header .text').animate ({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);

    }


    var about = $('#about').offset().top,
        menu = $('#plat').offset().top,
        gallery = $('#gallery').offset().top,
        location = $('#location').offset().top;

    $('#btn-about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:  about - 100
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    $('#btn-gallery').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: gallery
        }, 500);
    });

    $('#btn-location').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: location
        }, 500);
    });

});