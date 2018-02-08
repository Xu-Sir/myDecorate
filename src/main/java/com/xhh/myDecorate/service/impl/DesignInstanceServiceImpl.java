package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.DesignInstance;
import com.xhh.myDecorate.mapper.DesignInstanceMapper;
import com.xhh.myDecorate.service.DesignInstanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:06
 **/
@Service
public class DesignInstanceServiceImpl  implements DesignInstanceService{

    @Autowired
    DesignInstanceMapper designInstanceMapper;
    @Override
    public void save(DesignInstance instance){
        instance.setCreateTime(Calendar.getInstance().getTimeInMillis());
        designInstanceMapper.save(instance);
    }

    @Override
    public List<DesignInstance> findDesignInstance(RequestArgs args){
        return designInstanceMapper.findDesignInstance(args);
    }

    @Override
    public Integer countDesignInstance(RequestArgs args){
        return designInstanceMapper.countDesignInstance(args);
    }
}
