package com.zhaoyu.springboot.myblog.service;

import com.zhaoyu.springboot.myblog.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface UserService {
    public void saveUser(User user);

    public void updateUser(User user);

    public void deleteUser(Long id);

    public User selectUser(Long id);

    public Page<User> selectUsers(Pageable page);
}
