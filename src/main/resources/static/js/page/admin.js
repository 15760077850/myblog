$(function () {
    $('#addUser').on('click', function () {
        layer.open({
            title: "<h3>添加用户</h3>",
            type: 1,
            area: ['600px', '720px'],
            shadeClose: true, //点击遮罩关闭
            content: '    <div class="container bg-white">\n' +
            '        <div class="row ">\n' +
            '            <div class="col-md-12">\n' +
            '                <form class="text-center">\n' +
            '                    <div class="text-center mb-md-4">\n' +
            '                        <img src="holder.js/80x80" class="rounded-circle">\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="username" class="col-md-2 control-label">账号</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="username" placeholder="账号" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="name" class="col-md-2 control-label">用户名</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="name" placeholder="用户名" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="email" class="col-md-2 control-label">邮箱</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="email" class="form-control" id="email" placeholder="邮箱" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label  class="col-md-2 control-label">性别</label>\n' +
            '                        <div class="col-md-4">\n' +
            '                            <label class="radio-inline"><input type="radio" name="sex">男</label>\n' +
            '                            <label class="radio-inline"><input type="radio" name="sex">女</label>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="realName" class="col-md-2 control-label">真实姓名</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="realName" placeholder="真实姓名" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="birthday" class="col-md-2 control-label">生日</label>\n' +
            '                        <div class="col-md-4">\n' +
            '                            <input type="date" class="form-control" id="birthday" placeholder="生日" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="localtion" class="col-md-2 control-label">区域</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="localtion" placeholder="区域" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="trade" class="col-md-2 control-label">行业</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="trade" placeholder="行业" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="position" class="col-md-2 control-label">职位</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="position" placeholder="职位" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="position" class="col-md-2 control-label">权限</label>\n' +
            '                        <div class="col-md-3">\n' +
            '                            <select class="form-control" id="sel1">\n' +
            '                                <option selected="selected">用户</option>\n' +
            '                                <option>管理员</option>\n' +
            '                            </select>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="form-group row">\n' +
            '                        <div class="offset-10 col-md-2">\n' +
            '                            <button type="submit" class="btn btn-info">修改</button>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </form>\n' +
            '            </div>\n' +
            '\n' +
            '        </div>\n' +
            '    </div>'
        });
    });


    $('.update').on('click', function () {
        layer.open({
            title: "<h3>修改用户</h3>",
            type: 1,
            area: ['600px', '720px'],
            shadeClose: true, //点击遮罩关闭
            content: '    <div class="container bg-white">\n' +
            '        <div class="row ">\n' +
            '            <div class="col-md-12">\n' +
            '                <form class="text-center">\n' +
            '                    <div class="text-center mb-md-4">\n' +
            '                        <img src="holder.js/80x80" class="rounded-circle">\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="username" class="col-md-2 control-label">账号</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="username" placeholder="账号" readonly="readonly">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="name" class="col-md-2 control-label">用户名</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="name" placeholder="用户名" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="email" class="col-md-2 control-label">邮箱</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="email" class="form-control" id="email" placeholder="邮箱" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label  class="col-md-2 control-label">性别</label>\n' +
            '                        <div class="col-md-4">\n' +
            '                            <label class="radio-inline"><input type="radio" name="sex">男</label>\n' +
            '                            <label class="radio-inline"><input type="radio" name="sex">女</label>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="realName" class="col-md-2 control-label">真实姓名</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="realName" placeholder="真实姓名" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="birthday" class="col-md-2 control-label">生日</label>\n' +
            '                        <div class="col-md-4">\n' +
            '                            <input type="date" class="form-control" id="birthday" placeholder="生日" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="localtion" class="col-md-2 control-label">区域</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="localtion" placeholder="区域" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="trade" class="col-md-2 control-label">行业</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="trade" placeholder="行业" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="position" class="col-md-2 control-label">职位</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="position" placeholder="职位" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="position" class="col-md-2 control-label">权限</label>\n' +
            '                        <div class="col-md-3">\n' +
            '                            <select class="form-control" id="sel1">\n' +
            '                                <option selected="selected">用户</option>\n' +
            '                                <option>管理员</option>\n' +
            '                            </select>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="form-group row">\n' +
            '                        <div class="offset-10 col-md-2">\n' +
            '                            <button type="submit" class="btn btn-info">修改</button>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </form>\n' +
            '            </div>\n' +
            '\n' +
            '        </div>\n' +
            '    </div>'
        });
    });
})