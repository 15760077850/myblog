$(function () {
    /*
    添加
     */
    $("#add").click(function () {
        $("addUserForm").submit();
    })
    /*
    删除
     */
    $(document).on("click", ".blog-delete-user", function () {
        var userid = $(this).attr("userid");
        $.ajax({
            url: "/admin/" + userid,
            type: "delete",
            success: function (data) {
                $("#contain").html(data);
            }
        })
    })
    $('#addUser').on('click', function () {
        layer.open({
            title: "<h3>添加用户</h3>",
            type: 1,
            area: ['600px', '720px'],
            shadeClose: true, //点击遮罩关闭
            content: '    <div class="container bg-white" >\n' +
            '        <div class="row ">\n' +
            '            <div class="col-md-12">\n' +
            '                <form class="text-center" id="addUserForm" action="/admin/add" method="post">\n' +
            '                    <div class="text-center mb-md-4">\n' +
            '                        <img src="holder.js/80x80" class="rounded-circle">\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="username" class="col-md-2 control-label">账号</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="username" name="username" placeholder="账号" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="password" class="col-md-2 control-label">密码</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="password" class="form-control" id="password" name="password" placeholder="密码" value="1234">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="name" class="col-md-2 control-label">用户名</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="name" name="name" placeholder="用户名" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="email" class="col-md-2 control-label">邮箱</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="email" class="form-control" id="email" name="email" placeholder="邮箱" value="756834111@qq.com">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label  class="col-md-2 control-label">性别</label>\n' +
            '                        <div class="col-md-4">\n' +
            '                            <label class="radio-inline"><input type="radio" name="sex" value="男" checked="checked">男</label>\n' +
            '                            <label class="radio-inline"><input type="radio" name="sex" value="女">女</label>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="realName" class="col-md-2 control-label">真实姓名</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="realName" name="realName" placeholder="真实姓名" value="测试名字">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="birthday" class="col-md-2 control-label">生日</label>\n' +
            '                        <div class="col-md-4">\n' +
            '                            <input type="date" class="form-control" id="birthday" name="birthday" placeholder="生日" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="localtion" class="col-md-2 control-label">区域</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="localtion" name="localtion" placeholder="区域" value="武侯区">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="trade" class="col-md-2 control-label">行业</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="trade" name="trade" placeholder="行业" value="制药">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="position" class="col-md-2 control-label">职位</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="position" name="position" placeholder="职位" value="制药大师">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="position" class="col-md-2 control-label">权限</label>\n' +
            '                        <div class="col-md-3">\n' +
            '                            <select class="form-control" id="sel1" name="authorityId">\n' +
            '                                <option selected="selected" value="0">用户</option>\n' +
            '                                <option value="1">管理员</option>\n' +
            '                            </select>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="form-group row">\n' +
            '                        <div class="offset-10 col-md-2">\n' +
            '                            <button type="submit" id="add" class="btn btn-info">添加</button>\n' +
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
            content: '    <div class="container bg-white" id="content-update">\n' +
            '        <div class="row ">\n' +
            '            <div class="col-md-12">\n' +
            '                <form class="text-center" action="/admin/update" id="updateUserForm" method="post">\n' +
            '                    <div class="text-center mb-md-4">\n' +
            '                        <img src="holder.js/80x80" class="rounded-circle">\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="username" class="col-md-2 control-label">账号</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="username" name="username" th:value="${user.username}" placeholder="账号" readonly="readonly">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="password" class="col-md-2 control-label">密码</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="password" class="form-control" id="password" name="password" th:value="${user.password}" placeholder="密码">\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="name" class="col-md-2 control-label">用户名</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="name" name="name" th:value="${user.name}" placeholder="用户名" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="email" class="col-md-2 control-label">邮箱</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="email" class="form-control" id="email" name="email" th:value="${user.email}" placeholder="邮箱" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label  class="col-md-2 control-label">性别</label>\n' +
            '                        <div class="col-md-4">\n' +
            '                            <label class="radio-inline"><input type="radio" name="sex" name="sex">男</label>\n' +
            '                            <label class="radio-inline"><input type="radio" name="sex" name="sex">女</label>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="realName" class="col-md-2 control-label" >真实姓名</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="realName" name="realName" th:value="${user.realName}" placeholder="真实姓名" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="birthday" class="col-md-2 control-label">生日</label>\n' +
            '                        <div class="col-md-4">\n' +
            '                            <input type="date" class="form-control" id="birthday" name="birthday" th:value="${user.birthday}" placeholder="生日" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="localtion" class="col-md-2 control-label">区域</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="localtion" name="location" th:value="${user.location}" placeholder="区域" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="trade" class="col-md-2 control-label">行业</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="trade" name="trade" th:value="${user.trade}" placeholder="行业" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="position" class="col-md-2 control-label">职位</label>\n' +
            '                        <div class="col-md-10">\n' +
            '                            <input type="text" class="form-control" id="position" name="position" th:value="${user.position}" placeholder="职位" >\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="form-group row">\n' +
            '                        <label for="position" class="col-md-2 control-label">权限</label>\n' +
            '                        <div class="col-md-3">\n' +
            '                            <select class="form-control" id="sel1" name="authorityid">\n' +
            '                                <option selected="selected" value="0">用户</option>\n' +
            '                                <option value="1">管理员</option>\n' +
            '                            </select>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="form-group row">\n' +
            '                        <div class="offset-10 col-md-2">\n' +
            '                            <button type="submit" id="update" class="btn btn-info">修改</button>\n' +
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