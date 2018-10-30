package com.zhaoyu.springboot.myblog.service.impl;

import com.zhaoyu.springboot.myblog.domain.User;
import com.zhaoyu.springboot.myblog.repository.UserRepository;
import com.zhaoyu.springboot.myblog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    /* 进行用户保存
    * @method
    * @author zhaoyu
    * @see user
    [user]
    * @return  void
    * @date 2018/10/28 23:07
    */
    public void saveUser(User user) {
        userRepository.save(user);
    }

    /* 更新用户
    * @method
    * @author zhaoyu
    * @see
    [user]
    * @return  void
    * @date 2018/10/28 23:11
    */
    public void updateUser(User user) {
        userRepository.save(user);
    }

    /* 删除用户
    * @method
    * @author zhaoyu
    * @see
    [id]
    * @return  void
    * @date 2018/10/28 23:11
    */
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    /* 查找单个用户信息
    * @method
    * @author zhaoyu
    * @see
    [id]
    * @return  com.zhaoyu.springboot.myblog.domain.User
    * @date 2018/10/28 23:11
    */
    public User selectUser(Long id) {
        return userRepository.findById(id).get();
    }

    /* 查找用户列表
    * @method
    * @author zhaoyu
    * @see 对类、属性、方法的说明 参考转向
    []
    * @return  java.util.List<com.zhaoyu.springboot.myblog.domain.User>
    * @date 2018/10/28 23:11
    */
    public Page<User> selectUsers(Pageable page) {
        return userRepository.findAll(page);
    }
}
