$(function () {
    //ie detection
    if ($.browser.msie && $.browser.version == 10) {
        $("html").addClass("ie10");
    }
    if ($.browser.msie && $.browser.version == 9) {
        $("html").addClass("ie9");
    }
    if ($.browser.msie && $.browser.version == 8) {
        $("html").addClass("ie8");
    }
});
