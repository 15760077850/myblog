package com.zhaoyu.springboot.myblog.controller;

import com.zhaoyu.springboot.myblog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * java类简单作用描述
 *
 * @ProjectName: myblog
 * @Package: com.zhaoyu.springboot.myblog.controller
 * @ClassName: UserController
 * @Description: 控制器-针对用户管理
 * @Author: zhaoyu
 * @CreateDate: 2018/10/28 23:29
 */
@Controller
public class UserController {
    @Autowired
    private UserService userService;
//    @GetMapping("/admin")
//    public String toAdmin(){
//        return "admin";
//
//    }
//    @GetMapping("/tologin")
//    public String toLogin(){
//        return "login";
//
//    }
//    @GetMapping("/blog")
//    public String toBlog(){
//        return "blog";
//
//    }
//    @GetMapping("/index")
//    public String index(){
//        return "index";
//
//    }
//    @GetMapping("/blogEdit")
//    public String tpBlogEdit(){
//        return "blogEdit";
//
//    }
//    @GetMapping("/personalBlogs")
//    public String toPersonalBlogs(){
//        return "personalBlogs";
//
//    }
//    @GetMapping("/personInfo")
//    public String toPersonInfo(){
//        return "personInfo";
//
//    }
}
