package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.mapper.CountPvMapper;
import com.xhh.myDecorate.service.CountPvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author xuhaihong
 * @create 2018-01-31 10:35
 **/
@Service
public class CountPvServiceImpl implements CountPvService{

    @Autowired
    CountPvMapper countPvMapper;

    @Override
    public void save(RequestArgs args){
        countPvMapper.save(args);
    }

    @Override
    public Integer count(RequestArgs args){

        return countPvMapper.count(args);
    }

}
