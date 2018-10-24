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
    private Long id;

    private String username;//账号

    private String password;//密码

    private String name;//用户名

    private String sex;//性别

    private String realName;//真实姓名

    private Date birthday;//生日
}
