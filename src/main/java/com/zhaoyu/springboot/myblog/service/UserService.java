package com.zhaoyu.springboot.myblog.service;

import com.zhaoyu.springboot.myblog.domain.User;

import java.util.List;

public interface UserService {
    public void saveUser(User user);

    public void updateUser(User user);

    public void deleteUser(Long id);

    public User selectUser(Long id);

    public List<User> selectUsers();
}
