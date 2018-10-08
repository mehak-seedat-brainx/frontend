$(document).ready(function() {
    $("#products").hover(function () {
        document.getElementById("items").style.display = 'block';
    });
    $("#items").click(function () {
        document.getElementById("items").style.display = 'none';
    });
    $("#minus").click(function () {
        var qty=$('#quantity').val();
        if(qty>1) {
            document.getElementById("quantity").stepDown(1);
        }
    });
    $("#plus").click(function () {
        document.getElementById("quantity").stepUp(1);
    });
    $(".links").click(function() {
        $(".items:visible").hide();
        $("#"+$(this).attr("data-showdiv")).show();
    });
});
window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
ga('create', 'UA-XXXXX-Y', 'auto'); ga('send', 'pageview')