package com.zhaoyu.springboot.myblog.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity
public class User implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;//id 主键

    private String username;//账号

    private String password;//密码

    private String name;//用户名

    private String email;//邮箱

    private String sex;//性别

    private String realName;//真实姓名

    private Date birthday;//生日

    private String localtion;//区域

    private String trade;//行业

    private String position;//职位

    private String avatar;//头像

    protected User() { // JPA 的规范要求无参构造函数；设为 protected 防止直接使用
    }
}
