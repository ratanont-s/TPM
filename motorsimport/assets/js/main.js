$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    });

    var w = window.innerWidth;
    if (w < 992) {
        $(".header-top").sticky({
            topSpacing: 0,
            zIndex: 1020
        });
    } else {
        $(".navbar").sticky({
            topSpacing: 0,
            zIndex: 1020
        });
    }

});