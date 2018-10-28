package com.zhaoyu.springboot.myblog.domain;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.naming.Name;
import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
public class User implements Serializable, UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;//id 主键
    @Column(length = 40, unique = true, nullable = false)
    private String username;//账号
    @Column(length = 20, unique = true, nullable = false)
    private String password;//密码
    @Column(length = 40)
    private String name;//用户名
    @Column(length = 40, unique = true)
    private String email;//邮箱
    @Column(length = 2)
    private String sex;//性别
    @Column(length = 20)
    private String realName;//真实姓名
    @Column(length = 20)
    private Date birthday;//生日
    @Column(length = 100)
    private String localtion;//区域
    @Column(length = 20)
    private String trade;//行业
    @Column(length = 20)
    private String position;//职位
    @Column(length = 200)
    private String avatar;//头像
    @ManyToMany(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinTable(joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "authority_id", referencedColumnName = "id"))
    private List<Authority> authorities;//权限
    protected User() { // JPA 的规范要求无参构造函数；设为 protected 防止直接使用
    }

    public User(String username, String password, String name, String email, String sex, String realName, Date birthday, String localtion, String trade, String position, String avatar) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.sex = sex;
        this.realName = realName;
        this.birthday = birthday;
        this.localtion = localtion;
        this.trade = trade;
        this.position = position;
        this.avatar = avatar;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        String username = this.getUsername();
        if (username != null) {
            SimpleGrantedAuthority authority = new SimpleGrantedAuthority(username);
            authorities.add(authority);
        }
        return authorities;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setBCryptPassword(String password) {
        this.password = new BCryptPasswordEncoder(4).encode(password);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getLocaltion() {
        return localtion;
    }

    public void setLocaltion(String localtion) {
        this.localtion = localtion;
    }

    public String getTrade() {
        return trade;
    }

    public void setTrade(String trade) {
        this.trade = trade;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public void setAuthorities(List<Authority> authorities) {
        this.authorities = authorities;
    }
}
