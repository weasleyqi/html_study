/**
 * Created by weasleyqi on 9/5/15.
 */

$(document).ready(function () {
    $(window).on("load", function () {
        imgLocation();
    });
    var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"}]}
    window.onscroll = function () {
        if (scrollSide()) {
            $.each(dataImg.data, function (index, value) {
                var box = $("<box>").addClass("box").appendTo("#container");
                var content = $("<content>").addClass("content").appendTo(box);
                //console.log("./img/"+$(value).attr("src"));
                $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
            });
            imgLocation();
        }
    }
});

function scrollSide() {
    var box = $(".box");
    var lastBoxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    return (lastBoxHeight < documentHeight+scrollHeight)?true:false;
}

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var boxArr = [];
    box.each(function (index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            //console.log(boxHeight +"---"+value);
            boxArr[index] = boxHeight;
        } else {
            var minBoxHeight = Math.min.apply(null,boxArr);
            var minBoxHeightIndex = $.inArray(minBoxHeight,boxArr);
            $(value).css({
                position:"absolute",
                top:minBoxHeight,
                left:box.eq(minBoxHeightIndex).position().left
            });
            boxArr[minBoxHeightIndex] += box.eq(index).height();
        }
    })
}