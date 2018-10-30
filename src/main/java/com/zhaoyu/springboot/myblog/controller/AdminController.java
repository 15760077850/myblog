package com.zhaoyu.springboot.myblog.controller;

import com.zhaoyu.springboot.myblog.domain.Authority;
import com.zhaoyu.springboot.myblog.domain.User;
import com.zhaoyu.springboot.myblog.repository.AuthorityRepository;
import com.zhaoyu.springboot.myblog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    public String toAdmin(@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
                          @RequestParam(value = "pageSize", required = false, defaultValue = "7") int pageSize,
                          @RequestParam(value = "async", required = false, defaultValue = "false") Boolean async,
                          Model model) {
        Pageable pageable = new PageRequest(pageIndex, pageSize);
        Page<User> page = userService.selectUsers(pageable);
        model.addAttribute("page", page);
        model.addAttribute("isFirst", page.isFirst());
        model.addAttribute("isLast", page.isLast());
        model.addAttribute("users", page.getContent());
        return async == true ? "admin::#contain" : "admin";
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
    public String addUser(User user, @RequestParam(value = "authorityId", required = false) Long authorityId, @RequestParam(value = "authorityId_add", required = false) Long authorityId_add) {
        List<Authority> authorities = new ArrayList<>();


        if (authorityId == null) {
            Authority authority = authorityRepository.findById(authorityId_add).get();
            authorities.add(authority);
            user.setAuthorities(authorities);
            user.setBCryptPassword(user.getPassword());
        } else {
            Authority authority = authorityRepository.findById(authorityId).get();
            authorities.add(authority);
            user.setAuthorities(authorities);
            User originalUser = userService.selectUser(user.getId());
            String rawPassword = originalUser.getPassword();
            PasswordEncoder encoder = new BCryptPasswordEncoder();
            String encodePasswd = encoder.encode(user.getPassword());
            boolean isMatch = encoder.matches(rawPassword, encodePasswd);
            if (!isMatch) {
                user.setBCryptPassword(user.getPassword());
            } else {
                user.setPassword(user.getPassword());
            }
        }
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
    public String deleteUser(@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
                             @RequestParam(value = "pageSize", required = false, defaultValue = "7") int pageSize,
                             @PathVariable("id") Long id, Model model) {
        userService.deleteUser(id);
        Pageable pageable = new PageRequest(pageIndex, pageSize);
        Page<User> page = userService.selectUsers(pageable);
        model.addAttribute("page", page);
        model.addAttribute("isFirst", page.isFirst());
        model.addAttribute("isLast", page.isLast());
        model.addAttribute("users", page.getContent());
        return "admin::#contain";
    }

    @PatchMapping("/{id}")
    @ResponseBody
    public User updateUser(@PathVariable("id") Long id, Model model) {
        User user = userService.selectUser(id);
        return user;
    }
}
