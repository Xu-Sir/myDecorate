package com.xhh.myDecorate.service;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.ProjectInstance;

import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:07
 **/
public interface ProjectInstanceService {

    void save(ProjectInstance instance);

    List<ProjectInstance> findProjectInstance(RequestArgs args);

    Integer countProjectInstance(RequestArgs args);
}
