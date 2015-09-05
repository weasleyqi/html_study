/**
 * Created by weasleyqi on 9/5/15.
 */

/**
 * children 一层子元素
 * find 寻找某个子元素
 */

/**
 * parent 一层父元素
 * parents 所有父元素
 * parentsUntil 父元素区间
 */

$(document).ready(function () {
    //TraversingDown
    //$("#div1").children("#div2").css({border:"3px solid #FF0000"});//只能找到该元素的下一级元素，不能找到全部元素
    //$("#div1").find("a").css({border:"3px solid #FF0000"});//find能找到该元素的所有子元素

    //TraversingUp
    $("a").parent("p").css({border:"3px solid #FF0000"}); //只能向上查找一级父元素
    //$("a").parents().css({border:"3px solid #FF0000"}); //查找所有父元素，可以传入参数查找某个父元素
    //$("a").parentsUntil().css({border:"3px solid #FF0000"}); //查找父元素区间
})