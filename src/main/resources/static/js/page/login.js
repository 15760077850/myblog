$(function () {
    $(".forregister1").hide();
    $("#btnForlogin").click(function () {
        $(".forregister1").hide();
        $(".forlogin1,.caozuo").show();
    })
    $("#btnForregister").click(function () {
        $(".forlogin1,.caozuo").hide();
        $(".forregister1").show();
    })
})