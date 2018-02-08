package com.xhh.myDecorate.service;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.CustomStory;
import com.xhh.myDecorate.mapper.provider.CustomStoryProvider;

import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:05
 **/
public interface CustomStoryService {

    void save(CustomStory story);

    List<CustomStory> findCustomStory(RequestArgs args);

    Integer countCustomStory(RequestArgs args);
}
