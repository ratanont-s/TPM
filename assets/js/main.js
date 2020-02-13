$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    });

    $(".navbar").sticky({
        topSpacing: 0,
        zIndex: 1020
    });
});