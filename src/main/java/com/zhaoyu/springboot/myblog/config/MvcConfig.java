package com.zhaoyu.springboot.myblog.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        //跳转主页
        registry.addViewController("/index").setViewName("index");
        //博客展示页面
        registry.addViewController("/blog").setViewName("blog");
        //博客编辑页面
        registry.addViewController("/blogEdit").setViewName("blogEdit");
        //登录页面
        registry.addViewController("/login").setViewName("login");
        //个人博客列表展示
        registry.addViewController("/personalBlogs").setViewName("personalBlogs");
        //个人信息
        registry.addViewController("/personInfo").setViewName("personInfo");

    }
}
