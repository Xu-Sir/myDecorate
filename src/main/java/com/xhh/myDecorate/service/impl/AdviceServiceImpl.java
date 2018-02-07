package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.dao.Advice;
import com.xhh.myDecorate.mapper.AdviceMapper;
import com.xhh.myDecorate.service.AdviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        adviceMapper.save(advice);
    }
}
