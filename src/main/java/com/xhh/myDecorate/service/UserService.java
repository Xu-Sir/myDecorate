package com.xhh.myDecorate.service;


import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.User;

/**
 * @author xuhaihong
 * @create 2018-01-26 18:40
 **/
public interface UserService {

    User findQc(RequestArgs args);
}
