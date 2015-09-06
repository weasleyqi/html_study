/**
 * Created by weasleyqi on 9/5/15.
 */

$(document).ready(function () {
    $(".main>a").on("click", function () {
        var ulNode = $(this).next("ul");
        //if (ulNode.css("display") == "none") {
        //    ulNode.css("display","block");
        //}else {
        //    ulNode.css("display","none");
        //}

        //ulNode.toggle();//数字 slow normal fast
        ulNode.slideToggle(300);
        changeIcon($(this));
    });

    $(".hmain").hover(function () {
        $(this).children("ul").slideDown();
        changeIcon($(this).children("a"));
    }, function () {
        $(this).children("ul").slideUp();
        changeIcon($(this).children("a"));
    })
});

function changeIcon (node) {
    if (node) {
        if (node.css("background-image").indexOf("1.jpg")>=0) {
            node.css("background-image","url('images/2.jpg')");
        }else {
            node.css("background-image","url('images/1.jpg')");
        }
    }
}