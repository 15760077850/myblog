$(function () {

    $(document).on("click", ".page-item", function () {
        var pageIndex = $(this).children().attr("pageIndex");
        var pageSize = 7;
        getUersByName(pageIndex, pageSize);
    });

    //分页通用
    function getUersByName(pageIndex, pageSize) {
        $.ajax({
            url: "/admin",
            contentType: 'application/json',
            data: {
                "async": true,
                "pageIndex": pageIndex,
                "pageSize": pageSize
                // "name":$("#searchName").val()
            },
            success: function (data) {
                $("#contain").html(data);
            }
        });
    }
    /*
    添加
     */
    $("#add").click(function () {
        $("addUserForm").submit();
    })

    $("#update").click(function () {
        $("updateUserForm").submit();
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
    $(document).on('click', '#addUser', function () {
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
            '                            <input type="text" class="form-control" id="name" name="name" placeholder="用户名" value="用户名称">\n' +
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
            '                            <input type="date" class="form-control" id="birthday" name="birthday" placeholder="生日" value="2018-12-01">\n' +
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
            '                        <label for="authorityId_add" class="col-md-2 control-label">权限</label>\n' +
            '                        <div class="col-md-3">\n' +
            '                            <select class="form-control" id="authorityId_add" name="authorityId_add">\n' +
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


    $(document).on('click', '.blog-update-user', function () {
        $.ajax({
            url: "/admin/" + $(this).attr("userid"),
            type: "patch",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var username = data.username;
                var userid = data.id;
                var password = data.password;
                var name = data.name;
                var email = data.email;
                var sex = data.sex;
                if (sex == "男") {
                    sex = '<div class="form-group row">\n' +
                        '                        <label  class="col-md-2 control-label">性别</label>\n' +
                        '                        <div class="col-md-4">\n' +
                        '                            <label class="radio-inline"><input type="radio"  name="sex" checked="checked" value="男">男</label>\n' +
                        '                            <label class="radio-inline"><input type="radio"  name="sex" value="女">女</label>\n' +
                        '                        </div>\n' +
                        '                    </div>\n';
                } else {
                    sex = '<div class="form-group row">\n' +
                        '                        <label  class="col-md-2 control-label">性别</label>\n' +
                        '                        <div class="col-md-4">\n' +
                        '                            <label class="radio-inline"><input type="radio"  name="sex" value="男">男</label>\n' +
                        '                            <label class="radio-inline"><input type="radio"  name="sex" checked="checked" value="女">女</label>\n' +
                        '                        </div>\n' +
                        '                    </div>\n';
                }

                var realName = data.realName;
                var birthday = data.birthday;
                var localtion = data.localtion;
                var trade = data.trade;
                var position = data.position;
                // var authorityid;
                // var authorities=data.authorities;
                // for(var i=0;i<authorities.size();i++){
                //     authorityid= authorities[i].id;
                //     alert(authorityid);
                // }
                layer.open({
                    title: "<h3>修改用户</h3>",
                    type: 1,
                    area: ['600px', '720px'],
                    shadeClose: true, //点击遮罩关闭
                    content: '    <div class="container bg-white" id="content-update">\n' +
                    '        <div class="row ">\n' +
                    '            <div class="col-md-12">\n' +
                    '                <form class="text-center" action="/admin/add" id="updateUserForm" method="post">\n' +
                    '                    <div class="text-center mb-md-4">\n' +
                    '                        <img src="holder.js/80x80" class="rounded-circle">\n' +
                    '                    </div>\n' +
                    '                    <div class="form-group row">\n' +
                    '                        <label for="username" class="col-md-2 control-label">账号</label>\n' +
                    '                        <div class="col-md-10">\n' +
                    '                            <input type="text" class="form-control" id="username" name="username" value=' + username + ' placeholder="账号" readonly="readonly">\n' +
                    '                            <input type="hidden" class="form-control"  name="id" value=' + userid + ' readonly="readonly">\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                    <div class="form-group row">\n' +
                    '                        <label for="password" class="col-md-2 control-label">密码</label>\n' +
                    '                        <div class="col-md-10">\n' +
                    '                            <input type="password" class="form-control" id="password" name="password" value=' + password + ' placeholder="密码">\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                    <div class="form-group row">\n' +
                    '                        <label for="name" class="col-md-2 control-label">用户名</label>\n' +
                    '                        <div class="col-md-10">\n' +
                    '                            <input type="text" class="form-control" id="name" name="name" value=' + name + '   >\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                    <div class="form-group row">\n' +
                    '                        <label for="email" class="col-md-2 control-label">邮箱</label>\n' +
                    '                        <div class="col-md-10">\n' +
                    '                            <input type="email" class="form-control" id="email" name="email" value=' + email + ' placeholder="邮箱" >\n' +
                    '                        </div>\n' +
                    '                    </div>\n' + sex +
                    '                    <div class="form-group row">\n' +
                    '                        <label for="realName" class="col-md-2 control-label" >真实姓名</label>\n' +
                    '                        <div class="col-md-10">\n' +
                    '                            <input type="text" class="form-control" id="realName" name="realName" value=' + realName + ' placeholder="真实姓名" >\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                    <div class="form-group row">\n' +
                    '                        <label for="birthday" class="col-md-2 control-label">生日</label>\n' +
                    '                        <div class="col-md-4">\n' +
                    '                            <input type="date" class="form-control" id="birthday" name="birthday" value=' + birthday + ' placeholder="生日" >\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                    <div class="form-group row">\n' +
                    '                        <label for="localtion" class="col-md-2 control-label">区域</label>\n' +
                    '                        <div class="col-md-10">\n' +
                    '                            <input type="text" class="form-control" id="localtion" name="localtion" value=' + localtion + ' placeholder="区域" >\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                    <div class="form-group row">\n' +
                    '                        <label for="trade" class="col-md-2 control-label">行业</label>\n' +
                    '                        <div class="col-md-10">\n' +
                    '                            <input type="text" class="form-control" id="trade" name="trade" value=' + trade + ' placeholder="行业" >\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                    <div class="form-group row">\n' +
                    '                        <label for="position" class="col-md-2 control-label">职位</label>\n' +
                    '                        <div class="col-md-10">\n' +
                    '                            <input type="text" class="form-control" id="position" name="position" value=' + position + ' placeholder="职位" >\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '\n' +
                    '                    <div class="form-group row">\n' +
                    '                        <label for="authorityId" class="col-md-2 control-label">权限</label>\n' +
                    '                        <div class="col-md-3">\n' +
                    '                            <select class="form-control" id="authorityId" name="authorityId">\n' +
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
            }
        });


    });
})