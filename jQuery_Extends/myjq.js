/**
 * Created by weasleyqi on 9/2/15.
 */
$.myjq = function () {
    alert("my Jq");
}

$.fn.myjq = function () {
    $(this).text("Hello ");
}