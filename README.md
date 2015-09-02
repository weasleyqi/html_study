# html_study
This is some demos to learn html5&css&javascript&jQuery.

#jQuery Dom
* Add Element<br>
	1、直接添加 var text1 = "\<p>a\</p>";<br>
	2、jquery方式添加 var text2 = $("\<p>\</p>").text("b");<br>
	3、Dom添加 <br>
	var text3 = document.createElement("p");<br>
    text3.innerHTML = "c";<br>
    $("body").append(text1,text2,text3);
	
* Delete Element<br>
	1、remove  remove：全部删除 <br>
	2、empty empty：删除子元素

#jQuery Event
	1、 Standard Event
		$("#id").click(function(){});
	2、 Custom Event
		var btnVar = $("#bid");
    	btnVar.click(function(){
        	var e = jQuery.Event("myEvent");
        	btnVar.trigger(e);
    	});
    	btnVar.bind("myEvent",function(event){
        	console.log(event);
    	})

#jQuery Animation
	显示/隐藏 hide(1000) show(1000) toggle(1000)<br>
	淡入/淡出 fadeIn(1000) fadeOut(1000) fadeToggle(1000) fadeTo(1000,0.3)<br>
	滑动 slideUp(1000) slideDown(1000) slideToggle(1000)

#jQuery Ajax
	1、get、post
		$.get("http://IP:8093/broker/sys/getNewVersion", function (data) {
            console.log(data);
            $("#span").text(data);
        }).error(function(){
            $("#span").text("get failed");
        });
    2、片段
    	加载一个片段，status表示获取片段的状态
        $("body").load("part.htm", function (a, status, c) {
        	console.log(status);
        	if(status == "error"){
            	$("body").append("error");
        	}
        })


