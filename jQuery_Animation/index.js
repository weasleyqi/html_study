/**
 * Created by weasleyqi on 9/1/15.
 */

//显示与隐藏
//$(document).ready(function () {
//    $("#bid").click(function () {
//        $("p").hide(1000);
//    });
//    $("#show").click(function () {
//        $("p").show(1000);
//    });
//    $("#toggle").click(function(){
//        $("p").toggle(1000);
//    })
//});

//淡入淡出

//$(document).ready(function () {
//    $("#in").on("click", function () {
//        $("#div1").fadeIn(1000);
//        $("#div2").fadeIn(1000);
//        $("#div3").fadeIn(1000);
//    });
//    $("#out").on("click", function () {
//        $("#div1").fadeOut(1000);
//        $("#div2").fadeOut(1000);
//        $("#div3").fadeOut(1000);
//    });
//
//    $("#toggle").on("click", function () {
//        $("#div1").fadeToggle(1000);
//        $("#div2").fadeToggle(1000);
//        $("#div3").fadeToggle(1000);
//    });
//    $("#to").on("click", function () {
//        $("#div1").fadeTo(1000,0.8);
//        $("#div2").fadeTo(1000,0.3);
//        $("#div3").fadeTo(1000,0.5);
//    });
//});

//滑动效果
$(document).ready(function () {
    $("#div1").on("click",function(){
        $("#div3").slideDown(1000);
    })
    $("#div2").click(function () {
        $("#div3").slideUp(1000);
    })
})