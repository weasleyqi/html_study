/**
 * Created by weasleyqi on 8/21/15.
 */


$(document).ready(function (){

    //Click
    $("p").click(function (){
        $(this).hide();
    });

    //Event
    $("button").click(function(){
        $("#pid").text("pid");
        $(".pclass").text("pclass");
    });

    //custom event
    var btnVar = $("#bid");
    btnVar.click(function(){
        var e = jQuery.Event("myEvent");
        btnVar.trigger(e);
    });
    btnVar.bind("myEvent",function(event){
        console.log(event);
    })
});