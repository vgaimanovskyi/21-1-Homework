$(document).ready(function () {
    $('.js-menu-btn').click(function () {
        $(this).toggleClass('menu-btn--open');
        $('.js-menu').slideToggle(500);
    })
})

