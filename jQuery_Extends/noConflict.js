/**
 * Created by weasleyqi on 9/2/15.
 */

var myJQ = $.noConflict();
myJQ(document).ready(function () {
    myJQ("#bid").on("click", function () {
        myJQ("div").text("New Hello");
    })
})