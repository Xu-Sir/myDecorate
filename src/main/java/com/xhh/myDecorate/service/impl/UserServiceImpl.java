package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.User;
import com.xhh.myDecorate.mapper.UserMapper;
import com.xhh.myDecorate.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author xuhaihong
 * @create 2018-01-26 18:40
 **/
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User findQc(RequestArgs args){
        return userMapper.findQc(args);
    }
}
