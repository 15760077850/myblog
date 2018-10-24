$(function () {
    /**
     * 初始化
     */
    $("#comment").next().hide();


    /**
     * 解析md格式，并转化为html
     */
    var testEditor;
    testEditor = editormd.markdownToHTML("test-editormd", {
        htmlDecode: "style,script,iframe",  // you can filter tags decode
        emoji: true,
        taskList: true,
        tex: true,  // 默认不解析
        flowChart: true,  // 默认不解析
        sequenceDiagram: true,  // 默认不解析
        codeFold: true
    });


    // 评论时输入框的显示
    $("#comment").focus(function(){
        $(this).attr("rows",3);
        $(this).next().show();

    })
    $("#comment").blur(function(){
        $(this).attr("rows",1);
        $(this).next().hide();
    })


    /**
     * 控制右侧词条
     */

        $(window).scroll(function () {

            var top=$("html,body").scrollTop();
            if(top>900){
                $("#blogEntry").addClass("blogEntry2");
            }else{
                $("#blogEntry").removeClass("blogEntry2")
            }
        })
    //
    //
    // $(window).scroll(function () {
    //     var top=$("html,body").scrollTop();
    //     console.log(top);
    //     if(top>=700){
    //         $(".blogEntry").css("margin-top",700);
    //     }
    // })





})