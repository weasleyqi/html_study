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

#jQuery Extends & noConflict
	1、Extends
		* define:
		$.myjq = function () {
    		alert("my Jq");
		}
		* use:
		$.myjq();
	2、noConflict
		$.noConflict(); --> 使用完这个以后，$在jQuery中就失效了，需要使用jQuery代替$.
		-----------------------
		可以自定义一个变量来接收jQuery
		var myJQ = $.noConflict();
		以后就可以这样使用：myJQ(document).ready()
		
#jQuery CSS
	1、添加CSS
		$("div").css("width","100px"); --> 比较麻烦，添加一个属性的时候比较方便
		$("div").css({
        	width:"100px",
        	height:"100px",
        	backgroundColor:"Red"
        }); --> 添加多个属性的时候比较方便
        $("div").addClass("style1");  -->添加一个css文件中的类
        $(this).toggleClass("style2");
    2、盒子模型（width一样）
    	height：控件本身的高度
    	innerHeight：控件高度＋内边距Padding，但是不包含border
    	outerHeight：控件高度＋内边距Padding＋border；
    	outerHeight(true)：控件高度＋内边距Padding＋border＋外边距margin；
            
#jQuery Traversing
	1、TraversingDown
		children ： 只能找到该元素的下一级元素，不能找到全部元素
		find ： find能找到该元素的所有子元素
	2、TraversingUp
		parent ： 只能向上查找一级父元素，不能找到全部元素
		parents ： 查找所有父元素，可以传入参数查找某个父元素
		parentsUntil ： 查找父元素区间
	3、TraversingCurrent 同级遍历
		siblings() 除当前元素外的所有同级元素
		 next() 当前元素的下一个同级元素
		 nextAll() 当前元素的下面的所有同级元素
		 nextUntil() 向下元素区间
		 prev() 当前元素的上一个同级元素
		 prevAll() 当前元素的上面的所有同级元素
		 prevUntil() 向上元素区间
	4、遍历过滤
		first() 同级第一个元素
		last()	同级最后一个元素
		eq(index) 同级第index个元素 
		filter(c) 同级条件为c的元素集合 
		not(c) 同级条件不为c的元素集合
		
#jQuery waterfall
		对比js实现瀑布流和用jQuery实现的差异，jQuery实现起来比较的轻松，代码也很简洁。
		
#jQuery menu
	垂直菜单
		ulNode.toggle(C);//C：数字 slow normal fast
	水平菜单
		$(".hmain").hover(function () {
        	$(this).children("ul").slideDown();
        	changeIcon($(this).children("a"));
    	}, function () {
        	$(this).children("ul").slideUp();
        	changeIcon($(this).children("a"));
    	})