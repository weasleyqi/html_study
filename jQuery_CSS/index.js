/**
 * Created by weasleyqi on 9/4/15.
 */

$(document).ready(function () {
    //Traditional css
    //$("div").css("width","100px");
    //$("div").css("height","100px");
    //$("div").css("backgroundColor","#00FF00");

    //Comfortable
    //$("div").css({
    //    width:"100px",
    //    height:"100px",
    //    backgroundColor:"Red"
    //});

    //添加类文件 来自css文件中的类
    //$("div").addClass("style1");
    //$("div").click(function () {
    //    //$(this).addClass("style2");
    //    //$(this).removeClass("style1");
    //    $(this).toggleClass("style2");
    //})

    console.log("height:"+$("#div").height());
    console.log("innerHeight:"+$("#div").innerHeight());
    console.log("outerHeight:"+$("#div").outerHeight());
    console.log("outerHeight:True:"+$("#div").outerHeight(true));
})