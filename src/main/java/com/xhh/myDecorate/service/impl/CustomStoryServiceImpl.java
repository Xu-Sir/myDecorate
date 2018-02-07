package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.dao.CustomStory;
import com.xhh.myDecorate.mapper.CustomStoryMapper;
import com.xhh.myDecorate.service.CustomStoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:05
 **/
@Service
public class CustomStoryServiceImpl implements CustomStoryService{

    @Autowired
    CustomStoryMapper customStoryMapper;

    @Override
    public void save(CustomStory story){
       story.setCreateTime(Calendar.getInstance().getTimeInMillis());
        customStoryMapper.save(story);
    }
}