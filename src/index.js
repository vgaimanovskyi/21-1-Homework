import _ from 'lodash';
import $ from "jquery";
import "./scss/style.scss";
import "./plugins/svguse.js";

// burder
$(document).ready(function () {
    $('.js-menu-btn').click(function () {
        $(this).toggleClass('menu-btn--open');
        $('.js-menu').slideToggle(500);
    })
})
// ie
$(function () {
    //ie detection
    if (!!window.MSInputMethodContext && !!document.documentMode) {
        $("html").addClass("ie11");
    }
});
/*
function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

$("body").append(component());
*/