package com.xhh.myDecorate.service;

import com.xhh.myDecorate.common.RequestArgs;

/**
 * @author xuhaihong
 * @create 2018-01-31 10:34
 **/
public interface CountPvService {

    void save(RequestArgs args);

    Integer count(RequestArgs args);
}
