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
        $("#"+$(this).attr("data-showdiv")).show(100);
        $('#pills.nav-pills li.active').removeClass('active')
        $(this).addClass('active');
    });
    $("#all-items").click(function() {
        $(".items:visible").hide();
        $(".items:hidden").show(100);
        $(".empty").hide();
        $('#pills.nav-pills li.active').removeClass('active')
        $(this).addClass('active');
    });
});
window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
ga('create', 'UA-XXXXX-Y', 'auto'); ga('send', 'pageview')