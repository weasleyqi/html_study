/**
 * Created by weasleyqi on 9/2/15.
 */

//get post
//$(document).ready(function () {
//    $("#bid").click(function () {
//        $("#span").text("Loading...");
//        $.get("http://218.4.117.11:8093/broker/sys/getNewVersion", function (data) {
//            console.log(data);
//            $("#span").text(data);
//        }).error(function(){
//            $("#span").text("get failed");
//        });
//    });
//})

//ajax片段加载
$(document).ready(function(){
    $("body").load("part.htm", function (a, status, c) {
        console.log(status);
        if(status == "error"){
            $("body").append("error");
        }
    })
    $.getScript("helloJS.js").complete(function () {
        sayHello();
    });
});