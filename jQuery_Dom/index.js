/**
 * Created by weasleyqi on 8/31/15.
 */

$(document).ready(function(){
   $("#bid").click(function () {
       alert($("#pid").text());
   });
    $("#bid2").click(function(){
        alert($("#aid").attr("href"));
    });
    //方法的回调
    $("#bid3").click(function(){
        $("#pid2").text(function(i,ot){
            return "old:"+ot +" new:new message";
        });
    });
    $("#bid4").click(function () {
        $("#pid2").append("appended ... ");
    });

    /**
     * 元素删除
     * empty remove
     * remove：全部删除
     * empty：删除子元素
     */
    $("#bid5").click(function(){
        $("#pid2").remove();
        //$("#pid2").empty();
    });
});

function appendElement (){
    /**
     * 添加元素的三种方式
     * 直接、jquery dom
     * @type {string}
     */
    var text1 = "<p>a</p>";
    var text2 = $("<p></p>").text("b");
    var text3 = document.createElement("p");
    text3.innerHTML = "c";
    $("body").append(text1,text2,text3);
}