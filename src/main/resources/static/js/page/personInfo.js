$(function () {
    /*弹出个人信息进行修改*/
    $("#updateInfo").click(function () {
        layer.open({
            title:"<h3>基本资料</h3>",
            type: 1,
            area: ['600px', '700px'],
            shadeClose: false, //点击遮罩关闭
            content: '<div class="container bg-white">\n' +
                '    <div class="layerInfo row">\n' +
                '\n' +
                '        <form class="form-horizontal col-md-12" role="form">\n' +
                '            <div class="form-group row">\n' +
                '                <label for="firstname" class="col-md-2 control-label">名字:</label>\n' +
                '                <div class="col-md-10">\n' +
                '                    <input type="text" class="form-control" id="firstname"\n' +
                '                           placeholder="请输入名字">\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="form-group row">\n' +
                '                <label for="lastname" class="col-md-2 control-label">性别:</label>\n' +
                '                <div class="col-md-10">\n' +
                '                    <label class="radio-inline ">\n' +
                '                        <input type="radio" name="optionsRadiosinline" id="optionsRadios3" value="option1" checked> 男\n' +
                '                    </label>\n' +
                '                    <label class="radio-inline">\n' +
                '                        <input type="radio" name="optionsRadiosinline" id="optionsRadios4"  value="option2"> 女\n' +
                '                    </label>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="form-group row">\n' +
                '                <label for="lastname" class="col-md-2 control-label">生日:</label>\n' +
                '                <div class="col-md-10">\n' +
                '                    <input type="date" class="form-control" id="lastname"\n' +
                '                           placeholder="请输入姓">\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="form-group row">\n' +
                '                <label for="lastname" class="col-md-2 control-label">地区:</label>\n' +
                '                <div class="col-md-10">\n' +
                '                    <input type="text" class="form-control" id="lastname"\n' +
                '                           placeholder="四川省遂宁市射洪县吴彦祖">\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="form-group row">\n' +
                '                <label for="lastname" class="col-md-2 control-label">行业:</label>\n' +
                '                <div class="col-md-10">\n' +
                '                    <input type="text" class="form-control" id="lastname"\n' +
                '                           placeholder="制药">\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="form-group row">\n' +
                '                <label for="lastname" class="col-md-2 control-label">职位:</label>\n' +
                '                <div class="col-md-10">\n' +
                '                    <input type="text" class="form-control" id="lastname"\n' +
                '                           placeholder="QA">\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="form-group row">\n' +
                '                <label for="lastname" class="col-md-2 control-label">简介:</label>\n' +
                '                <div class="form-group col-md-10">\n' +
                '                    <textarea class="form-control" rows="3">兴趣爱好...\n' +
                '                    </textarea>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="form-group">\n' +
                '                <div class="float-right">\n' +
                '                    <button type="submit" class="btn btn-default">确定</button>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </form>\n' +
                '    </div>'
        });
    })
})