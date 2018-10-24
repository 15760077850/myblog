$(function(){

    // 关于置顶排序的显示
    $(".caozuo").hide();
    $(document).on("mouseenter",".blogBrief",function(){
        $(this).find(".caozuo").show();
    })
    $(document).on("mouseleave",".blogBrief",function(){
        $(this).find(".caozuo").hide();
    })

})