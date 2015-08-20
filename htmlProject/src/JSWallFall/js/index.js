/**
 * Created by Administrator on 2015/8/19.
 */
window.onload = function () {
    imgLocation("container","box");

    var imgData = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]};
    window.onscroll = function (){
        if (checkFlag()){
            var cparent = document.getElementById("container");
            for (var i = 0 ; i < imgData.data.length ; i++){
                var ccontent = document.createElement("div");
                ccontent.className = "box";
                cparent.appendChild(ccontent);
                var imgBox = document.createElement("div");
                imgBox.className = "img_box";
                ccontent.appendChild(imgBox);
                var img = document.createElement("img");
                img.src = "img/"+imgData.data[i].src;
                imgBox.appendChild(img);
            }
            imgLocation("container","box");
        }
    }

}

function checkFlag (){
    var cparent = document.getElementById("container");
    var  ccontent = getChildElements(cparent,"box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;

    if (lastContentHeight < scrollTop + pageHeight){
        return true;
    }else {
        return false;
    }
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