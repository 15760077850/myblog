package com.zhaoyu.springboot.myblog.repository;

import com.zhaoyu.springboot.myblog.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * java类简单作用描述
 *
 * @ProjectName: myblog
 * @Package: com.zhaoyu.springboot.myblog.repository
 * @ClassName: AuthorityRepository
 * @Description: java类作用描述
 * @Author: zhaoyu
 * @CreateDate: 2018/10/29 21:00
 */
@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long> {
}
