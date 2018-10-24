$(function(){
    // 绑定Scroll进行顶部合法展示
    //绑定scroll进行放大图标展示
    var top=0;
    var p=0;
    $(window).scroll(function(){
        top=$("html,body").scrollTop();
        if(top>=p){
            $(".head").slideUp(400);
            $(".icon-quanping1").hide();
        }else {
            $(".head").slideDown(100);
            $(".icon-quanping1").show();
        }
        p=top;

    })
    // 随机标签颜色
    function rc(){
        return parseInt(Math.random()*256);
    }
    for (var i=0;i<$(".badge").length;i++) {
        $(".badge").eq(i).css("background-color","rgb("+rc()+","+rc()+","+rc()+")");
    }
    $(".icon-quanping1").click(function () {
        if($(".blogEntry").hasClass("col-md-4")) {
            $(".blogEntry").hide().removeClass("col-md-4");
            $(".blogInfo").removeClass("col-md-8").addClass("col-md-12");
            $(".icon-quanping1").css({
                "font-size": "30px",
                "opacity": "0.1",
                "position": "fixed",
                "top":"100px",
                "left":"80%",
                "z-index": "999"
            });
        }else{
                $(".blogEntry").show().addClass("col-md-4");
                $(".blogInfo").addClass("col-md-8").removeClass("col-md-12");
            $(".icon-quanping1").css({
                "font-size": "30px",
                "opacity": "0.1",
                "position": "fixed",
                "top":"100px",
                "left":"60%",
                "z-index": "999"
            });
        }
    })

})