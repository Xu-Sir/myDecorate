package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.Advice;
import com.xhh.myDecorate.mapper.AdviceMapper;
import com.xhh.myDecorate.service.AdviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:03
 **/
@Service
public class AdviceServiceImpl implements AdviceService {

    @Autowired
    AdviceMapper adviceMapper;

    @Override
    public void save(Advice advice){
        advice.setCreateTime(Calendar.getInstance().getTimeInMillis());
        adviceMapper.save(advice);
    }

    @Override
    public List<Advice> findAdvice(RequestArgs args){
        return adviceMapper.findAdvice(args);
    }

    @Override
    public Integer countAdvice(RequestArgs args){
        return adviceMapper.countAdvice(args);
    }
}
