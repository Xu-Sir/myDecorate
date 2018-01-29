package com.xhh.myDecorate.mapper;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.User;
import com.xhh.myDecorate.mapper.provider.UserProvider;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

/**
 * @author xuhaihong
 * @create 2018-01-26 18:30
 **/
@Mapper
@Repository
public interface UserMapper {

    @SelectProvider(type = UserProvider.class, method = "findQc")
    User findQc(RequestArgs args);
}
