package com.zhaoyu.springboot.myblog.controller;

import com.zhaoyu.springboot.myblog.domain.Authority;
import com.zhaoyu.springboot.myblog.domain.User;
import com.zhaoyu.springboot.myblog.repository.AuthorityRepository;
import com.zhaoyu.springboot.myblog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * java类简单作用描述
 *
 * @ProjectName: myblog
 * @Package: com.zhaoyu.springboot.myblog.controller
 * @ClassName: AdminController
 * @Description: 管理员对用户的管理
 * @Author: zhaoyu
 * @CreateDate: 2018/10/29 19:48
 */
@Controller
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private UserService userService;

    @Autowired
    private AuthorityRepository authorityRepository;

    @GetMapping()
    public String toAdmin(Model model) {
        List<User> users = userService.selectUsers();
        model.addAttribute("users", users);
        return "admin";
    }

    /* 添加用户
    * @method
    * @author zhaoyu
    * @see 对类、属性、方法的说明 参考转向
    [user, authorityId]
    * @return  java.lang.String
    * @date 2018/10/29 21:46
    */
    @PostMapping("/add")
    public String addUser(User user, Long authorityId) {
        List<Authority> authorities = new ArrayList<>();
        Authority authority = authorityRepository.findById(authorityId).get();
        authorities.add(authority);
        user.setAuthorities(authorities);
        userService.saveUser(user);
        return "redirect:/admin";
    }

    /* 删除用户
    * @method
    * @author zhaoyu
    * @see 对类、属性、方法的说明 参考转向
    [id]
    * @return  java.lang.String
    * @date 2018/10/29 21:46
    */
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") Long id, Model model) {
        userService.deleteUser(id);
        model.addAttribute("users", userService.selectUsers());
        return "admin::#contain";
    }

    @PatchMapping("/{id}")
    public String updateUser(@PathVariable("id") Long id, Model model) {
        model.addAttribute("user", userService.selectUser(id));
        return "ss";
    }
}
