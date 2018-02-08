package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.ProjectInstance;
import com.xhh.myDecorate.mapper.ProjectInstanceMapper;
import com.xhh.myDecorate.mapper.provider.ProjectInstanceProvider;
import com.xhh.myDecorate.service.ProjectInstanceService;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Calendar;
import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:08
 **/
@Mapper
public class ProjectInstanceServiceImpl implements ProjectInstanceService {

    @Autowired
    ProjectInstanceMapper instanceMapper;

    @Override
    public  void save(ProjectInstance instance){
        instance.setCreateTime(Calendar.getInstance().getTimeInMillis());
        instanceMapper.save(instance);
    }

    @Override
    public List<ProjectInstance> findProjectInstance(RequestArgs args){
        return instanceMapper.findProjectInstance(args);
    }

    @Override
    public Integer countProjectInstance(RequestArgs args){
        return instanceMapper.countProjectInstance(args);
    }
}
