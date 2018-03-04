package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.DesignInstance;
import com.xhh.myDecorate.dao.Designer;
import com.xhh.myDecorate.mapper.DesignInstanceMapper;
import com.xhh.myDecorate.mapper.DesignerMapper;
import com.xhh.myDecorate.service.DesignInstanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Autowired
    DesignerMapper designerMapper;

    @Transactional
    @Override
    public void save(DesignInstance instance){
        instance.setCreateTime(Calendar.getInstance().getTimeInMillis());
        designInstanceMapper.save(instance);
        designerMapper.update(instance.getUserId(),instance.getTitle(),instance.getUrl(), instance.getId());
    }

    @Override
    public List<DesignInstance> findDesignInstance(RequestArgs args){
        return designInstanceMapper.findDesignInstance(args);
    }

    @Override
    public Integer countDesignInstance(RequestArgs args){
        return designInstanceMapper.countDesignInstance(args);
    }

    @Override
    public   DesignInstance searchDesignInstance(DesignInstance designInstance){
        return designInstanceMapper.searchDesignInstance(designInstance);
    }
}
