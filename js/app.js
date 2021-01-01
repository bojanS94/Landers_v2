$(document).ready(function () {
    $('#next').on('click', function () {
        var currentImg = $('.current');
        var nextImg = currentImg.next();

        if (nextImg.length) {

            $(currentImg).fadeOut('fast', function () {

                $(this).removeClass('current');

            });

            $(nextImg).fadeIn('fast', function () {

                $(this).addClass('current');

            });
        }
    });

    $('#prev').on('click', function () {
        var currentImg = $('.current');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            $(currentImg).fadeOut('fast', function () {

                $(this).removeClass('current');

            });

            $(prevImg).fadeIn('fast', function () {

                $(this).addClass('current');

            });
        }
    });
});