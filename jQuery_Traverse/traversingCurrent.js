/**
 * Created by weasleyqi on 9/5/15.
 */

/**
 * siblings() 除当前元素外的所有同级元素
 * next() 当前元素的下一个同级元素
 * nextAll() 当前元素的下面的所有同级元素
 * nextUntil() 向下元素区间
 * prev() 当前元素的上一个同级元素
 * prevAll() 当前元素的上面的所有同级元素
 * prevUntil() 向上元素区间
 */
$(document).ready(function () {
    //$("h4").siblings().css({border:"3px solid #FF0000"});
    //$("h4").next().css({border:"3px solid #FF0000"});
    //$("h4").nextAll().css({border:"3px solid #FF0000"});
    //$("h4").nextUntil().css({border:"3px solid #FF0000"});
    //$("h4").prev().css({border:"3px solid #FF0000"});
    //$("h4").prevAll().css({border:"3px solid #FF0000"});
    $("h4").prevUntil("P").css({border:"3px solid #FF0000"});
})