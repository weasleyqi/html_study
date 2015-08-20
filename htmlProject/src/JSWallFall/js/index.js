/**
 * Created by Administrator on 2015/8/19.
 */
window.onload = function () {
    imgLocation("container","box");
}

function imgLocation(parent, content){
    var cparent = document.getElementById(parent);
    var ccoontent = getChildElements(cparent,content);
    var imgWidth = ccoontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:"+imgWidth*cols+"px ; margin:0 auto";

    var boxHeightArr = [];
    for (var i = 0 ; i < ccoontent.length ; i++){
        if(i < cols){
            boxHeightArr[i] = ccoontent[i].offsetHeight;
        }else{
            var minHeight = Math.min.apply(null,boxHeightArr);
            var minIndex = getMinHeightLocation(boxHeightArr,minHeight);
            ccoontent[i].style.position = "absolute";
            ccoontent[i].style.top = minHeight+"px";
            ccoontent[i].style.left = ccoontent[minIndex].offsetLeft+"px";
            boxHeightArr[minIndex] = boxHeightArr[minIndex]+ccoontent[i].offsetHeight;
        }
    }
}

function getChildElements(parent, content){
    var contentArr = [];
    var allContent = parent.getElementsByTagName("*");
    for (var i = 0; i < allContent.length; i ++){
        if (allContent[i].className == content){
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}

function getMinHeightLocation (boxHeightArr,minHeight){
    for (var i in boxHeightArr){
        if(boxHeightArr[i] == minHeight){
            return i ;
        }
    }
}